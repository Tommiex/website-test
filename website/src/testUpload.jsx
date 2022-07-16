// import { useState, useEffect, useCallback } from "react";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase/storage";
// import { storage } from "./firebase";
// import { v4 } from "uuid";

// const TestUpload = () => {
//   const [imageUpload, setImageUpload] = useState(null);
//   const [imageUrls, setImageUrls] = useState([]);
//   const [pathName, setPathname] = useState(null);
//   const uploadFile = async () => {
//     if (imageUpload == null) return;
//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//     const snapshot = await uploadBytes(imageRef, imageUpload);
//     const url = await getDownloadURL(snapshot.ref);
//     const cataogorie = useState(null);
//     setImageUrls((prev) => [...prev, url]);
//     setPathname((prev) => [...prev, cataogorie]);
//   };

//   const fetchData = useCallback(async () => {
//     const imagesListRef = ref(storage, `${pathName}/`);
//     const response = await listAll(imagesListRef);
//     const urls = [];
//     for await (const item of response.items) {
//       const url = await getDownloadURL(item);
//       urls.push(url);
//     }
//     setImageUrls(urls);

//     // response.items.forEach((item) => {
//     //   getDownloadURL(item).then((url) => {
//     //     setImageUrls((prev) => [...prev, url]);
//     //   });
//     // });
//   }, [pathName]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return (
//     <div className="App">
//       <input
//         type="file"
//         onChange={(event) => {
//           setImageUpload(event.target.files[0]);
//         }}
//       />
//       <button onClick={uploadFile}> Upload Image</button>
//       {imageUrls.map((url, i) => {
//         //return  รูปทั้งหมดมาใช้
//         return <img src={url} key={i} alt="" />;
//       })}
//       <div>
//         <input type="radio" id="age1" name="age" value="30"></input>
//         <label for="age1">0 - 30</label>
//         <br></br>
//         <input type="radio" id="age2" name="age" value="60"></input>
//         <label for="age2">31 - 60</label>
//         <br></br>
//         <input type="radio" id="age3" name="age" value="100"></input>
//         <label for="age3">61 - 100</label>
//         <br></br>
//       </div>
//     </div>
//   );
// };

// export default TestUpload;
