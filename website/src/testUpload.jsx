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
import { useContext } from "react";
import Radiobtn from "./radiobutton";

const TestUpload = () => {

  const catagorie = useContext(valueCataContext);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [pathName, setPathname] = useState(null);
  const imagesListRef = ref(storage, `${pathName}/`);
  
  const UploadFile = async () => {
    
    if (imageUpload == null) return;
    const imageRef = ref(storage, `${pathName}/${imageUpload.name + v4()}`);
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(snapshot.ref);
    console.log(catagorie)
    setPathname(catagorie);
    
    setImageUrls((prev) => [...prev, url]);
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
  });

  return (
    <div className="App">
      <Radiobtn></Radiobtn>
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
    </div>
  );
};

export default TestUpload;
