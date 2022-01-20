import { useState, useEffect } from 'react'

export const useLocalStorage = (key, init) => {
  const [value, setValue] = useState(() => {
    if (JSON.parse(window.localStorage.getItem(key))) {
      return JSON.parse(window.localStorage.getItem(key))
    }

    return init
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}
