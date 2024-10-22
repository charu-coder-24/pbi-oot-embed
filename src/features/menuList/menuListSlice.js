import {createSlice, nanoid} from "@reduxjs/toolkit"


const initialState = {
    menuItems: [  {
        name: "Home",
        exact: true,
        to: "/",
        iconClassName: "bi bi-speedometer2",
      },
    //   {
    //     name: "OOT",
    //     exact: true,
    //     to: `/report/*`,
    //     iconClassName: "bi bi-file-earmark",
    //     subMenus: [],
    //     component: "Report"
    //   },
      {
        name: "Admin",
        exact: true,
        to: `/admin/`,
        iconClassName: "bi bi-file-earmark",
        subMenus: [],
        component: "Admin"
      },
      {
        name: "Executive Dashboard",
        exact: true,
        to: `/report/executive-dashboard/*`,
        iconClassName: "bi bi-file-earmark",
        subMenus: [],
        component: "Admin"
      },
      {
        name: "Finance",
        exact: true,
        to: `/report/finance/*`,
        iconClassName: "bi bi-file-earmark",
        subMenus: [],
        component: "Admin"
      },
      {
        name: "Sales",
        exact: true,
        to: `/report/sales/*`,
        iconClassName: "bi bi-file-earmark",
        subMenus: [],
        component: "Admin"
      },
      {
        name: "Marketting",
        exact: true,
        to: `/report/marketting/*`,
        iconClassName: "bi bi-file-earmark",
        subMenus: [],
        component: "Admin"
      },
      {
        name: "Supply Chain",
        exact: true,
        to: `/report/supply-chain/*`,
        iconClassName: "bi bi-file-earmark",
        subMenus: [],
        component: "Admin"
      },
      {
        name: "Manufacturing",
        exact: true,
        to: `/report/manufacturing/*`,
        iconClassName: "bi bi-file-earmark",
        subMenus: [],
        component: "Report"
      }

      
    ]
}

export const menuListSlice = createSlice({
    name: 'menuItems',
    initialState,
    reducers: {
        updateMenuList : (state, action) => {
            state.menuItems = action.payload
        }

    }
})

export const {updateMenuList} = menuListSlice.actions 
export  default menuListSlice.reducer
