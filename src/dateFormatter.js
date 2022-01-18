export const dateFormatter = (fullDate) => {
  const date = new Date(Date.parse(fullDate))
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDay()}`.padStart(2, '0')
  const hour = `${date.getHours()}`.padStart(2, '0')
  const minutes = `${date.getMinutes()}`.padStart(2, '0')
  return `${day}-${month}-${year}, ${hour}:${minutes}`
}
