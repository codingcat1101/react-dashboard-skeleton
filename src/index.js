import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from '../example/src/dashboard';
import About from '../example/src/about';
import Reports from '../example/src/reports';
import styles from './styles.module.css'

export const DashboardSkeleton = ({ navProps, sidebarProps, theme }) => {
  const [menuItems , setMenuItems] = useState([]);
  useEffect(()=>{
    setMenuItems(sidebarProps.menu)
  },[])
  return (
    <BrowserRouter>
      <div>
        {navProps !== undefined && navProps.showNav && <Nav customStyles={navProps.customStyles} titleComponentType={navProps.titleComponentType} logoUrl={navProps.logoUrl} title={navProps.title} />}
        {sidebarProps !== undefined && (
          <Sidebar menu={menuItems}>
            <Routes>
              {
                menuItems.map(menuItem => {
                  return (
                    <Route path={menuItem.path} element={menuItem.element} />
                  )
                })
              }
            </Routes>
          </Sidebar>
        )}
      </div>
    </BrowserRouter>
  )
}

function getTitleElement(titleComponentType, logoUrl, title) {
  if (titleComponentType !== undefined) {
    if (titleComponentType === 'logo') {
      return <img src={logoUrl} className="img-fluid" width="30" height="30" alt={title} />
    } else if (titleComponentType === 'text') {
      return <h3>{title !== undefined && title !== null && title}</h3>
    }
  } else {
    return <></>
  }
}


const Nav = ({ customStyles, titleComponentType, logoUrl, title }) => {
  return (
    <nav className="navbar navbar-light bg-light" style={customStyles}>
      {getTitleElement(titleComponentType, logoUrl, title)}
    </nav>
  )
}

function showActiveMenuItem(menu) {
  let activeId = 0;
  menu !== undefined && menu.forEach((menu, menuIndex) => {
    const isPath = menu.path !== undefined && menu.path === pathname;
    if (isPath) activeId = menuIndex;
  });
  return activeId;
}

const Sidebar = ({ menu, children }) => {
  let desiredRole = 0;
  return (
    <div className={styles.myContainer}>
      {
        <div className={styles.sidebar}>
          {
            menu !== undefined && menu.map((item, index) => (
              item.roles.includes(desiredRole) &&
              <div key={index}>
                <NavLink to={item.path} key={index} className={(showActiveMenuItem() === index) ? styles.link + " " +styles.active : styles.link} >
                  <div className={styles.menu_section}>
                    <div className="icon"><img src={item.iconUrl !== '' ? iconUrl : 'https://cdn-icons-png.flaticon.com/512/709/709722.png'} className={styles.image_icon} /></div>
                    <div className={styles.link_text}>{item.name}</div>
                  </div>
                </NavLink>
              </div>
            ))
          }
        </div>
      }
      {
        <div className={styles.main_content} style={{ 'padding': '2%' }}>{children}</div>
      }
    </div>
  )
}