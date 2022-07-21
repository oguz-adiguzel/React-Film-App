
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';
import { useAuth } from '../context/authContext';
import { MovielistServices } from "../movielistServices";
import { MyMovieListServices } from '../mymovielistservices';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Userpage() {

    const navigate = useNavigate();
    const [movieList, setMovielist] = useState([])
    const movieService = new MovielistServices();
    const myService = new MyMovieListServices();
    const { setIsAuth } = useAuth();

    useEffect(() => {
        toast.success('Giriş Başarılı');
        getMovielist();
    }, []);

   

    const getMovielist = () => {
        movieService.getMovielist().then((res) => {
            setMovielist(res);
            console.log(res);
        })
    }

    const deleteMovie = (id) => {
        if (local === 'admin') {
            movieService.deleteMovies(id).then((res) => {
                getMovielist()
            })
            myService.deleteMovies(id).then((res) => {
                getMovielist()
            })
        } else {
            alert('Film silme işlemini sadece adminler yapabilir')
        }
    }

    const exit = () => {
        setIsAuth('false')
        localStorage.clear();
        navigate('/')
    }

    let local = localStorage.getItem('userType');
    console.log(local);

    return (
        <>
            <ToastContainer />
            <div className="container-fluid bg-header bg-userpage">
                <div className="row">
                    <div className="col-6">
                        <img className="ms-4 nav-img" src="https://www.teknoblog.com/wp-content/uploads/2016/01/netflix-logo-beyaz-060116.png" alt="" width="30" height="24" />
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center">
                        {
                            local === 'admin' && <button onClick={() => navigate('/addMovie')} className='btn btn-warning text-danger me-3'>Yeni Film Ekle</button>
                        }
                        <button onClick={exit} className='btn btn-danger text-warning me-3'>Çıkış</button>
                        {
                            local !== 'admin' && <button onClick={() => navigate('/myMovie')} className='btn btn-success text-warning'>Listem</button>
                        }

                    </div>
                </div>
                <div className='row d-flex justify-content-center mt-3'>

                    {
                        movieList.map((item, index) => (
                            <Card key={index} item={item} index={index} deleteMovie={deleteMovie} />
                        ))
                    }


                </div>


            </div>
        </>
    );
}

export default Userpage;