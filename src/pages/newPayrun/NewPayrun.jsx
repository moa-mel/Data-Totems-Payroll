import "./newPayrun.css";

export const NewPayrun = () => {
    return (
        <div className="newPayrun">
             <h1 className="newPayrunTitle">New Payrun</h1>
           <form className="newPayrunForm">
           <div className="newPayrunItem">
                            <label>Select Employee</label>
                            <select id="" name="" className="newPayrunSelect">
                               <option value="">Peace Faith</option>
                               <option value="">Steve Morgan</option>
                           </select>
                        </div>
                        <div className="newPayrunItem">
                            <label>Basic Salary</label>
                            <input type="text" placeholder="1212212" />
                        </div>
                        <div className="newPayrunItem">
                            <label>Bank Name</label>
                            <input type="text" placeholder="annabeck"  />
                        </div>
                        <div className="newPayrunItem">
                            <label>Account No</label>
                            <input type="text" placeholder="23458866"  />
                        </div>
                        <div className="newPayrunItem">
                            <label>Re-Enter Account No</label>
                            <input type="text" placeholder="23458866"  />
                        </div>
                        <div className="newPayrunItem">
                            <label>Account Holder Name</label>
                            <input type="text" placeholder="anna"  />
                        </div>
                        <div className="newPayrunItem">
                            <label>IFSC Code</label>
                            <input type="text" placeholder="12345"  />
                        </div>
                        <div className="newPayrunItem">
                            <label>Tax Deduction</label>
                            <input type="text" placeholder="3456667"  />
                        </div>
        <button className="newPayrunButton">
            Create</button>
      </form>
        </div>
    )
}
