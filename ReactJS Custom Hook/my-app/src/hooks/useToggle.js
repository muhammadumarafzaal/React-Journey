import {useState} from 'react'
// Custom hook to toggle a boolean value
export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)
  const toggle=()=>setValue(prev=>!prev)
  return [value,toggle];
}