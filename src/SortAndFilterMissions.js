export const filterMission = (launches, filter) =>
  launches.filter((mission) => {
    if (!isNaN(filter)) {
      return mission.launch_date_utc.includes(filter)
    }
    return mission.mission_name.toLowerCase().includes(filter)
  })

export const sortMission = (filtered, { property, date, actionOrder }) => {
  let sorted = [...filtered].sort((a, b) => {
    if (date && actionOrder) {
      return new Date(a[date]) - new Date(b[date])
    } else if (date && !actionOrder) {
      return new Date(b[date]) - new Date(a[date])
    }
    let order = 0
    if (a[property] < b[property]) {
      order = -1
    } else if (a[property] > b[property]) {
      order = 1
    } else {
      order = 0
    }
    if (actionOrder) {
      order *= -1
    }
    return order
  })
  return sorted
}
