import React, { useEffect, useState } from 'react';
import './TreeView.scss';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, ListItemText, MenuItem } from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CategoryModal from './CategoryCreation';
import LongMenu from './VertIcon';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { updateMenuList } from '../../features/menuList/menuListSlice';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const DraggableCategory = ({ testObj, category, index, categories, setCategories, handleDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState({})
  const [selectedButton, setSelectedButton] = useState("")
  const [dummyObject, setDummyObj] = useState(testObj);
  const [openCategories, setOpenCategories] = useState(false);
  const [openSubCategories, setOpenSubCategories] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const workspaces = useSelector((state) => state.workspaceReducer.workspaces)
  const [selectedWorkspaces, setSelectedWorkspaces] = useState(workspaces)
  const [categoryDropdownState, setCategoryDropdownState] = useState(false)
  const [subCategoryDropdownState, setSubCategoryDropdownState] = useState(category?.subCategories)
  const [errorMessage, setErrorMessage] = useState("")
  const menuList = useSelector((state) => state.menuListReducer.menuItems)
  const dispatch = useDispatch()

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const updatedCategories = [...categories];
    const [draggedCategory] = updatedCategories.splice(draggedIndex, 1);
    updatedCategories.splice(index, 0, draggedCategory);
    setCategories(updatedCategories);
  };

  const handleCategoryClick = (categoryName, event) => {
    // setOpenCategories((prevOpenCategories) => ({
    //   ...prevOpenCategories,
    //   [categoryName]: !prevOpenCategories[categoryName],
    // }));
    setOpenCategories(!openCategories)

    // Close menu when clicking on a category
    setShowMenu(false);
  };

  const handleSubCategoryClick = (subcategoryName, event) => {
    // setOpenSubCategories((prevOpenSubCategories) => ({
    //   ...prevOpenSubCategories,
    //   [subcategoryName]: !prevOpenSubCategories[subcategoryName],
    // }));
    setOpenSubCategories(!openSubCategories)

    // Close menu when clicking on a subcategory
    setShowMenu(false);
  };

  const handleSettingsClick = (event) => {
    // Prevent the default behavior to avoid triggering other events
    event.preventDefault();

    // Calculate the position of the menu based on the click event
    const position = {
      top: event.clientY,
      left: event.clientX,
    };

    setMenuPosition(position);

    // Toggle the menu visibility
    setShowMenu(!showMenu);
  };

  const updateCategory = (categoryObj) => {

    // Find the index of the "Supply Chain" category in the main object
    const categoryIndex = dummyObject.categories.findIndex(category => category.name === categoryObj.name);
    console.log("categoryObj out", dummyObject, categoryObj)

    if (categoryObj?.error) {
      console.log("categoryObj lucj", dummyObject, categoryObj)

      setErrorMessage(categoryObj.error)
    }
    // Check if the category exists
    if (categoryIndex !== -1) {
      // Update the "Supply Chain" category with the new object
      let test = { ...dummyObject }
      test.categories[categoryIndex] = categoryObj;
      setDummyObj(test)
      setCategories(test?.categories)
      setSubCategoryDropdownState(test?.categories?.subCategories)
      setErrorMessage("")
      console.log("categoryObj lucj", dummyObject, categoryObj)


    }

    // Now, the "Supply Chain" category is updated in the main object
  }

  // const addNewCategory = (categoryObj) => {
  //   let test = { ...dummyObject }
  //   test.categories.push({ ...categoryObj, exact: true, to: '/home/', iconClassName: 'bi bi-file-earmark', component: '' })
  //   console.log("check kar", test, subCategoryDropdownState)
  //   // setSubCategoryDropdownState(categoryObj.subCategories)
  //   // setDummyObj(test)
  // }

  const addNewCategory = (categoryObj) => {
    let test = { ...dummyObject };
    const existingCategory = test.categories.find(category => category.name === categoryObj.name);
    console.log("check kar pehle", existingCategory);

    if (!existingCategory) {
      test.categories.push({
        ...categoryObj,
        exact: true,
        to: '/home/',
        iconClassName: 'bi bi-file-earmark',
        component: ''
      });
      console.log("check kar", test, subCategoryDropdownState);
      setErrorMessage("")
      // setSubCategoryDropdownState(categoryObj.subCategories)
      // setDummyObj(test)
    } else {
      setErrorMessage(`Category with name '${categoryObj.name}' already exists.`)

      console.log(`Category with name '${categoryObj.name}' already exists.`);
    }
  }


  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="category-item"
    >
      <div key={index} className="category-header">
        {category.name}
        <div className="icon-container">
          <span className="icon" onClick={() => setCategoryDropdownState(!categoryDropdownState)}>
            {!categoryDropdownState ? <ArrowDropDownOutlinedIcon /> : <ArrowDropUpIcon />}
            {/* Your existing LongMenu component or icon */}
          </span>
          <LongMenu handleDelete={() => handleDelete(category)} />

        </div>
      </div>
      {/* ... Rest of your category item code ... */}
      {isModalOpen && (<CategoryModal updateCategory={(categoryObj) => updateCategory(categoryObj)}
        addNewCategory={(categoryObj) => addNewCategory(categoryObj)}
        selectedButton={selectedButton} categoryObj={selectedCategory} onClose={() => setIsModalOpen(false)} />)}
      <div style={{ display: categoryDropdownState ? "contents" : "none" }}>
        {true && (
          <div className="category-report-container">
            {category?.reports?.map((report, reportIndex) => (
              <div key={reportIndex} className="report-item">
                {report.name}
              </div>
            ))}
          </div>
        )}
        {true && (
          <div className="subcategory-container">
            {subCategoryDropdownState?.map((subCategory, subIndex) => (
              <div key={subIndex} className="subcategory-item">
                <div className="subcategory-header" onClick={(event) => handleSubCategoryClick(subCategory.name, event)}>
                  {subCategory.name}
                  <div className="icon-container">
                    <span className="icon" onClick={() => {
                      console.log("hey checking",)

                      setSubCategoryDropdownState(subCategoryDropdownState?.map((item) => item.name === subCategory.name ? { ...item, isOpen: !item.isOpen } : item))
                    }}>
                      {subCategory.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownOutlinedIcon />}
                    </span>
                    <LongMenu handleDelete={() => {
                      subCategoryDropdownState.splice(subIndex, 1)
                    }} />

                  </div>
                </div>
                {true && (
                  <div className="report-container" style={{ display: subCategory.isOpen ? "contents" : "none" }}>
                    {subCategory.reports.map((report, reportIndex) => (
                      <div key={reportIndex} className="report-item">
                        {report.name}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))}
            {errorMessage ? (<div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "red", paddingTop: "8px" }}>{errorMessage}</p>
              <IconButton onClick={() => setErrorMessage('')}>
                <HighlightOffIcon />
              </IconButton>
            </div>
            ) : (<></>)}

            <div className="button-container">
              <button className="add-report-button" onClick={() => {
                setIsModalOpen(true)
                setSelectedCategory(category)
                setSelectedButton("subCategory")
              }}>
                <AddCircleOutlineRoundedIcon />
                Add Subcategory

              </button>
              <button className="add-subcategory-button" onClick={() => {
                setIsModalOpen(true)
                setSelectedCategory(category)
                setSelectedButton("report")
              }}>
                <AddCircleOutlineRoundedIcon />
                Add Report
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

const ListPage = () => {
  const [openCategories, setOpenCategories] = useState(false);
  const [openSubCategories, setOpenSubCategories] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const workspaces = useSelector((state) => state.workspaceReducer.workspaces)
  const [selectedWorkspaces, setSelectedWorkspaces] = useState(workspaces)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState({})
  const [selectedButton, setSelectedButton] = useState("")
  const [errorMessage, setErrorMessage] = useState("")


  // const testObj = {
  //   "name": "Hierarchy",
  //   "categories": [
  //     {
  //       "name": "Sales",
  //       "exact": true,
  //       "to": '/home/',
  //       "iconClassName": 'bi bi-file-earmark',
  //       "component": '',
  //       "subCategories": [
  //       ],
  //       "reports": [
  //         { "name": "Report1", "link": "L1" },
  //         { "name": "Report2", "link": "L2" },
  //         { "name": "Report3", "link": "L3" }
  //       ]
  //     },
  //     {
  //       "name": "Supply Chain",
  //       "exact": true,
  //       "to": '/home/',
  //       "iconClassName": 'bi bi-file-earmark',
  //       "component": '',
  //       "subCategories": [
  //         {
  //           "name": "Supply Scorecard",
  //           "reports": [
  //             { "name": "Report4", "link": "L1" },
  //             { "name": "Report5", "link": "L2" },
  //             { "name": "Report6", "link": "L3" }
  //           ],
  //           "isOpen": false
  //         },
  //         {
  //           "name": "Demand planning",
  //           "reports": [
  //             { "name": "Report4", "link": "L1" },
  //             { "name": "Report5", "link": "L2" },
  //             { "name": "Report6", "link": "L3" }
  //           ],
  //           "isOpen": false
  //         },
  //         {
  //           "name": "Supply planning",
  //           "reports": [
  //             { "name": "Report4", "link": "L1" },

  //           ],
  //           "isOpen": false
  //         }
  //       ],
  //       "reports": [
  //         { "name": "Report4", "link": "L1" },
  //         { "name": "Report5", "link": "L2" }
  //       ]
  //     }
  //   ]
  // };
  const menuList = useSelector((state) => state.menuListReducer.menuItems)
  const testObj = {
    "name": "Hierarchy",
    "categories": [...menuList.slice(2)]
  }

  const [dummyObject, setDummyObj] = useState(testObj);


  const [categories, setCategories] = useState(dummyObject.categories);
  const dispatch = useDispatch()

  const handleCategoryClick = (categoryName, event) => {
    // setOpenCategories((prevOpenCategories) => ({
    //   ...prevOpenCategories,
    //   [categoryName]: !prevOpenCategories[categoryName],
    // }));
    setOpenCategories(!openCategories)

    // Close menu when clicking on a category
    setShowMenu(false);
  };

  const handleSubCategoryClick = (subcategoryName, event) => {
    // setOpenSubCategories((prevOpenSubCategories) => ({
    //   ...prevOpenSubCategories,
    //   [subcategoryName]: !prevOpenSubCategories[subcategoryName],
    // }));
    setOpenSubCategories(!openSubCategories)

    // Close menu when clicking on a subcategory
    setShowMenu(false);
  };

  const handleSettingsClick = (event) => {
    // Prevent the default behavior to avoid triggering other events
    event.preventDefault();

    // Calculate the position of the menu based on the click event
    const position = {
      top: event.clientY,
      left: event.clientX,
    };

    setMenuPosition(position);

    // Toggle the menu visibility
    setShowMenu(!showMenu);
  };

  const updateCategory = (categoryObj) => {

    // Find the index of the "Supply Chain" category in the main object
    const categoryIndex = dummyObject.categories.findIndex(category => category.name === categoryObj.name);
    console.log("checking", categoryObj)
    // Check if the category exists
    if (categoryIndex !== -1) {
      // Update the "Supply Chain" category with the new object
      let test = { ...dummyObject }
      test.categories[categoryIndex] = categoryObj;
      setDummyObj(test)
    }
  }

  // const addNewCategory = (categoryObj) => {
  //   let test = { ...dummyObject }
  //   test.categories.push(categoryObj)
  //   console.log("check kar", test, categoryObj)

  //   setDummyObj(test)
  //   setCategories(test.categories)
  // }

  const addNewCategory = (categoryObj) => {
    let test = { ...dummyObject };
    const existingCategory = test.categories.find(category => category.name === categoryObj.name);
    console.log("check kar pehle", existingCategory);

    if (!existingCategory) {
      test.categories.push(categoryObj)
      // test.categories.push({
      //   ...categoryObj,
      //   exact: true,
      //   to: '/home/',
      //   iconClassName: 'bi bi-file-earmark',
      //   component: ''
      // });
      // console.log("check kar", test, categories);
      setDummyObj(test)
      setCategories(test.categories)
      // setSubCategoryDropdownState(categoryObj.subCategories)
      // setDummyObj(test)
    } else {
      setErrorMessage(`Category with name '${categoryObj.name}' already exists.`)
      console.log(`Category with name '${categoryObj.name}' already exists.`);
    }
  }


  const saveChanges = () => {
    let test = [...menuList]
    test.slice(0, 2)
    let a1 = [...test.slice(0, 2), ...categories];
    console.log("check", test.slice(0, 2), categories, a1)
    let testObj = {
      "name": "Hierarchy",
      "categories": [...categories]
    }
    setDummyObj(testObj)
    setCategories(testObj.categories)
    dispatch(updateMenuList(a1))
   

  }

  const handleDelete = (categoryObj) => {
    console.log("from outer", categories.filter(category => category.name !== categoryObj.name))
    let filteredCat = categories.filter(category => category.name !== categoryObj.name)
    let testObj = {
      "name": "Hierarchy",
      "categories": filteredCat
    }
    setCategories(categories.filter(category => category.name !== categoryObj.name))
    setDummyObj(testObj)

  }

  // console.log("menuList", menuList,menuList.slice(2),testObj1,testObj)
  return (
    <div className='admin-container'>
      <h1>Add/Edit Categories & Sub-categories for reports</h1>
      <h3> Workspaces : </h3>
      <div className='select-workspaces'>
        {/* ... Your existing workspace selection code ... */}

        <FormControl fullWidth>
          {/* <InputLabel id="workspaces-label">Select Workspaces</InputLabel> */}
          <InputLabel
            id="workspaces-label"
            shrink={selectedWorkspaces.length > 0}
            sx={{ padding: "10px" }}
          >
            {selectedWorkspaces.length > 0
              ? ""
              : "Select Workspaces"}
          </InputLabel>
          <Select
            labelId="workspaces-label"
            id="workspaces"
            multiple
            value={selectedWorkspaces}
            onChange={(e) => setSelectedWorkspaces(e.target.value)}
            input={<Input />}

            renderValue={(selected) => `Selected Workspaces : ${selected?.map(item => item.name)?.join(', ')}`}
            sx={{
              padding: "10px"
            }}
          >

            {workspaces.map((workspace) => (
              <MenuItem key={workspace} value={workspace}>
                <Checkbox
                  checked={selectedWorkspaces.includes(workspace)}
                  color="primary"
                />
                <ListItemText primary={workspace.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <h3> Categories : </h3>
      <div className="list-container">
        {categories.length == 0 && (
          <div style={{ border: "1px solid grey", padding: "15px" }}>
            <h4>No category has been created. Please create one by using the 'Add Category' button.</h4>

          </div>
        )}
        {categories.map((category, index) => (

          <DraggableCategory
            key={index}
            category={category}
            index={index}
            categories={categories}
            setCategories={setCategories}
            updateCategory={updateCategory}
            addNewCategory={addNewCategory}
            testObj={testObj}
            handleDelete={(categoryObj) => handleDelete(categoryObj)}
          />
        ))}
        {errorMessage ? (<div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "red", paddingTop: "8px" }}>{errorMessage}</p>
          <IconButton onClick={() => setErrorMessage('')}>
            <HighlightOffIcon />
          </IconButton>
        </div>
        ) : (<></>)}

      </div>
      {isModalOpen && (<CategoryModal updateCategory={(categoryObj) => updateCategory(categoryObj)}
        addNewCategory={(categoryObj) => addNewCategory(categoryObj)}
        selectedButton={selectedButton} categoryObj={selectedCategory} onClose={() => setIsModalOpen(false)} />)}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="add-category-button" onClick={() => {
          setIsModalOpen(true)
          setSelectedButton("category")
          setSelectedCategory({})
        }}>
          <AddCircleOutlineRoundedIcon /> &nbsp;
          Add Category

        </button>
        <div>
          <button className="add-category-button" onClick={() => saveChanges()}>

            Save Changes

          </button>
        </div>
      </div>


    </div>
  );
};

export default ListPage;




