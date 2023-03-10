import "./BottomNavigation.css"
import {FaHome, FaSearch, FaUser} from "react-icons/fa";


const BottomNavigation = () => {
    return (
        <div className="btm-navigation">
            <FaHome />
            <FaSearch />
            <FaUser />
        </div>
    )
}

export default BottomNavigation;