import sublinks from "./data";
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from "./Context";

const Sidelist = () => {
    const {sideOpen, toggleSide} = useGlobalContext();

    return (  
        <div className={`wrapper d-flex justify-center align-center ${sideOpen ? "show-wrap" : ""}`}>
            <div className="sidelist d-flex space-between flex-wrap">
                <button className="close-btn" onClick={toggleSide}><FaTimes /></button>
                {sublinks.map((sublink, index) => {
                    const {page, links} = sublink;
                    return (
                        <article key={index}>
                            <h4 className="capitalize col-222">{page}</h4>
                            <div className="links">
                                {links.map((link,index) => {
                                    const {label,icon,url} = link;
                                    return (
                                        <a key={index} href={url} className="d-block capitalize">
                                            <span className="mr-8">{icon}</span>
                                            <span>{label}</span>
                                        </a>
                                    )
                                })}
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Sidelist;