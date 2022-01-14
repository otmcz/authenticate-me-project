import { useSelector } from "react-redux";

const HomePage = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let homeContent;
    if (sessionUser) {
        homeContent = (
            <p>You are logged in</p>
        )
    } else {
        homeContent = (
            <div className='home general'>
                <h1>welcome to typebeats</h1>
                <h3> A place for music artists to find their favorite type of beats</h3>
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
                {/* <h3>Chris Ramos</h3> */}
            </footer>
        </>
    )
};

export default HomePage;
