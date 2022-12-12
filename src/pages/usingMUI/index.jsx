import React, { useEffect, useState } from "react";
import jsondata from "../../assets/data.json"
import { useNavigate } from "react-router-dom"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';


const UsingMUI = () => {
    let navigate = useNavigate();

    const [tabledata, setTabledata] = useState({})
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        setTabledata(jsondata.data)
    }, [])


    const columns = [
        { field: 'id', headerName: 'Id.', width: 60 },
        { field: 'firstname', headerName: 'First Name', width: 150 },
        { field: 'lastname', headerName: 'Last Name', flex: 1, minWidth: 150 },
        { field: 'age', headerName: 'Age', width: 100 },
        { field: 'email', headerName: 'Email', width: 400 },
        {
            field: 'verified', headerName: 'Verified', sortable: false, width: 100,
            renderCell: (params) => {
                return (
                    <>
                        {
                            params.row.verified === "true" ?
                                <Chip label="True" color="success" /> :
                                <Chip label="False" color="error" />
                        }
                    </>
                )
            },

        },
        {
            field: 'changestatus',
            headerName: 'Change Status',
            width: 150,
            sortable: false,
            renderCell: (params) => {
                const changeStatus = () => {
                    const updatedTableData = tabledata.map((data) => {
                        console.log(data.verified)
                        if (data.id === params.row.id)
                            data.verified = (data.verified === "true" ? "false" : "true")
                        return data
                    })

                    setTabledata(updatedTableData)
                }
                return (
                    <>
                        {/* <UsersTableInfo currUser={params.row} notify={notify} /> */}
                        {
                            <div className="change-status-mui-btn">
                                <Chip onClick={changeStatus} color="warning" label={params.row.verified === "true" ? "To False" : "To True"} />
                            </div>
                        }
                    </>
                )

            },
        },


    ];


    return (
        <>
            <div className="homepage">
                <h1 onClick={() => navigate("/")}>Chefkart Frontend Developer Intern Assignment</h1>
            </div>
            <DataGrid
                rows={tabledata}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPage) => setPageSize(newPage)}
                rowsPerPageOptions={[5, 10, 20, 50]}
                disableSelectionOnClick
                disableColumnMenu
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                autoHeight
                components={{
                    Toolbar: GridToolbar,
                }}
                componentsProps={{
                    toolbar: { showQuickFilter: true },
                }}
            />
        </>
    )
}

export default UsingMUI
