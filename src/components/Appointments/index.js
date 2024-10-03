import {Component} from 'react'
import './index.css'

class Appointments extends Component {
  addAppointment = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="bg-container">
        <div className="card-container1">
          <div className="card-container2">
            <form onSubmit={this.addAppointment}>
              <h1>Appointments</h1>
              <label htmlFor="title">Title</label>
              <br />
              <input type="text" id="title" className="input" />
              <br />
              <label htmlFor="date">date</label>
              <br />
              <input type="date" id="date" className="input" />
              <br />
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="img"
              />
            </div>
          </div>
          <hr className="hr" />
        </div>
      </div>
    )
  }
}
export default Appointments
