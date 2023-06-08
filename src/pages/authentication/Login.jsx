import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import authImg from '../../assets/images/authentication.gif'
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";



const Login = () => {
    const { logIn, googleLogIn } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);
        const { email, password } = data;
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfull',
                  })
            })
            .catch(error => console.error(error.message))
    };

    const handleGoogleLogin = () => {
        googleLogIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(loggedUser);
                })
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message
              })
        })
    }


    return (
        <section className="min-h-screen py-20">
            <div className="hero min-h-screen bg-base-200 items-center">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={authImg} alt="" />
                    </div>
                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body" >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered"
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })} />
                                {errors.email && <p className="text-red-500">Email is required and must be valid</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    {...register("password", {
                                        required: true, pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                            message: 'Password must be at least 6 characters long and contain at least one letter and one number'
                                        }
                                    })} />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p>New Here ? <Link to='/register' className="underline text-info">Register Now</Link></p>
                            <div className="form-control mt-6">
                                <input className="btn btn-info" value='Login' type="submit" />
                            </div>
                        </div>
                        <div className="divider"></div>
                        <button onClick={handleGoogleLogin} className="btn btn-circle btn-error mx-auto mb-5"><FaGoogle /></button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;