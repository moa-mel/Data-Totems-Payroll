import { Home, PersonOutline, Payments, DynamicForm, Assessment, Message } from "@mui/icons-material"
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
             <div className="sidebarWrapper">
                 <div className="sidebarMenu">
                     <h3 className="sidebarTitle">Dashboard</h3>
                     <ul className="sidebarList">
                       <li className="sidebarListItem">
                          <Home className="sidebarIcon" /> Home
                       </li>
                       <Link to="/employees" className="link">
                       <li className="sidebarListItem">
                          <PersonOutline className="sidebarIcon" /> Employee
                       </li>
                       </Link>
                       <Link to="/payruns" className="link">
                       <li className="sidebarListItem">
                          <Payments className="sidebarIcon" /> Payrun
                       </li>
                       </Link>
                       <Link to="/forms" className="link">
                       <li className="sidebarListItem">
                          <DynamicForm className="sidebarIcon" /> Forms
                       </li>
                       </Link>
                       <Link to="/report" className="link">
                       <li className="sidebarListItem">
                          <Assessment className="sidebarIcon" /> Report
                       </li>
                       </Link>
                       <Link to="/contact" className="link">
                       <li className="sidebarListItem">
                          <Message className="sidebarIcon" /> Contact Support
                       </li>
                       </Link>
                     </ul>
                 </div>


             </div>
        </div>
    )
}