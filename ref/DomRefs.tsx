import { useState, useEffect, useRef } from "react"

const App = () => {
  return (
    <div className="app">
      <ComponentWithDomApi label='label' />
    </div>
  )
}

type InputProps = {
  label: string;
}

const ComponentWithDomApi: React.FC<InputProps> = ({ label }) => {

  const [text, setText] = useState('some text...');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  const ref = useRef<HTMLSpanElement | null>(null);


  useEffect(() => {
    const { width } = ref.current?.getBoundingClientRect() as DOMRect;
    document.title = `width: ${width}`;
  }, [text])

  return (
    <>
      <label htmlFor={label}>
        {label}: <input id={label} type="text" value={text} onChange={handleOnChange} />
      </label>
      <div>
        <span ref={ref}>{text}</span>
      </div>
    </>
  )
}

export default App



// import {useRef, useState} from 'react';

// interface DemoProps {}

// const Demo = () => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//     countRef.current++;

//     console.log('State:', count);
//     console.log('Ref:', countRef.current);
//   };

//   return (
//     <div className='app'>
//       Count: {count}
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   )
// }

// export default Demo