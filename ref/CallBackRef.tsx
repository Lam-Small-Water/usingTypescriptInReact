import { useState, useEffect, useCallback, useRef } from "react"

const App = () => {
  return (
    <div className="app">
      <ComponentWithDomApi />
    </div>
  )
}


const ComponentWithDomApi: React.FC = () => {
  const [text, setText] = useState('Some text ...');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  // const callBackRef = useCallback(node: HTMLInputElement | undefined) =>  {
  //   if (!node) return;

  //   const {width} = node.getBoundingClientRect();
  //   document.title = `Width: ${width}`;
  // }

  const callBackRef = useCallback((node:any) => {
    if (!node) return;

    const {width} = node.getBoundingClientRect();
    if (width >= 150) {
      node.style.color = 'red';
    } else {
      node.style.color = 'blue';
    }
    document.title = `Width: ${width}`;
  }, [text]);

  // const ref = useRef<HTMLInputElement | null>(null);

  // useEffect(() => {
  //   if (isFocus) {
  //     ref.current?.focus();
  //   }
  // }, [isFocus])

  const increRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (increRef.current) {
      increRef.current.textContent = 0 
    }
  }, [])

  const handleClick = () => {
    increRef.current.textContent = Number(increRef.current.textContent) + 1;
  }


  return (
    <>
        <input type="text" value={text} onChange={handleOnChange}/>
        <div><span ref={callBackRef}>{text}</span></div>
        <div><span ref={increRef}></span></div>
        <button type="button" onClick={handleClick}>Increase</button>
    </>
  )
}

export default App

