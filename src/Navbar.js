import logo from './images/logo.svg'
import sublinks from './data';
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from "./Context";

const Navbar = () => {
    const {toggleSide, openSub, closeSub} = useGlobalContext();

    const displaySub = (e) => {
        const text = e.target.textContent;
        const posObj = e.target.getBoundingClientRect();
        const center = (posObj.left + posObj.right) / 2;
        const bottom = posObj.bottom;
        openSub(text, {center,bottom});
    }
    const hideSub = (e) => {
        if(!e.target.classList.contains("listLi")){
            closeSub();
        }
    }

    return (  
        <div className="containerH" onMouseOver={hideSub}>
            <nav className="d-flex space-between align-center containerBoot m-auto">
                <div className="navHeader d-flex space-between align-center">
                    <img src={logo} alt="Slice" />
                    <button className='btn ham-btn' onClick={toggleSide}><FaBars /></button>
                </div>

                <ul className="no-style d-flex align-center list-H">
                    {sublinks.map((link,index) => (
                        <li key={index}><button className="listLi" onMouseOver={displaySub}>{link.page}</button></li>
                    ))}
                </ul>

                <button className="btn sign-btn">Sign In</button>
            </nav>
        </div>
    );
}
 
export default Navbar;