import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CategoryIcon from '@mui/icons-material/Category';

/**
 * @author
 * @function MenuItem
 **/

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, onClick, to, exact, menuItem } = props;
  const [expand, setExpand] = useState(null);
  const [subcategoryReportSel, setSubcategoryReportSel] = useState(false)
  const handleMenuSel = (menu) => {
  }

  console.log("sub menus side 1111111111", subMenus)
  return (
    <li onClick={props.onClick}>
      <Link
        exact
        to={to}
        // onClick={() => {
        //   setExpand((e) => !e);
        // }}
        className={`menu-item`}
        style={{ color: `${props.isChecked ? "#27A4B5ff" : "black"}` }}
      >
        <div className="menu-icon">
          {/* <i class={iconClassName}></i> */}
          {name == "Home" && (<HomeIcon />)}
          {name == "Admin" && (<AdminPanelSettingsIcon />)}
          {name != "Home" && name !="Admin" && ( <CategoryIcon /> )}
          
        </div>
        <span>{name}</span>
      </Link>

      {subMenus && subMenus?.length > 0 ? (
        <ul className={`sub-menu`}>
          {subMenus?.map((menu, index) => (
            <li key={index} onClick={handleMenuSel(menu)} >
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}

      {menuItem?.subCategories && menuItem?.subCategories?.length > 0 ? (
        <ul className={`sub-menu`}>
          {menuItem?.subCategories?.map((menu, index) => (
            <li key={index} onClick={handleMenuSel(menu)}>
              <NavLink to={"/report/"}>{menu.name}</NavLink>
              {menu?.reports?.length > 0 && (
                <ul style={{ marginLeft: "20px", background:"white" }} >
                  {menu?.reports?.map((report, index) => (
                    <li key={index} onClick={() => setSubcategoryReportSel(index)} >
                      <NavLink to={`/report/${report.name}`} style={{ background:"white",borderBottom: "1px solid grey", backgroundColor: index == subcategoryReportSel ? "aquamarine" : "", fontWeight: index == subcategoryReportSel ? "bold" : "inherit",cursor:"pointer",borderRadius:"2px"}} >{report.name}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

        </ul>
      ) : null}
      <ul className={`sub-menu`}>
        {menuItem?.reports?.map((report, index) => (
          <li key={index} onClick={handleMenuSel(report)}>
            <NavLink to={""}>{report.name}</NavLink>

          </li>
        ))}
      </ul>

    </li>
  );
};

export default MenuItem;
