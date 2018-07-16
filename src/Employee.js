import React from 'react'
import {Link} from "react-router-dom"
import propTypes from "prop-types"

const Employee = ({employee, children, deleteEmployee}) => {
    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <h5 className="card-title">
                    {employee.name}
                </h5>
                <Link className="card-link"
                    to={{
                        pathname: `/employees/${employee.id}`,
                        state: { employee: employee }
                    }}>
                    Details
                </Link>
                <a className="delete" href="#" onClick={()=>{deleteEmployee(employee.id)}}>Delete</a>
            </div>
        </div>
    )
}

Employee.propTypes = {
    employee: propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string,
    })
}
export default Employee