import NavBar from "../../Components/navbar/NavBar";
import Saidbar from "../../Components/saidbar/Saidbar";
import { Outlet } from 'react-router-dom';

function Home() {
    return ( 
            <div className="content">
                     <Saidbar/>
                    <NavBar/>
                    <div class="container-fluid pt-4 px-4">
                                <Outlet/>
                    </div>
            </div>
);
}

export default Home;