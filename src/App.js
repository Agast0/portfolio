import Leftbar from "./Components/Leftbar/Leftbar";
import Rightbar from "./Components/Rightbar/Rightbar";
import Image from "./Components/HeroImage/Image";
import React, {useEffect} from "react";

function App() {
    return (
        <div className="App">
            <Leftbar />
            <Image />
            <Rightbar />
        </div>
    );
}

export default App;
