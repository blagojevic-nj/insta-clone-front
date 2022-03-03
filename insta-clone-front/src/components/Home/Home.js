import Feed from "../Feed/Feed";
import ProtectedRoute from "../../router/ProtectedRoute"
import Navbar from "../Navbar/Navbar"

const Home = () => {
    return (
        <div className="home">
            <ProtectedRoute component={<Navbar/>} navigate={<></>}/>
            <Feed></Feed>
        </div>  
    )
}

export default Home;