import { Outlet } from "react-router-dom";
import Header from "../Components/SharedCompo/Header";
import Footer from "../Components/SharedCompo/Footer";

const MainPage = () => {
  return (
    <div className="container mx-auto">
      <div className=" h-16 ">
        <Header></Header>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
