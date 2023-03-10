import "./Main.css"
import Banner from "./Components/Banner";
import Mainnews from "./Components/Mainnews";
import BottomNavigation from "../mainComponents/BottomNavigation";


const Main = () => {
    return (
        <div>
            <div className="main-container --d-flex --flex-column --d-flex-start --100vh --align-center ">
                <Banner />
                <div className="spacer-h-1">
                </div>
                <div className="--d-flex --flex-row --d-flex-between --align-center --w-90 ">
                    <span className="h2 ">Breaking News</span>
                    <span className="h3 ">more</span>
                </div>
                <div className="spacer-h-1"></div>
                <Mainnews />
                <div className="spacer-h-4"></div>
            </div>
            <BottomNavigation />
        </div>
        );
}

export default Main;