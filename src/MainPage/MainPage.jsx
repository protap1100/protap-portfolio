import { Outlet } from "react-router-dom";
import Header from "../Components/SharedCompo/Header";
import Footer from "../Components/SharedCompo/Footer";

const MainPage = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;