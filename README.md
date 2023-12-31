# react-dashboard-skeleton

> react-dashboard-skeleton provides you a basic skeleton UI for dashboard containing navbar and sidebar along with basic routes. You can modify the routes based on your needs. The content section will be changing based on the routes clicked on the sidebar

[![NPM](https://img.shields.io/npm/v/react-dashboard-skeleton.svg)](https://www.npmjs.com/package/react-dashboard-skeleton) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-dashboard-skeleton
```

## For yarn installation

```bash
yarn add react-dashboard-skeleton
```


## Usage

```jsx
import React from 'react'

import { DashboardSkeleton } from 'react-dashboard-skeleton'
import 'react-dashboard-skeleton/dist/index.css'
import Dashboard from './dashboard'
import About from './about'
import Reports from './reports'

const navProps = {
  showNav : true,
  customStyles : {},
  titleComponentType : 'text', // logo , text => these types could be passed to display on top of the nav bar
  title : 'My Dashboard',
  // logoUrl : '' ## Pass this param if the titleComponentType is "logo"
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

```

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
