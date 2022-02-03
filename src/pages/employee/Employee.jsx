import "./employee.css";
import profilepic from "../../images/profilepic.jpg";
import {CalendarToday, LocationSearching, MailOutline, Publish, PermIdentity, PhoneAndroid} from '@mui/icons-material';

export const Employee = () => {
    return (
        <div className="employee">
           <div classname="employeeTitleContainer">
               <h1 classname="employeeTitle">Edit Employee</h1>
           </div>
            <div className="employeeContainer">
             <div className="employeeShow">
                 <div className="employeeShowTop">
                     <img src={profilepic}
                     alt="profile"
                   className="employeeShowImg"/>
                 <div className="employeeShowTopTitle">
                     <span className="employeeShowUsername">Anna Becker</span>
                     <span className="employeeShowUserTitle">Software Engineer</span>
                 </div>
                 </div>
                 <div className="employeeShowBottom">
                   <span className="employeeShowTitle">Account Details</span>
               <div className="employeeShowInfo">
                 <PermIdentity className="employeeShowIcon"/>
                <span className="employeeShowInfoTitle">annabeck99</span>
             </div>
             <div className="employeeShowInfo">
                 <CalendarToday className="employeeShowIcon"/>
                <span className="employeeShowInfoTitle">10.12.1999</span>
             </div>
             <div className="employeeShowInfo">
                 <PhoneAndroid className="employeeShowIcon"/>
                <span className="employeeShowInfoTitle">+234 81 23458866</span>
             </div>
             <div className="employeeShowInfo">
                 <MailOutline className="employeeShowIcon"/>
                <span className="employeeShowInfoTitle">annabeck99@gmail.com</span>
             </div>
             <div className="employeeShowInfo">
                 <LocationSearching className="employeeShowIcon"/>
                <span className="employeeShowInfoTitle">Abuja</span>
             </div>
               </div>
                 </div>

             <div className="employeeUpdate">
                 <span className="employeeUpdateTitle">Edit </span>
                <form  className="employeeUpdateForm">
                    <div className="employeeUpdateLeft">
                        <div className="employeeUpdateItem">
          <label>Email</label>
          <input type="text" placeholder="john" className="employeeUpdateInput"/>
        </div>
        <div className="employeeUpdateItem">
          <label>Password</label>
          <input type="text" placeholder="John Smith" className="employeeUpdateInput" />
        </div>
        <div className="employeeUpdateItem">
                            <label>Account access</label>
                            <select id="" name="" className="employeeUpdateSelect">
                               <option value="">Admin</option>
                               <option value="">HR</option>
                           </select>
                        </div>
                        <div className="employeeUpdateItem">
                            <label>Role</label>
                            <select id="" name="" className="employeeUpdateSelect">
                               <option value="">Admin</option>
                               <option value="">HR</option>
                           </select>
                        </div>
                        <div className="employeeUpdateItem">
          <label>First Name</label>
          <input type="email" placeholder="john@gmail.com" className="employeeUpdateInput" />
        </div>
        <div className="employeeUpdateItem">
          <label>Middle Name</label>
          <input type="password" placeholder="password" className="employeeUpdateInput" />
        </div>
        <div className="employeeUpdateItem">
          <label>Last Name</label>
          <input type="password" placeholder="password" className="employeeUpdateInput" />
        </div>
        <div className="employeeUpdateItem">
          <label>DOB</label>
          <input type="date" placeholder="dd/mm/yyyy" className="employeeUpdateInput" />
        </div>
        <div className="employeeUpdateItem">
          <label>Contact No</label>
          <input type="text" placeholder="+1 123 456 78" className="employeeUpdateInput" />
        </div>
        <div className="employeeUpdateItem">
          <label>Employee Code</label>
          <input type="text" placeholder="678" className="employeeUpdateInput" />
        </div>
        <div className="employeeUpdateItem">
          <label>Gender</label>
          <div className="employeeUpdateGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="employeeUpdateItem">
          <label>Department</label>
          <select className="employeeUpdateSelect" name="active" id="active">
            <option value="yes">Admin</option>
            <option value="no">HR</option>
          </select>
        </div>
        <div className="employeeUpdateItem">
          <label>Position</label>
          <select className="employeeUpdateSelect" name="active" id="active">
            <option value="yes">Admin</option>
            <option value="no">HR</option>
          </select>
        </div>
        <div className="employeeUpdateItem">
          <label>Date Of Joining</label>
          <input type="date" placeholder="dd/mm/yyyy" className="employeeUpdateInput"/>
        </div>
        <div className="employeeUpdateItem">
          <label>Terminate Date</label>
          <input type="date" placeholder="dd/mm/yyyy" className="employeeUpdateInput"/>
        </div>
                      
                    </div>

                    <div className="employeeUpdateRight">
                        <div className="employeeUpdateUpload">
                            <img className="employeeUpdateImg" src={profilepic} alt="profile" />
                        <label htmlFor="file"><Publish className="ëmployeeUpdateIcon"/></label>
                       <input type="file" id="file" style={{ display: "none" }}/>
                        </div>
                        <button className="employeeUpdatebutton">Update</button>

                    </div>
                </form>
             </div>
             
            </div>
        </div>
    )
}
