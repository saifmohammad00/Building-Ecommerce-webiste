import classes from "./MainTitle.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MainTitle = () => {
    const location = useLocation();
    const [showAlbum, setAlbum] = useState(false);
    useEffect(() => {
        if (location.pathname === "/") {
            setAlbum(true);
        } else {
            setAlbum(false);
        }
    }, [location.pathname]);
    return <div className={classes.mainTitle}>
            <h1>The Generics</h1>
            {showAlbum && (<div>
                <button className={classes.album}>Get Our Latest Album</button>
                <button className={classes.playbtn}>►</button>
            </div>)}
        </div>
}
export default MainTitle;