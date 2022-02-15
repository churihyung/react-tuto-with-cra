import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Button from "./Button";

function Hello() {
  useEffect(() => {
    console.log("SHOW X)");
    //cleanup 컴포넌트 사라질 때 실행되는 함수
    return () => console.log("DESTROYED :(");
  }, []);
  return <h3>Hello!</h3>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const upCount = () => setValue((cur) => cur + 1);
  const changeKeyValue = (event) => setKeyword(event.target.value);
  const showHello = () => setShowing((prev) => !prev);

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
      <button onClick={showHello}>{showing ? "HIDE" : "SHOW"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
