import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
  } from "react-pro-sidebar";
  import "react-pro-sidebar/dist/css/styles.css";
  import { useEffect, useRef, useState } from 'react';

import '../styles/home.css'
export default function SideBarNav(props) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
      setCollapsed(!collapsed);
    };
    const [count, setCount] = useState(30);
    useEffect(() => {
        const element = document.querySelector('.count');
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / (count - 0)));
    
        let counter = 0;
        const timer = setInterval(() => {
          counter += 1;
          element.textContent = counter;
    
          if (counter >= count) {
            clearInterval(timer);
          }
        }, stepTime);
    
        return () => clearInterval(timer);
      }, [count]);
    
    const percentage = count / 100;

    return (
      <ProSidebar collapsed={collapsed}>
      <SidebarHeader>
        <div className="charts_orb">
      <article className="orb">
    <div className="orb_graphic">
      <svg>
        <circle className="fill"></circle>
        <circle
          className="progress"
          style={{ "--percentage": percentage }}
        ></circle>
      </svg>
      <div className="orb_value">
        <div className="count">{count}</div>
        <div>%</div>
      </div>
    </div>
    <div className="orb_label">Lorem Ipsum</div>
  </article>
  </div>
    
        </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<i className="fas fa-home" />}>Home</MenuItem>
          <SubMenu title="Pages" icon={<i className="fas fa-copy" />}>
            <MenuItem>Page 1</MenuItem>
            <MenuItem>Page 2</MenuItem>
            <MenuItem>Page 3</MenuItem>
          </SubMenu>
          <SubMenu title="Settings" icon={<i className="fas fa-cogs" />}>
            <MenuItem>Setting 1</MenuItem>
            <MenuItem>Setting 2</MenuItem>
            <MenuItem>Setting 3</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <div className="sidebar-footer-content">
          <button type="button" className="btn-close" onClick={toggleCollapse}>
            <i className="fas fa-times" />
          </button>
        </div>
      </SidebarFooter>
    </ProSidebar>
  

    );



  
}
