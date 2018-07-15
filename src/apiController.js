export default class ApiController {
  static getThing = thing => {
    return fetch(`http://localhost:3005/${thing}`).then(e => e.json())
  }

  static searchDB = query => {
    let allTheThings = []
    return fetch(`http://localhost:3005/employees?q=${query}`)
      .then(e => e.json())
      .then(e => allTheThings.push(e))
      .then(() =>
        fetch(`http://localhost:3005/locations?q=${query}`)
          .then(e => e.json())
          .then(e => allTheThings.push(e))
      )
      .then(() =>
        fetch(`http://localhost:3005/animals?q=${query}`)
          .then(e => e.json())
          .then(e => {
                allTheThings.push(e)
                return allTheThings
          })
      )
  }
}
