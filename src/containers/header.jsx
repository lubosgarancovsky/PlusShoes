
import { Slider } from "../components/slider";
import { TopBar } from "./topbar";

export function Header() {
    return ( 
        <header>
            <TopBar/>

            <div className="header-carousel">
                <Slider/>
            </div>
        </header>
     );
}

