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

const Upload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [pathName, setPathname] = useState(null);
  const uploadFile = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    // uploadBytes(imageRef, imageUpload).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     setImageUrls((prev) => [...prev, url]);
    //   });
    // });
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(snapshot.ref);
    setImageUrls((prev) => [...prev, url]);
  };

  const fetchData = useCallback(async () => {
    const imagesListRef = ref(storage, "images/");
    const response = await listAll(imagesListRef);
    const urls = [];
    for await (const item of response.items) {
      const url = await getDownloadURL(item);
      urls.push(url);
    }
    setImageUrls(urls);

    // response.items.forEach((item) => {
    //   getDownloadURL(item).then((url) => {
    //     setImageUrls((prev) => [...prev, url]);
    //   });
    // });
  }, [imageUrls]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url, i) => {
        //return  รูปทั้งหมดมาใช้
        return <img src={url} key={i} alt="" />;
      })}
    </div>
  );
};

export default Upload;
