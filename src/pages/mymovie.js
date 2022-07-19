import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/card";
import { MyMovieListServices } from "../mymovielistservices";

function MyMovies() {
    const navigate = useNavigate()
    const services = new MyMovieListServices();
    const [myMovieList, setMyMovieList] = useState([])

    useEffect(() => {
        getMyMovieList()
    }, []);

    const getMyMovieList = () => {
        services.getMyMovieList().then((res) => {
            setMyMovieList(res)
        })
    }

    const deleteMovie = (id) => {
        if (localMyMovie === 'user') {
            services.deleteMovies(id).then((res) => {
                getMyMovieList()
            })
        } else {
            alert('Film silme işlemini sadece adminler yapabilir')
        }
    }

    let localMyMovie = localStorage.getItem('userType')

    return (<>
        <div className="container-fluid bg-header bg-userpage">
            <div className="row">
                <div className="col-6">
                    <img className="ms-4 nav-img" src="https://www.teknoblog.com/wp-content/uploads/2016/01/netflix-logo-beyaz-060116.png" alt="" width="30" height="24" />
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <button onClick={() => navigate('/userpage')} className="btn btn-success text-warning">Film Listesi</button>
                </div>

            </div>
            <div className='row d-flex justify-content-center mt-3'>

                {
                    myMovieList.map((item, index) => (
                        <Card key={index} item={item} index={index} deleteMovie={deleteMovie} localMyMovie={localMyMovie} />
                    ))
                }


            </div>


        </div>
    </>);
}

export default MyMovies;