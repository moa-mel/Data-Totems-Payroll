import React from 'react';
import './topbar.css'
import Logo from '../../images/totemslogo.jpg'
import {NotificationsNone, Settings, HelpOutline } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

export default function Topbar (){
    return (
        <div className="topbar">
           <div className="topbarWrapper">
             <div className='topLeft'>
                 <span className="logo" > 
                     <img src={Logo} alt="Totems"/>
                 </span>
             </div>
             <div className='topRight'>
                 <div className="topbarIconContainer">
                   <NotificationsNone/>
                   <span className='topIconBag'>2</span>
                 </div>
                 <div className="topbarIconContainer">
                   <Settings/>
                 </div>
                 <div className="topbarIconContainer">
                   <HelpOutline/>
                 </div>
                 <div className="topbarIconContainer">
                 <Avatar sx={{ bgcolor: deepOrange[500] }} className="topAvatar" >O</Avatar>
                 </div>
             </div>
           </div>
        </div>
    )
}