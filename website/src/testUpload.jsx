import { useState, useEffect, useCallback } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { async } from "@firebase/util";
import { valueCataContext } from "./radiobutton";

const TestUpload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [pathName, setPathname] = useState(null);
  const imagesListRef = ref(storage, `${pathName}/`);
  
  
  const UploadFile = async () => {
    const cataogorie = useState(null);
    if (imageUpload == null) return;
    const imageRef = ref(storage, `${pathName}/${imageUpload.name + v4()}`);
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(snapshot.ref);
    
    

    setImageUrls((prev) => [...prev, url]);
    setPathname(cataogorie);
  };

  const fetchData = useCallback(async () => {
    // const imagesListRef = ref(storage, `${pathName}/`);
    const response = await listAll(imagesListRef);
    const urls = [];
    for await (const item of response.items) {
      const url = await getDownloadURL(item);
      urls.push(url);
    }
    setImageUrls(urls);
})

//     // response.items.forEach((item) => {
//     //   getDownloadURL(item).then((url) => {
//     //     setImageUrls((prev) => [...prev, url]);
//     //   });
//     // });
//   }, [pathName]);

 

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={UploadFile}> Upload Image</button>
      {imageUrls.map((url, i) => {
        //return  รูปทั้งหมดมาใช้
        return <img src={url} key={i} alt="" />;
      })}
      <p>sadasd</p>
    </div>
  );
};

// export default TestUpload;
