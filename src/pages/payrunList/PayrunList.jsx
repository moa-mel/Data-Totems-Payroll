import "./payrunList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { payrunRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export const PayrunList = () => {
    const [data, setData] = useState(payrunRows); 
    const handleDelete= (id)=>{
        setData(data.filter((item)=> item.id !==id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 200, renderCell: (params) =>{
            return(
                <div className="payrunListUser">
                    {params.row.name}
                </div>
            )
        } },
        { field: 'accountname', headerName: 'Accountname', width: 200},
        { field: 'accountnumber', headerName: 'Accountnumber', width: 200},
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'salary',
            headerName: 'Salary',
            width: 160,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
             renderCell: (params) => {
                 return (
                     <>
                     <Link to={"/payrun/"+params.row.id}>
                     <button className="payrunListEdit">Edit</button>
                     </Link>
                     <DeleteOutline className="payrunListDelete" onClick={()=>handleDelete(params.row.id)} />
                      </>
                 )
             }
          },
      ];

    return (
        <div className="payrunList">
              <div className="payruncreate">
                  <p></p>
                <Link to="/newPayrun">
                <button className="payruncreateButton">Create</button>
                </Link>
            </div>
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
