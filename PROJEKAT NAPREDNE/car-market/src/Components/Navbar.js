import logo from '../images/logo-test.png';
const Navbar = () => {
    return ( 
        <nav>
            <div className="nav-content container">
                <div className="nav-left">
                    <img src={logo} className="nav-item"/>
                </div>
                <div className="nav-right">
                    <a href="#a" className="nav-item nav-active">Home</a>
                    <a href="#a" className="nav-item">Shop</a>
                    <a href="#a" className="nav-item">Sell</a>
                    <a href="#a" className="nav-item">Contact</a>
                </div>
               
            </div>
        </nav>
     );
}
 
export default Navbar;