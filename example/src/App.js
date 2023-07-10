import React from 'react'

import { DashboardSkeleton } from 'react-dashboard-skeleton'
import 'react-dashboard-skeleton/dist/index.css'
import Dashboard from './dashboard'
import About from './about'
import Reports from './reports'

const navProps = {
  showNav : true,
  customStyles : {},
  titleComponentType : 'text',
  title : 'My Dashboard',
}

const sidebarProps = {
  menu : [
    {
        path: "/",
        name: "Dashboard", //Name of the menu
        iconUrl: '',
        roles: [0,1,2], // You can set user roles who has the access to the page
        element : <Dashboard/> // Component
    },
    {
        path: "/about",
        name: "About", //Name of the menu
        iconUrl: '',
        roles: [0,1,2], // You can set user roles who has the access to the page
        element : <About/> // Component
    },
    {
        path: "/reports",
        name: "Reports", //Name of the menu
        iconUrl: '',
        roles: [0,1], // You can set user roles who has the access to the page
        element : <Reports/> // Component
    }
  ]
}

const App = () => {
  return <DashboardSkeleton navProps={navProps} sidebarProps={sidebarProps}/>
}

export default App
