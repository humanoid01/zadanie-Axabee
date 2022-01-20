import { dateFormatter } from './dateFormatter'
import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const Table = ({ launches }) => {
  const [value, setValue] = useLocalStorage('favourites', {})

  return (
    <div>
      <table className='content-table'>
        <thead>
          <tr>
            <th>Mission Name</th>
            <th scope='col'>Mission Date (UTC)</th>
            <th>Fav</th>
          </tr>
        </thead>
        <tbody>
          {launches.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.mission_name}</td>
              <td>{dateFormatter(mission.launch_date_utc)}</td>
              <td>
                <input
                  type='checkbox'
                  checked={value[mission.mission_name]}
                  onChange={(e) =>
                    setValue({
                      ...value,
                      [mission.mission_name]: e.target.checked,
                    })
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
