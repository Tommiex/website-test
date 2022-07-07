import axios from "axios";
import { useState } from "react";
import Login from "./auth/googlelogin";
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
    <div>
      <Login></Login>
      <button onClick={handleClick}>sadnesss</button>
      <div>{text}</div>
    </div>
  );
};
export default Test

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
