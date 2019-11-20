import { useState, useCallback, useEffect } from "react"

export function useManagedState<T>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [currentValue, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return [currentValue, setValue]
}