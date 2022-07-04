
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MovielistServices } from "../movielistServices";

function Userpage() {

    const navigate = useNavigate();
    const [movieList, setMovielist] = useState([])

    const movieService = new MovielistServices();

    useEffect(() => {
        getMovielist()
    }, []);



    const getMovielist = () => {
        movieService.getMovielist().then((res) => {
            setMovielist(res);
            console.log(res);
        })
    }

    const deleteMovie = (id) => {
        movieService.deleteMovies(id + 1).then((res)=>{
            getMovielist()
        })
    }

    return (
        <>
            <div className="container-fluid bg-header bg-userpage">
                <div className="row">
                    <div className="col-6">
                        <img className="ms-4 nav-img" src="https://www.teknoblog.com/wp-content/uploads/2016/01/netflix-logo-beyaz-060116.png" alt="" width="30" height="24" />
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <button onClick={() => navigate('/addMovie')} className='btn btn-warning text-danger'>Yeni Film Ekle</button>
                    </div>
                </div>
                <div className='row d-flex justify-content-center mt-3'>

                    {
                        movieList.map((item, index) => (
                            <div key={index} className='col-3 mt-3'>
                                <div className="card card-edit">

                                    <div className="poster "><img src={item.posterUrl} /></div>

                                    <div className="details">
                                        <h2>
                                            {item.name}
                                            <br /><span>{item.director}</span>
                                        </h2>
                                        <div className="rating">
                                            <i className="fas fa-star" aria-hidden="true"></i>
                                            <i className="fas fa-star" aria-hidden="true"></i>
                                            <i className="fas fa-star" aria-hidden="true"></i>
                                            <i className="fas fa-star" aria-hidden="true"></i>
                                            <i className="far fa-star" aria-hidden="true"></i>
                                            <span>{item.point}/10</span>
                                        </div>
                                        <div className="tags">
                                            <button onClick={() => deleteMovie(index)} className='btn btn-danger btn-sm me-1'>Sil</button>
                                            <button className='btn btn-success btn-sm'>Düzenle</button>
                                        </div>
                                        <div className="info">
                                            <p>{item.title}</p>
                                        </div>
                                        <div className="cast">
                                            <h4>Cast</h4>
                                            <ul>
                                                <li><img src="http://www.gstatic.com/tv/thumb/persons/73414/73414_v9_bb.jpg" /></li>
                                                <li><img src="http://www.gstatic.com/tv/thumb/persons/25704/25704_v9_bb.jpg" /></li>
                                                <li><img src="http://www.gstatic.com/tv/thumb/persons/554/554_v9_bb.jpg" /></li>
                                                <li><img src="http://www.gstatic.com/tv/thumb/persons/8439/8439_v9_ba.jpg" /></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }


                </div>


            </div>
        </>
    );
}

export default Userpage;