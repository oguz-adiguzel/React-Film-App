import { useFormik } from "formik";
import { MovielistServices } from "../movielistServices";
import {  useNavigate } from "react-router-dom";
import validation from "../validations";



function AddMovies() {
    const services = new MovielistServices();
    const navigate = useNavigate()
    const addMovies =(values)=>{
        let model = {
            id:null,
            name:values.name,
            director:values.director,
            actors:values.actors,
            point:values.point,
            posterUrl:values.posterUrl,
            title:values.title
        }

        services.addMovies(model).then(()=>{
            navigate('/userpage')
        })
    }

    const { handleSubmit, handleChange, values,errors,touched,handleBlur } = useFormik({
        initialValues: {
            name: '',
            director: '',
            actors: '',
            point: '',
            posterUrl: '',
            title: ''
        },
        onSubmit: (values) => {
            console.log(values);
            addMovies(values)
        },validationSchema:validation
    })

    return (<>
        <div className="container-fluid bg-header">
            <div className="row">
                <div className="col-6">
                    <img className="ms-4 nav-img" src="https://www.teknoblog.com/wp-content/uploads/2016/01/netflix-logo-beyaz-060116.png" alt="" width="30" height="24" />
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-5">
                        <label htmlFor="name" className="form-label text-danger fs-4">Film İsmi</label>
                        <input name="name" value={values.name} onChange={handleChange} type="text" className="form-control" id="name" onBlur={handleBlur} />
                        {
                            touched.name && errors.name && <p className="warning mt-2">{errors.name}</p>
                        }
                    </div>
                    <div className="col-5">
                        <label htmlFor="director" className="form-label text-danger fs-4">Yönetmen</label>
                        <input name="director" value={values.director} onChange={handleChange} type="text" className="form-control" id="director" onBlur={handleBlur} />
                        {
                            touched.director && errors.director && <p className="warning mt-2">{errors.director}</p>
                        }
                    </div>
                    <div className="col-5 mt-5">
                        <label htmlFor="actors" className="form-label text-danger fs-4">Oyuncular</label>
                        <input name="actors" value={values.actors} onChange={handleChange} type="text" className="form-control" id="actors" onBlur={handleBlur} />
                        {
                            touched.actors && errors.actors && <p className="warning mt-2">{errors.actors}</p>
                        }
                    </div>
                    <div className="col-5 mt-5">
                        <label htmlFor="point" className="form-label text-danger fs-4">Puan</label>
                        <input name="point" value={values.point} onChange={handleChange} type="text" className="form-control" id="point" onBlur={handleBlur}/>
                        {
                            touched.point && errors.point && <p className="warning mt-2">{errors.point}</p>
                        }
                    </div>
                    <div className="col-5 mt-5">
                        <label htmlFor="posterUrl" className="form-label text-danger fs-4">Poster Url</label>
                        <input name="posterUrl" value={values.posterUrl} onChange={handleChange} type="text" className="form-control" id="posterUrl" onBlur={handleBlur} />
                        {
                            touched.posterUrl && errors.posterUrl && <p className="warning mt-2">{errors.posterUrl}</p>
                        }
                    </div>
                    <div className="col-5 mt-5">
                        <div className="form-floating mt-4">
                            <textarea value={values.title} onChange={handleChange} name="title" className="form-control"  id="title" onBlur={handleBlur}></textarea>
                            <label className="text-danger" htmlFor="title">Açıklama</label>
                            {
                            touched.title && errors.title && <p className="warning mt-2">{errors.title}</p>
                        }
                        </div>
                    </div>
                    <div className="col-10 mt-5">
                        <button type="submit" className="btn btn-warning px-4 text-danger">Film Ekle</button>
                    </div>
                </div>
            </form>

        </div>
    </>);
}

export default AddMovies;