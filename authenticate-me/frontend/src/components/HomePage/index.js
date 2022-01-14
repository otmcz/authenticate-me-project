import { useSelector } from "react-redux";
import './HomePage.css'
const HomePage = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let homeContent;
    if (sessionUser) {
        homeContent = (
            <div className='home general'>
                <h1>Welcome</h1>
                <h3>Feel free to browse through the beats</h3>
                <img src='https://cdn.mos.cms.futurecdn.net/doXGMAjXPZaCpe9tjkFKsd-1024-80.jpg.webp' alt='room illustration'></img>
            </div>
        )
    } else {
        homeContent = (
            <div className='home general'>
                <h1>Welcome to typebeats!</h1>
                <h3>A place for producers and music creators to find and upload beats.</h3>
                    <h4> Login/signup to access our beats. </h4>
                <img src='https://cdn.mos.cms.futurecdn.net/doXGMAjXPZaCpe9tjkFKsd-1024-80.jpg.webp' alt='room illustration'></img>
            </div>
        )
    }

    return (
        <>
            <div className='home user'>
                {isLoaded && homeContent}
            </div>
            <footer className='footer'>
                <h3>Developer: Chris Ramos</h3>
            </footer>
        </>
    )
};

export default HomePage;
