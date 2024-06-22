import { useState, useEffect, useRef } from "react"

const ComponentWithRefInstanceVariable = () => {

  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  }

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      console.log(`
          I am a useEffect hook's logic
          which runs for a component's
          re-render.
      `)
    }
  });

  return (
    <div className="app">
      <p>{count}</p>

      <button type="button" onClick={onClick}>
        Increase
      </button>

      {/*
        Only works because setCount triggers a re-render.
        Just changing the ref's current value doesn't trigger a re-render.
      */}
      <p>{isFirstRender.current ? 'First render.' : 'Re-render.'}</p>
    </div>
  )
}

export default ComponentWithRefInstanceVariable