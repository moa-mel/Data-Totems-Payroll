import "./payrun.css";
import Chart from "../../components/chart/Chart";
import {payrunData} from "../../dummyData";

export const Payrun = () => {
    return (
        <div className="payrun">
            <div className="payrunTop">
                <div className="payrunTopLeft">
                    <Chart data={payrunData} dataKey="Salary" title="Salary Performance" />
                </div>
                <div className="payrunTopRight">
                    <div className="payrunInfoBottom">
                           
                    <div className="payrunContainer">

             <div className="payrunUpdate">
                 <span className="payrunUpdateTitle">Edit </span>
                <form  className="payrunUpdateForm">
                    <div className="payrunUpdateLeft">
                        <div className="payrunUpdateItem">
                            <label>Select Employee</label>
                            <select id="" name="" className="newpayrunSelect">
                               <option value="">Peace Faith</option>
                               <option value="">Steve Morgan</option>
                           </select>
                        </div>
                        <div className="payrunUpdateItem">
                            <label>Basic Salary</label>
                            <input type="text" placeholder="1212212" className="payrunUpdateInput" />
                        </div>
                        <div className="payrunUpdateItem">
                            <label>Bank Name</label>
                            <input type="text" placeholder="annabeck" className="payrunUpdateInput" />
                        </div>
                        <div className="payrunUpdateItem">
                            <label>Account No</label>
                            <input type="text" placeholder="23458866" className="payrunUpdateInput" />
                        </div>
                        <div className="payrunUpdateItem">
                            <label>Re-Enter Account No</label>
                            <input type="text" placeholder="23458866" className="payrunUpdateInput" />
                        </div>
                        <div className="payrunUpdateItem">
                            <label>Account Holder Name</label>
                            <input type="text" placeholder="anna" className="payrunUpdateInput" />
                        </div>
                        <div className="payrunUpdateItem">
                            <label>IFSC Code</label>
                            <input type="text" placeholder="12345" className="payrunUpdateInput" />
                        </div>
                        <div className="payrunUpdateItem">
                            <label>Tax Deduction</label>
                            <input type="text" placeholder="3456667" className="payrunUpdateInput" />
                        </div>

                    </div>
                    <div>
                        <button className="payrunUpdatebutton">Update</button>
                        </div>
                </form>
             </div>
             
            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
