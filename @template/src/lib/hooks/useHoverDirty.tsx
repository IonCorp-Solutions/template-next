import { off, on } from '@lib/utils'
import { useEffect, useState } from 'react'

const useHoverDirty = (ref, enabled = true) => {
  const [value, setValue] = useState(false)

  useEffect(() => {
    const onMouseOver = () => setValue(true)
    const onMouseOut = () => setValue(false)

    if (enabled && ref && ref.current) {
      on(ref.current, 'mouseover', onMouseOver)
      on(ref.current, 'mouseout', onMouseOut)
    }

    // fixes react-hooks/exhaustive-deps warning about stale ref elements
    const { current } = ref

    return () => {
      if (enabled && current) {
        off(current, 'mouseover', onMouseOver)
        off(current, 'mouseout', onMouseOut)
      }
    }
  }, [enabled, ref])

  return value
}

export default useHoverDirty
