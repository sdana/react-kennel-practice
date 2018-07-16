import React from 'react'
import {Link} from "react-router-dom"
import propTypes from "prop-types"

const Location = ({locations}) => {
    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <h5 className="card-title">{locations.name}</h5>
                <p className="card-text">{locations.area}</p>
                <p className="card-text">{locations.addr}</p>
                <Link className="card-link"
                    to={{
                        pathname: `/locations/${locations.id}`,
                        state: { locations: locations }
                    }}>
                    Details
                </Link>
            </div>
        </div>
    )
}

Location.propTypes = {
    locations: propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string,
        area: propTypes.string,
        addr: propTypes.string
    })
}

export default Location