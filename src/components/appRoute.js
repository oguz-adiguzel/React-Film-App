import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { EmailProvider } from "../context/emailContext";
import AddMovies from "../pages/addmovies";
import Home from "../pages/home";
import Login from "../pages/login";
import MyMovies from "../pages/mymovie";
import NewUSer from "../pages/newuser";
import Userpage from "../pages/userpage";

function AppRoute() {
    const { isAuth } = useAuth();

    return (<>

        <EmailProvider>
        {
            (isAuth === 'true') && <Routes>
                <Route path='/userpage' element={<Userpage />} />
                <Route path='/addMovie' element={<AddMovies />} />
                <Route path='/myMovie' element={<MyMovies />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        }

        {
            (isAuth === 'false') && <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/newuser" element={<NewUSer />} />
                <Route path="*" element={<Navigate to="/" />} />

            </Routes>
        }
        </EmailProvider>
    </>);
}



export default AppRoute;