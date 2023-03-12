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