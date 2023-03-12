// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import PictureList from "../components/PictureList/PictureList";

// function Home(){
//     return(
//         <div className="container main-layout">
//            <Header className="layout-header" />
//            <PictureList className="layout-content" />
//            <Footer className="layout-footer" />
//         </div>
//     )

// }

// export default Home;


import Header from "../components/Header";
import PictureList from "../components/PictureList/ImageList";
import Description from "../components/Description";
import Footer from "../components/Footer";
import pictures from "../json/pictures.json"

function Home() {
    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <div className="layoutContent" >
                <PictureList img={pictures} />
                <Description />
            </div>
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Home;