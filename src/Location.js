import React from 'react'

export default props => {
    return (
        <div>
            <h3>{props.location.name}</h3>
            <h4>{props.location.area}</h4>
            <h5>{props.location.addr}</h5>
        </div>
    )
}