import { useState, useRef } from "react"

const Counter = () => {
  const hasClickedButton = useRef(false);

  const [count, setCount] = useState(0);
  const onClick = () => {
    // const newCount = count + 1;
    // setCount(newCount);

    hasClickedButton.current = true;
  }
  // Does only run for the first render.
  // Component does not render again, because no state is set anymore.
  // Only the ref's current property is set, which does not trigger a re-render.
  console.log('Has clicked button ?' + hasClickedButton.current);

  return (
    <div className="app">
      <p>{count}</p>

      <button type="button" onClick={onClick}>
        Increase
      </button>
    </div>
  )
}

export default Counter