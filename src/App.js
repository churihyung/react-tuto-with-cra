import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Button from "./Button";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const upCount = () => setValue((cur) => cur + 1);
  const changeKeyValue = (event) => setKeyword(event.target.value);
  console.log("i can do this all day");
  useEffect(() => console.log("i render only once"), []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(`i search a movie : ${keyword}`);
    }
  }, [keyword]);
  return (
    <div>
      <input onChange={changeKeyValue} value={keyword}></input>
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={upCount} text={"123"} />
    </div>
  );
}

export default App;
