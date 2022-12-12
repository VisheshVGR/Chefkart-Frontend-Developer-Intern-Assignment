import React, { useEffect, useState } from "react";
import jsondata from "../../assets/data.json"
import { useNavigate } from "react-router-dom"
import SingleTableRow from "./SingleTableRow"

const UsingVanilla = () => {
    let navigate = useNavigate();


    const [tabledata, setTabledata] = useState([])
    const [sortingMethod, setSortingMethod] = useState(true)
    const [sortingOn, setSortingOn] = useState("firstname")

    useEffect(() => {
        setTabledata(jsondata.data)
    }, [])

    useEffect(() => {
        if (tabledata.length === 0)
            return
        const tempData = tabledata

        const asc = (a, b) => {
            if (a[sortingOn].toLowerCase() > b[sortingOn].toLowerCase())
                return 1
            else if (a[sortingOn].toLowerCase() < b[sortingOn].toLowerCase())
                return -1
            else
                return 0
        }
        const des = (a, b) => {
            if (a[sortingOn].toLowerCase() < b[sortingOn].toLowerCase())
                return 1
            else if (a[sortingOn].toLowerCase() > b[sortingOn].toLowerCase())
                return -1
            else
                return 0
        }

        tempData.sort(sortingMethod ? asc : des)
        setTabledata(tempData)
    }, [sortingOn, sortingMethod, tabledata])



    const changeStatus = (id) => {
        const updatedTableData = tabledata.map((data) => {
            if (data.id === id)
                data.verified = (data.verified === "true" ? "false" : "true")
            return data
        })

        setTabledata(updatedTableData)
    }

    return (
        <>
            <div className="homepage">
                <h1 onClick={() => navigate("/")}>Chefkart Frontend Developer Intern Assignment</h1>
            </div>

            <section className="my-table">
                <div className="table-heading seven-row">
                    <div>Id.</div>
                    <div onClick={() => { setSortingMethod(!sortingMethod); setSortingOn("firstname") }} className="sorting">First Name
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg>
                    </div>
                    <div onClick={() => { setSortingMethod(!sortingMethod); setSortingOn("lastname") }} className="sorting">Last Name
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg>
                    </div>
                    <div onClick={() => { setSortingMethod(!sortingMethod); setSortingOn("age") }} className="sorting">Age
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg>
                    </div>
                    <div onClick={() => { setSortingMethod(!sortingMethod); setSortingOn("email") }} className="sorting">Email
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg>
                    </div>
                    <div>Verified</div>
                    <div>Change Status</div>
                </div>
                <div className="">
                    {
                        tabledata.map((data) =>
                            <div className="seven-row table-row" key={data.id}>
                                <SingleTableRow data={data} changeStatus={changeStatus} />
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default UsingVanilla