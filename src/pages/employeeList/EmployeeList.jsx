import "./employeeList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { employeeRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function EmployeeList() {
    const [data, setData] = useState(employeeRows); 
    const handleDelete= (id)=>{
        setData(data.filter((item)=> item.id !==id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) =>{
            return(
                <div className="employeeListUser">
                    <img src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200},
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
             renderCell: (params) => {
                 return (
                     <>
                     <Link to={"/employee/"+params.row.id}>
                     <button className="employeeListEdit">Edit</button>
                     </Link>
                     <DeleteOutline className="employeeListDelete" onClick={()=>handleDelete(params.row.id)} />
                      </>
                 )
             }
          },
      ];

    return(
        
        <div className="employeeList">
            <div className="employeeButton">
            <p></p>
                <Link to="/newEmployee">
                <button className="employeeAddButton">Create</button>
                </Link>
            </div>
             <br/>
              <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
       </div>
       
    )
}