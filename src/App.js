import { useState } from "react";
import useInput from "./util/useInput";
import Input from "./component/Input";
import "./styles.css";

export default function App() {
  //input에 들어가는 상태값 및 로직을 custom hook으로 만들어봅니다.
  //until 폴더의 useInput.js 파일이 만들어져 있습니다.
  const [firstNameValue, firstNameBind, firstNameReset] = useInput()
  const [lastNameValue, lastNameBind, lastNameReset] = useInput();
  const [nameArr, setNameArr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameArr([...nameArr, `${firstNameValue} ${lastNameValue}`]);
    firstNameReset();
    lastNameReset();
  };

  return (
    <div className="App">
      <h1>Name List</h1>
      <div className="name-form">
        <form onSubmit={handleSubmit}>
          <Input label={"성"} bind={firstNameBind}/>
          <Input label={"이름"} bind={lastNameBind}/>
          <button>제출</button>
        </form>
      </div>
      <div className="name-list-wrap">
        <div className="name-list">
          {nameArr.map((el, idx) => {
            return <p key={idx}>{el}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
