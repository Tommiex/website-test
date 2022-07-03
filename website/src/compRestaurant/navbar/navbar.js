import "./navbar.css";
import "./hamburger.css";
import {useState}from "react"
function Navbar1R(){
    const [hamburgerBTN,changeHamburger]=useState()
    
    function activeBurger(){
        changeHamburger(hamburgerBTN=> !hamburgerBTN)
    }
    function changeBurgerClass(){
        if(hamburgerBTN){
            return('hamburger HBGactive')
        }else
            return('hamburger')
        
    }
    function changeRightClass(){
        if(hamburgerBTN){
            return('Right Ractive')
        }else
            return('Right')
        
    }

    
    return(
        <div className="nav">
            <div className="Left">
                All
            </div>
            <div className={changeBurgerClass()} onClick={()=>{activeBurger()}}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className={changeRightClass()}>
                <a href="#">Promotion</a>
                <a href="#">Contact</a>
                <a href="#">Back to main</a>
            </div>
        </div>
    )
}
export default Navbar1R;