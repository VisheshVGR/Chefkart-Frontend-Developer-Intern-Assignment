import React from "react"
import AssignmentDescription from "../../assets/image.png"
import { useNavigate } from "react-router-dom"

const Homepage = () => {
    let navigate = useNavigate();

    return (
        <>
            <div className="homepage">
                <h1 onClick={() => navigate("/")}>Chefkart Frontend Developer Intern Assignment</h1>
                <div className="requirements">
                    <h3>Requirements-</h3>
                    <p>data table react component with the following functionality</p>
                    <ul>
                        <li>The table should be responsive</li>
                        <li>Menu toggle functionality on the column header with sort functionality</li>
                        <li>True status in green color and failed in red color.</li>
                        <li>Add row click action to change the background color of the row.</li>
                    </ul>
                </div>
                <img src={AssignmentDescription} alt="Assignment Description" />
                <div className="examples-btn">
                    <button onClick={() => navigate("/usingMUI")}>
                        Using MUI
                    </button>
                    <button onClick={() => navigate("/usingVanilla")}>
                        Using plain JS
                    </button>
                </div>
            </div>
        </>
    )
}

export default Homepage