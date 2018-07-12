import React from 'react'
import {Link} from "react-router-dom"

export default props => {
    // return <h3>{props.employee.name}</h3>

    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.employee.name}
                </h5>
                <Link className="card-link"
                    to={{
                        pathname: `/employees/${props.employee.id}`,
                        state: { employee: props.employee }
                    }}>
                    Details
                </Link>
            </div>
        </div>
    )
}