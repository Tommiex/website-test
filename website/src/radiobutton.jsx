import { async } from "@firebase/util";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import React from "react";
export const valueCataContext = React.createContext();
const Radiobtn = () => {
  function myFunction() {
    // const disp = document.getElementById("disp");
    var getSelectedValue = document.querySelector(
      'input[name="season"]:checked'
    );
    const ere = document.getElementById("error");
    // document.getElementById("demo").innerHTML = "Hello World";
    if (getSelectedValue != null) {
      // disp.innerHTML = getSelectedValue.value;
      console.log(getSelectedValue.value);
      <valueCataContext.Provider value={getSelectedValue.value}></valueCataContext.Provider>;
    } else {
      // ere.innerHTML = "*You have not selected any season";
      console.log('no have')
    }
  }
  return (
    <div>
      <div>
        <input type="radio" name="season" id="summer" value="ข้าวหน้าเนื้อ"></input>
        <label htmlFor="summer">-ข้าวหน้าเนื้อ</label>
      </div>

      <div >
        <input type="radio" name="season" id="winter" value="ไก่ย่าง"></input>
        <label htmlFor="winter">ไก่ย่าง</label>
      </div>

      <button onClick={myFunction}>Click me</button>
      {/* <div id="disp"></div>
      <div id="error"></div>
      <p id="demo"></p> */}
      
    </div>
  );
};

export default Radiobtn;
