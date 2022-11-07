import React ,{ useContext, useState } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [sideOpen, setSideOpen] = useState(false);
    const [subOpen, setSubOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [subData, setSubData] = useState({page:"", links:[]});

    const toggleSide = () => setSideOpen(!sideOpen);
    const openSub = (text, coord) => {
        setSubData(sublinks.find(link => link.page === text));
        setLocation(coord);
        setSubOpen(true);
    }
    const closeSub = () => setSubOpen(false);

    return (
        <AppContext.Provider value={{sideOpen, toggleSide, subOpen, openSub, location, subData, closeSub}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => useContext(AppContext);

export {AppContext, AppProvider, useGlobalContext};