import { useFormik } from "formik";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmail } from "../context/emailContext";
import { UserlistService } from "../userlistServices";
import {ToastContainer, toast, Zoom, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewUSer() {

    const [form, setForm] = useState({});
    const services = new UserlistService();
    const navigate = useNavigate();

    const {email} = useEmail();

    useEffect(() => {
        if (form.email) {
            addUser();
        }
    }, [form])

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            email:email,
            password: ''
        },
        onSubmit: (values) => {
            setForm(values)
            console.log(values);
            
        }
    })

    const addUser = ()=>{
        let model={
            email:form.email,
            password:form.password,
            userType:'user'
        }

        services.postUserList(model).then((res)=>{
            toast.info('Kullanıcı Oluşturuldu')
            setTimeout(() => {
                navigate('/');
            }, 3000);
        })
    }



    return (<>
    <ToastContainer />
        <div className="container-fluid newuser-page">
            <div className="container-fluid border-bottom mb-5">
                <div className="row">
                    <div className="col-10">
                        <a href="/#"  >
                            <img className="ms-4 nav-img" src="https://www.teknoblog.com/wp-content/uploads/2016/01/netflix-logo-beyaz-060116.png" alt="" width="30" height="24" />
                        </a>
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-center">
                        <a onClick={()=>navigate('/login')} className="signİn" >Oturum Aç</a>
                    </div>
                </div>
            </div>

            <div className="continer mt-5 mb-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-4">
                        <h3 className="title">Üyeliğinizi başlatmak için bir parola oluşturun</h3>
                        <h4 className="subtitle mt-3">Sadece birkaç adım daha kaldı, sonra bitiyor!<p>Biz de formaliteyi hiç sevmiyoruz.</p></h4>
                        <form onSubmit={handleSubmit}>
                            <input value={values.email} onChange={handleChange} name="email" className="newuser-input mt-3" type="text" placeholder="E-posta" />
                            <input value={values.password} onChange={handleChange} name="password" className="newuser-input mt-3" type="password" placeholder="Bir parola ekleyin" /><br />
                            <button type="submit" className="mt-4 newuser-button">Oluştur</button>
                        </form>
                        
                    </div>
                </div>

            </div>

        </div>

    </>);
}

export default NewUSer;