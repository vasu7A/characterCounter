import {useState} from 'react'
import uuid from 'react-uuid'

import './index.css'

const MainPage = () => {
  const [name, setName] = useState('')
  const [arr, setArr] = useState([])
  const saveData = e => {
    e.preventDefault()
    setArr(prevArr => [...prevArr, {id: uuid(), name, len: name.length}])
    setName('')
  }
  return (
    <div className="card">
      <div className="first">
        <h1>Count the characters like a Boss</h1>
        {arr.length === 0 && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="person"
          />
        )}
        <ul>
          {arr.map(each => (
            <li key={each.id}>{`${each.name} : ${each.len}`}</li>
          ))}
        </ul>
      </div>
      <div className="second">
        <h1 className="heading">Character Counter</h1>
        <form onSubmit={saveData}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter the Characters here"
          />

          <button type="submit" className="btn">
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default MainPage
