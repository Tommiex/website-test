import "./navbar.css";
function Navbar(){
    
    return(
        <div className="nav">
            <div className="Left">
                Home
            </div>
            <div className="Right">
                <a href="#">home</a>
                <a href="#">info</a>
                <a href="#">page</a>
            </div>
        </div>
    )
}
export default Navbar;