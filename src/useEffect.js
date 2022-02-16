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
  console.log(
    "a:",
    "A23233202202162      rodls11             90001268204380동원대학교                    test                                                        1112231        00001                                                                                                                                       "
      .length
  );
  console.log(
    "b:",
    "B232330000011268204380동원대학교                    00007900000000820000000216710000000000000000000000000086684000000000015280800000000001528000000000016808801                                                                                                                                             "
      .length
  );
  console.log(
    "c:",
    "C2323300000112682043800007254248316김아현                        11622022202200010000000030000000000000000000000000001800000000000012000020000000000240000000000000240000000000026400                                                                                                                       "
      .length
  );
  console.log(
    "c:",
    "C2323300000212682043800010094938015최지우                        11622022202200020000000036000000000000000000000000002160000000000014400020000000000240000000000000240000000000026400                                                                                                                       "
      .length
  );
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

// export default App;
