import "./Main2Nav.css"


function Main2Nav(){
    return(
        <>
           <div className="navMain">
                <div className="option">
                    <a href="#">Promotion</a>
                    <a href="#">Contact</a>
                    <a href="#">Back to main</a>
                </div>
                <div className="search-box">
                    <input className="search-Box" type="text"  placeholder="search"></input>
                </div>
            </div> 
        </>
    )
}
export default Main2Nav;