import { useNavigate } from "react-router-dom";
import { useEmail } from "../context/emailContext";
import {ToastContainer, toast, Zoom, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {

    const navigate = useNavigate();
    const { email, setEmail } = useEmail();

    const goNewUser = () => { 
        if(email){
            console.log(email);
            navigate('/newuser')
        }else{
            toast.error('Email Adresi Giriniz');
        }
    }

    return (<>
    <ToastContainer />
        <div className="container-fluid d-flex flex-column justify-content-between bg-header">
            <div className="d-flex justify-content-between align-items-center">
                <a className="navbar-brand" href="#/">
                    <img className="ms-4 nav-img" src="https://www.teknoblog.com/wp-content/uploads/2016/01/netflix-logo-beyaz-060116.png" alt="" width="30" height="24" />
                </a>

                <div className="d-flex ">
                    <button type="button" className="btn btn-outline-light me-4 ">
                        <i className="fa-solid fa-globe me-1"></i>Türkçe</button>
                    <button onClick={() => navigate('/login')} id="sing-in-btn" type="button" className="btn btn-danger me-5">Oturum Aç</button>
                </div>
            </div>


            <div className="header-bottom">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-6">
                        <h1 className="text-light main-title text-center fw-bold">Sınırsız film, dizi ve çok daha fazlası.</h1>
                    </div>
                    <div className="col-6 mt-2">
                        <h3 className="text-light subtitle text-center">İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.</h3>
                    </div>
                    <div className="col-8 mt-4">
                        <h5 className="text-light info text-center">İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.</h5>
                    </div>
                    <div className="col-6 mt-3 d-flex">
                        <input onChange={(e) => setEmail(e.target.value)} className="border-0 " id="header-input" type="email" placeholder="E-posta adresi" />
                        <button onClick={goNewUser} id="start-button" type="button" className="btn btn-danger rounded-0"><p className="my-auto mx-auto fs-3">Başlayın +</p></button>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Home;
