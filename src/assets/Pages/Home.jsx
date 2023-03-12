import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PictureList from "../components/PictureList/PictureList";

function Home(){
    return(
        <div className="container main-layout">
           <Header className="layout-header" />
           <PictureList className="layout-content" />
           {/* <Footer className="layout-footer" /> */}
        </div>
    )

}

export default Home;