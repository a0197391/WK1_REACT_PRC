import Header from "../components/Header";
import PictureList from "../components/PictureList";
import Description from "../components/Description";
import Footer from "../components/Footer";

import { useImages } from "../react-query";
// import pictures from "../json/pictures.json"

function Home() {
    const { data, isLoading } = useImages();
    const imgs = data || [];


    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <div className="layoutContent" >
                {/* <PictureList img={pictures} /> */}
                <PictureList img={imgs} isLoading={isLoading}/>
                <Description />
            </div>
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Home;