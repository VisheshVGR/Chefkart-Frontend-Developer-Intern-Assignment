import React from "react"
import Chip from '@mui/material/Chip';

const SingleTableRow = ({ data, changeStatus }) => {
    return (<>
        <div>{data.id}</div>
        <div>{data.firstname}</div>
        <div>{data.lastname}</div>
        <div>{data.age}</div>
        <div>{data.email}</div>
        <div>
            {
                data.verified === "true" ?
                    <Chip label="True" color="success" /> :
                    <Chip label="False" color="error" />
            }
        </div>
        <div>
            {
                <div className="change-status-mui-btn">
                    <Chip onClick={() => changeStatus(data.id)} color="warning" label={data.verified === "true" ? "To False" : "To True"} />
                </div>
            }
        </div>
    </>)
}

export default SingleTableRow