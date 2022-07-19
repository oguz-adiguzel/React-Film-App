import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyMovieListServices } from "../mymovielistservices";
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card({ item, index, deleteMovie, localMyMovie }) {

    const myServices = new MyMovieListServices();
    const [movieList, setMovielist] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setMovieListFunction()
    }, []);

    const setMovieListFunction = () => {
        setMovielist(...movieList, item)
    }

    const addMyList = (id) => {
        let model = {
            id: movieList.id,
            name: movieList.name,
            director: movieList.director,
            point: movieList.point,
            posterUrl: movieList.posterUrl,
            title: movieList.title
        }

        myServices.addMyList(model).then((res) => {
            toast.success('Film Listenize Eklendi');
            setTimeout(() => {
                navigate('/myMovie')
            }, 3000);
        })
    }

    let local = localStorage.getItem('userType');

    return (
    <>
        <div key={index} className='col-3 mt-3'>
            <div className="card card-edit">
                <div className="poster "><img src={item.posterUrl} alt='' /> </div>

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
                        <button onClick={() => deleteMovie(item.id)} className='btn btn-danger btn-sm me-1'>Sil</button>
                        {
                            local !== 'admin' && <button onClick={() => addMyList(index)} className='btn btn-success btn-sm'>Listeme Ekle</button>
                        }
                    </div>
                    <div className="info">
                        <p>{item.title}</p>
                    </div>
                    {/* <div className="cast">
                        <h4>Cast</h4>
                        <ul>
                            <li><img src="http://www.gstatic.com/tv/thumb/persons/73414/73414_v9_bb.jpg" /></li>
                            <li><img src="http://www.gstatic.com/tv/thumb/persons/25704/25704_v9_bb.jpg" /></li>
                            <li><img src="http://www.gstatic.com/tv/thumb/persons/554/554_v9_bb.jpg" /></li>
                            <li><img src="http://www.gstatic.com/tv/thumb/persons/8439/8439_v9_ba.jpg" /></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>

    </>);
}

export default Card;