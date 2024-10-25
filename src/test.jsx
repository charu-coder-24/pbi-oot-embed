









import React, { useState } from 'react';
import LongMenu from './VertIcon';
import './TreeView.scss';
// import { FaPlus } from 'react-icons/fa';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import { IconButton, ListItemText, MenuItem } from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CategoryModal from './CategoryCreation';

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
  
  const testObj = {
    "name": "Hierarchy",
    "categories": [
      {
        "name": "Sales",
        "subCategories": [
        ],
        "reports": [
          { "name": "Report1", "link": "L1" },
          { "name": "Report2", "link": "L2" },
          { "name": "Report3", "link": "L3" }
        ]
      },
      {
        "name": "Supply Chain",
        "subCategories": [
          {
            "name": "Supply Scorecard",
            "reports": [
              { "name": "Report4", "link": "L1" },
              { "name": "Report5", "link": "L2" },
              { "name": "Report6", "link": "L3" }
            ]
          },
          {
            "name": "Demand planning",
            "reports": [
              { "name": "Report4", "link": "L1" },
              { "name": "Report5", "link": "L2" },
              { "name": "Report6", "link": "L3" }
            ]
          },
          {
            "name": "Supply planning",
            "reports": [
              { "name": "Report4", "link": "L1" },

            ]
          }
        ],
        "reports": [
          { "name": "Report4", "link": "L1" },
          { "name": "Report5", "link": "L2" }
        ]
      }
    ]
  };

  const [dummyObject, setDummyObj] = useState(testObj)

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

// Check if the category exists
if (categoryIndex !== -1) {
  // Update the "Supply Chain" category with the new object
  let test = {...dummyObject}
  test.categories[categoryIndex] = categoryObj;
  setDummyObj(test)

}

// Now, the "Supply Chain" category is updated in the main object
    // console.log("categoryObj lucj", dummyObject,categoryObj)
  }

  return (
    <div className='admin-container'>
      <h1>Add/Edit Categories & Sub-categories for reports</h1>
      <h3> Workspaces : </h3>
      <div className='select-workspaces'>

        <FormControl fullWidth>
          {/* <InputLabel id="workspaces-label">Select Workspaces</InputLabel> */}
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

            {workspaces?.map((workspace) => (
              <MenuItem key={workspace} value={workspace}>
                <Checkbox
                  checked={selectedWorkspaces.includes(workspace)}
                  color="primary"
                />
                <ListItemText primary={workspace?.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>


      </div>
      <h3> Categories : </h3>
      <div className="list-container">

        {dummyObject.categories.map((category, index) => (

        <div key={index} className="category-item">
          <div className="category-header" onClick={(event) => handleCategoryClick(category.name, event)}>
            {category.name}
            <div className="icon-container">
              <span className="icon" onClick={(event) => handleSettingsClick(event)}>
                <ArrowDropDownOutlinedIcon />
                <LongMenu />
              </span>
            </div>
          </div>
          { isModalOpen && (<CategoryModal updateCategory= {(categoryObj) => updateCategory(categoryObj)} selectedButton={selectedButton} categoryObj={selectedCategory} onClose={() => setIsModalOpen(false)} />)}

          {true && (
            <div className="category-report-container">
              {category.reports.map((report, reportIndex) => (
                <div key={reportIndex} className="report-item">
                  {report.name}
                </div>
              ))}
            </div>
          )}
          {true && (
            <div className="subcategory-container">
              {category.subCategories.map((subCategory, subIndex) => (
                <div key={subIndex} className="subcategory-item">
                  <div className="subcategory-header" onClick={(event) => handleSubCategoryClick(subCategory.name, event)}>
                    {subCategory.name}
                    <div className="icon-container">
                      <span className="icon" onClick={(event) => handleSettingsClick(event)}>
                        <ArrowDropDownOutlinedIcon />
                        <LongMenu />
                      </span>
                    </div>
                  </div>
                  {true && (
                    <div className="report-container">
                      {subCategory.reports.map((report, reportIndex) => (
                        <div key={reportIndex} className="report-item">
                          {report.name}
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              ))}

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
                  setSelectedButton("report")
                }}>
                  <AddCircleOutlineRoundedIcon />
                  Add Report
                </button>
              </div>
            </div>
          )}


        </div>
        ))}
        {showMenu && (
          <div className="menu-container" style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px` }}>
            <div>Menu Option 1</div>
            <div>Menu Option 2</div>
            <div>Menu Option 3</div>
          </div>
        )}

        <button className="add-category-button" onClick={() => {
                  setIsModalOpen(true)
                  setSelectedButton("")
                  setSelectedCategory({})
                }}>
          <AddCircleOutlineRoundedIcon /> &nbsp;
          Add Category

        </button>
      </div>
    </div>

  );
};

export default ListPage;

