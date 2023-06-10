import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useStudent from './../../hooks/useStudent';


const Classes = () => {
    const { data } = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isStudent] = useStudent();
    console.log(data); 
    const addToCart = (lecture) => {
        if (!user) {
            Swal.fire({
                title: 'You have to Login first',
                showCancelButton: true,
                confirmButtonText: 'Login',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    navigate('/login');
                    return;
                }
            })
        }


        const lectureData = { lecture, email: user.email }
        axios.post('http://localhost:5000/classes-cart', lectureData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire(
                        '',
                        'Added to Cart',
                        'success'
                    )
                }
            })

    }

    return (
        <section className="grid grid-cols-3 mx-40 gap-20">
            {
                data.map(lecture =>
                    <div key={lecture._id} className={`${lecture.availableSeats == 0 ? 'bg-red-600' : ''} border rounded-xl border-slate-300 w-[300px] p-4`}>
                        <img src={lecture.image} className="rounded-t-xl w-auto mb-4" />
                        <div className={`space-y-2`}>
                            <h3 className="text-2xl font-bold">{lecture.name}</h3>
                            <p>Instructor: {lecture.instructor}</p>
                            <p>Price: ${lecture.price}</p>
                            <p>Available Seats : {lecture.availableSeats}</p>
                            <button disabled={!isStudent || lecture.availableSeats <= 0} onClick={() => addToCart(lecture)} className="btn btn-info py-1">Select</button>

                        </div>
                    </div>)
            }

        </section>
    );
};

export default Classes;