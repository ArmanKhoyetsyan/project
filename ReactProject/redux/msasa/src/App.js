import "./App.css";
import { useState } from "react";
import useEffectArman from "./useEffectArman";


function App() {
  const [name, setState] = useState(9);
  const [fast, setFast] = useState(5);


  useEffectArman(() => {
    console.log(name, fast)
  }, [name, fast])

  // let name = useSelector((state) => {
  //   return state.countUser.name;
  // });

  return (
    <div className="App">
      <h1>{name}</h1>
      <input
        onChange={(ev) => {
          setState(ev.target.value)
        }}
      />
      <h1>{fast}</h1>
      <input
        onChange={(ev) => {
          setFast(ev.target.value)
        }}
      />
    </div>
  );
}

export default App;
