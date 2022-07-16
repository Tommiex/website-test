import { async } from "@firebase/util";
import { useCallback } from "react";
import { useEffect } from "react";

const Radiobtn = () => {
  useEffect(async () => {
    async function fetchData() {
      const btn = document.querySelector("#btn");
      const radioButtons = document.querySelectorAll('input[name="size"]');
      const output = document.querySelector("#output");

      btn.addEventListener("click", () => {
        let selectedSize;
        for (const radioButton of radioButtons) {
          if (radioButton.checked) {
            selectedSize = radioButton.value;

            break;
          }
        }
        // show the output:
        output.innerText = selectedSize
          ? `You selected ${selectedSize}`
          : `You haven't selected any size`;
      });
    }
    fetchData();
  }, []);

  return (
    <div>
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

export default Radiobtn;
