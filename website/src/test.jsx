import axios from "axios";
import { useState } from "react";
import LoginGoogle from "./auth/googlelogin";
import Upload from "./upload";
import TestUpload from "./testUpload";
import './test.css'
import ReSignup from "./auth/EmailSignUp";
const Test = () => {
  const [text, setText] = useState("");

  function handleClick() {
    axios
      .get("http://localhost:9080/", { crossdomain: true })
      .then((response) => {
        // console.log(response.data)
        setText(response.data[0].test);
      });
  }

  return (
    <div className="All-test">
      <LoginGoogle></LoginGoogle>
      <button onClick={handleClick}>sadnesss</button>
      <div className="upload">
        <Upload></Upload>
      </div>
      <div>{text}</div>
      <div className="Email-Test">
        <ReSignup/>
      </div>
    </div>
  );
};
export default Test;

// const Test = () => {
//   const [text, setText] = useState("");

//   function handleClick() {
//     axios
//       .get("http://localhost:9080/", { crossdomain: true })
//       .then((response) => {
//         // console.log(response.data)
//         setText(response.data[0].test);
//       });
//     // .then(() => {
//     //   console.log(text);

//     // });
//   }

//   return (
//     <div>
//       <div>
//         <button onClick={handleClick}>sadnesss</button>
//         <div className="clic">{text}</div>
//       </div>
//     </div>
//   );
// };
// export default Test;
