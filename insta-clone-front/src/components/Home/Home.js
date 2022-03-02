import Feed from "../Feed/Feed";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Feed></Feed>
        </div>  
    )
}

export default Home;