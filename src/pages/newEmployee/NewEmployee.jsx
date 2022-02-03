import "./newEmployee.css";


export default function NewEmployee (){
  
    return (
        <div className="newEmployee">
           <h1 className="newEmployeeTitle">New Employee</h1>
           <form className="newEmployeeForm" >
        <div className="newEmployeeItem">
          <label>Email</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newEmployeeItem">
          <label>Password</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newEmployeeItem">
                            <label>Account access</label>
                            <select id="" name="" className="newEmployeeSelect">
                               <option value="" >Admin</option>
                               <option value="" >HR</option>
                           </select>
                        </div>
                        <div className="newEmployeeItem">
                            <label>Role</label>
                            <select id="" name="" className="newEmployeeSelect">
                               <option value="">Admin</option>
                               <option value="" >HR</option>
                           </select>
                        </div>
                        <div className="newEmployeeItem">
          <label>First Name</label>
          <input type="email" placeholder="john@gmail.com" required />
        </div>
        <div className="newEmployeeItem">
          <label>Middle Name</label>
          <input type="password" placeholder="password" required />
        </div>
        <div className="newEmployeeItem">
          <label>Last Name</label>
          <input type="password" placeholder="password" required />
        </div>
        <div className="newEmployeeItem">
          <label>DOB</label>
          <input type="date" placeholder="dd/mm/yyyy" required />
        </div>
        <div className="newEmployeeItem">
          <label>Contact No</label>
          <input type="text" placeholder="+1 123 456 78" required />
        </div>
        <div className="newEmployeeItem">
          <label>Employee Code</label>
          <input type="text" placeholder="4567" required/>
        </div>
        <div className="newEmployeeItem">
          <label>Gender</label>
          <div className="newEmployeeGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="newEmployeeItem">
          <label>Department</label>
          <select className="newEmployeeSelect" name="active" id="active">
            <option value="yes" >Admin</option>
            <option value="no" >HR</option>
          </select>
        </div>
        <div className="newEmployeeItem">
          <label>Position</label>
          <select className="newEmployeeSelect" name="active" id="active">
            <option value="yes" >Admin</option>
            <option value="no" >HR</option>
          </select>
        </div>
        <div className="newEmployeeItem">
          <label>Date Of Joining</label>
          <input type="date" placeholder="dd/mm/yyyy" required/>
        </div>
        <div className="newEmployeeItem">
          <label>Terminate Date</label>
          <input type="date" placeholder="dd/mm/yyyy" required/>
        </div>
        <button type="submit" className="newEmployeeButton">Create</button>
        
      </form>
        </div>
    );
    
  }

 