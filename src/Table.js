import { dateFormatter } from './dateFormatter'

export const Table = ({ launches }) => {
  return (
    <div>
      <table className='content-table'>
        <thead>
          <tr>
            <th>Mission Name</th>
            <th scope='col'>Mission Date (UTC)</th>
          </tr>
        </thead>
        <tbody>
          {launches.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.mission_name}</td>
              <td>{dateFormatter(mission.launch_date_utc)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
