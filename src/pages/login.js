import { useFormik } from "formik";
import { useEffect, useState } from 'react';
import { UserlistService } from "../userlistServices";
import {  useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


function Login() {
    const [loginControl,setLoginControl] =useState(false)
    const navigate = useNavigate()
    const [userList, setUserList] = useState([]);
    const [form, setForm] = useState([])
    const service = new UserlistService();
   

    const {setIsAuth} = useAuth();

    useEffect(() => {
        getUser()
    }, []);
 
    useEffect(() => {
        if (form.email) {
            loginUSer()
        }
    }, [form])

    const getUser = () => {
        service.getUserlist().then((res) => {
            setUserList(res)
        })
    }

    const loginUSer = () => {
        let newUser = userList.find(item => (
            item.email === form.email && item.password === form.password
        ))
        
        if (newUser) {
            setIsAuth('true')
            localStorage.setItem('userType',newUser.userType)
            alert('Giriş Başarılı');
            navigate('/userpage')
        } else {
            setLoginControl(true)
            setTimeout(() => {
                setLoginControl(false)
            }, 3000);
        }
    }

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            setForm(values)
            console.log(values);
        }
    })

    return (
        <>
            <div className="container-fluid bg-header">
                <div className="row">
                    <div className="col-12">
                        <img className="ms-4 nav-img" src="https://www.teknoblog.com/wp-content/uploads/2016/01/netflix-logo-beyaz-060116.png" alt="" width="30" height="24" />
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div id="sign-in-card" className="col-4 ">
                        <h2 className="text-light">Oturum Aç</h2>
                        <form onSubmit={handleSubmit}>
                            <input name="email" value={values.email} onChange={handleChange} className="sign-in-input bg-dark rounded p-3 mt-3" type="text" placeholder="E-posta veya telefon numarası" />
                            {
                              loginControl && <p className="warning mt-2">Lütfen geçerli bir telefon numarası veya e‑posta adresi girin.</p>
                            } 
                            <input value={values.password} name="password" onChange={handleChange} className="sign-in-input bg-dark rounded p-3 mt-4" type="password" placeholder="Parola" />
                            <button type="submit" className="btn btn-danger sign-in-button fw-bold mt-5">Oturum Aç</button>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check ">
                                    <input className="form-check-input bg-secondary" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label text-secondary" htmlFor="gridCheck">
                                        Beni hatırla
                                    </label>
                                </div>
                                <p className="text-secondary">Yardım ister misiniz ?</p>
                            </div>
                            <span className="text-secondary">Netflix'e katılmak ister misiniz?</span><span className="text-light">Şimdi kaydolun</span>
                            <p className="text-secondary mt-3">Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor.</p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;