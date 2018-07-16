import React from "react"
import { Link } from "react-router-dom"
import propTypes from "prop-types"

const Animal = ({animal, checkOutAnimal}) => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">{animal.name}</h5>
        <p className="card-text">{animal.breed}</p>
        <Link
          className="card-link"
          to={{
            pathname: `/animals/${animal.id}`,
            state: { animal: animal }
          }}
        >
          Details
        </Link>
        <a className="delete" href="#" onClick={() => {checkOutAnimal(animal.id)}}>Delete</a>
      </div>
    </div>
  )
}
Animal.propTypes = {
  animal: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string,
    breed: propTypes.string
  }),
  checkOutAnimal: propTypes.func.isRequired
}
export default Animal