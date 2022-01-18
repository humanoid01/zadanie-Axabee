import { useState, useEffect } from 'react'
import { filterMission, sortMission } from './SortAndFilterMissions'
import { Buttons } from './Buttons'
import { Table } from './Table'
import './index.css'
//sort

function App() {
  const [filter, setFilter] = useState('')
  const [launches, setLaunches] = useState([])
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/humanoid01/f80627b0bfeb618b3f5888c1fdacde4a/raw/e4dfcac3ffa6cc08991582c49994366814161236/launches.json'
    )
      .then((res) => res.json())
      .then((data) => setLaunches(data.data.launches))
  }, [])
  const [currentPage, setCurrentPage] = useState(1)
  const [missionsPerPage] = useState(10)
  const [currentSort, setCurrentSort] = useState({
    property: 'mission_name',
    date: 'launch_date_utc',
    actionOrder: true,
  })
  const firstMission = currentPage * missionsPerPage
  const lastMission = firstMission + missionsPerPage
  const currentMissions = launches.slice(firstMission, lastMission)

  const filteredLaunches = filterMission(currentMissions, filter)
  const sorted = sortMission(filteredLaunches, currentSort)

  const sortOnChange = (newVal) => {
    setCurrentSort(newVal)
  }

  const manipulatePages = (val) => {
    if (currentPage + val > 3) {
      return setCurrentPage(0)
    } else if (currentPage + val < 0) {
      return setCurrentPage(3)
    }

    setCurrentPage(currentPage + val)
  }

  return (
    <div>
      <Table launches={sorted} sortOnChange={sortOnChange} />
      <div className='container'>
        <input
          className='inputCenter'
          type='text'
          placeholder='Search...'
          onChange={(e) => {
            setFilter(e.target.value)
          }}
        />
        <Buttons
          sortOnChange={sortOnChange}
          manipulatePages={manipulatePages}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}

export default App

//date functions
