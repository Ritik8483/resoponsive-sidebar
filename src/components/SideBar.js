import React, { useState } from 'react';
import { FaEnvira,FaUserAlt,FaRegChartBar,FaCommentAlt,FaShoppingBag,FaThList, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import '../App.css';
const SideBar = ({children}) => {
    const [isOpen,setIsOpen]=useState(false);
    const menuItems=[
        {
            path:'/',
            name:'Dashboard',
            icon:<FaEnvira/>
        },
        {
            path:'/about',
            name:'About',
            icon:<FaUserAlt/>
        },
        {
            path:'/analytics',
            name:'Analytics',
            icon:<FaRegChartBar/>
        },
        {
            path:'/comment',
            name:'Comment',
            icon:<FaCommentAlt/>
        },
        {
            path:'/product',
            name:'Product',
            icon:<FaShoppingBag/>
        },
        {
            path:'/productList',
            name:'Product List',
            icon:<FaThList/>
        },
        
        
    ]
  return (
    <div>
        <div className='container'>
            <div style={{width:isOpen ? "50px" : "300px"}} className='sidebar'>
                <div className='top_section'>
                    <h1 style={{display:isOpen ? "none" : "block"}} className='logo'>Logo</h1>
                    <div style={{marginLeft:isOpen ? "0px" : "170px"}} className='bars'>
                        <FaBars onClick={()=>setIsOpen(!isOpen)} />
                    </div>
                </div>
                {
                    menuItems.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" >
                            <div className='icon'>{item.icon}</div>
                            <div style={{display:isOpen ? "none" : "block"}} className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <div style={{padding:'20px'}}>{children}</div>
        </div>
    </div>
  )
}

export default SideBar

// activeclassName="active"