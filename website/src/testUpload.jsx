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
    setPathname((prev) => [...prev, cataogorie]);
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

    // response.items.forEach((item) => {
    //   getDownloadURL(item).then((url) => {
    //     setImageUrls((prev) => [...prev, url]);
    //   });
    // });
  }, [pathName]);

  useEffect(() => {
    fetchData();
    const btn = document.querySelector("#btn");
    const radioButtons = document.querySelectorAll('input[name="size"]');
    const output = document.querySelector("#output");
    btn.addEventListener("click", () => {
      let selectedSize;
      for (const radioButton of radioButtons) {
        if (radioButton.checked) {
          selectedSize = radioButton.value;
          console.log(selectedSize);
          break;
        }
      }
      // show the output:
      output.innerText = selectedSize
        ? `You selected ${selectedSize}`
        : `You haven't selected any size`;
    });
  }, [fetchData]);

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
      <div className="radiobtn">
        <div>
          <input type="radio" name="size" value="XS" id="xs"></input>
          <label htmlFor="xs">XS</label>
        </div>
        <div>
          <input type="radio" name="size" value="S" id="s"></input>
          <label htmlFor="s">S</label>
        </div>
        <div>
          <input type="radio" name="size" value="M" id="m"></input>
          <label htmlFor="m">M</label>
        </div>
        <button id="btn">Show Selected Value</button>
        <p id="output"></p>
      </div>
    </div>
  );
};

export default TestUpload;
