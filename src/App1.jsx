import { useRef, useState } from "react";
import FirstComponent from "./components/FirstComponent";

const App1 = () => {
  const [x, setX] = useState(0);
  const [dataList, setDataList] = useState([]);
  const inputRef = useRef(null);
  let varIncrement = 0;

  const btnClick1 = () => {
    console.log("Clicked");
    setX(x + 1);
    console.log(x);
  };

  const ajoutSurLaliste = () => {
    setDataList(prevData => [...prevData, inputRef.current.value]);

    console.log(dataList);
  }

  return (
    <div>
      <FirstComponent data={x} fn={setX} />
      <div>
        <button
          onClick={() => {
            btnClick1();
          }}
        >
          cliquer
        </button>

        <p></p>
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={ajoutSurLaliste}>Ajouter sur la liste</button>
            {dataList.map((item, index)=>{return <h1 key={index}>{item}</h1>})}
        </div>
      </div>
    </div>
  );
};

export default App1;
