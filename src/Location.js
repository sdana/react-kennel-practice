import React from 'react'
import {Link} from "react-router-dom"

export default props => {
    // return (
    //     <div>
    //         <h3>{props.location.name}</h3>
    //         <h4>{props.location.area}</h4>
    //         <h5>{props.location.addr}</h5>
    //     </div>
    // )

    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <h5 className="card-title">{props.locations.name}</h5>
                <p className="card-text">{props.locations.area}</p>
                <p className="card-text">{props.locations.addr}</p>
                <Link className="card-link"
                    to={{
                        pathname: `/locations/${props.locations.id}`,
                        state: { locations: props.locations }
                    }}>
                    Details
                </Link>
            </div>
        </div>
    )
}