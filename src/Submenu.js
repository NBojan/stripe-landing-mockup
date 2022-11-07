import { useEffect, useRef } from "react";
import { useGlobalContext } from "./Context";

const Submenu = () => {
    const {subOpen, subData, location} = useGlobalContext();
    const subRef = useRef(null)
    
    useEffect(() => {
        const subNode = subRef.current;
        const {center, bottom} = location;
        subNode.style.left = `${center}px`;
        subNode.style.top = `${bottom}px`;
    }, [location]);

    return (  
        <div className={`${subOpen ? "submenu show-sub" : "submenu"}`} ref={subRef}>
            <h5 className="capitalize col-222 l-spacing-14 mb-10 fs-15">{subData.page}</h5>
            <div className="subLinks">
                {subData.links.map((link,index) => {
                    const {label,icon,url} = link;
                    return (
                        <a href={url} className="d-block mb-8 capitalize" key={index}>
                            <span className="mr-8">{icon}</span>
                            <span>{label}</span>
                        </a>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Submenu;