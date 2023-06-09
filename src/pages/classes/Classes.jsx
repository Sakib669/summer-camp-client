import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Classes = () => {
    const { data } = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

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
        axios.post('http://localhost:5000/classesCart', lectureData)
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
                            <button disabled={lecture.availableSeats <= 0 || ['admin', 'instructor'].includes(user.role)} onClick={() => addToCart(lecture)} className="btn btn-info py-1">Select</button>

                        </div>
                    </div>)
            }

        </section>
    );
};

export default Classes;