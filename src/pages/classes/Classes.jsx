import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Classes = () => {
    const { data } = useLoaderData();
    const { user } = useContext(AuthContext);

    const addToCart = (id) => {
        
    }

    return (
        <section className="grid grid-cols-3 mx-40 gap-20">
            {
                data.map(lecture =>
                    <div key={lecture._id} className={`${ lecture.availableSeats == 0 ? 'bg-red-600' : ''} border rounded-xl border-slate-300 w-[300px] p-4`}>
                        <img src={lecture.image} className="rounded-t-xl w-auto mb-4" />
                        <div className={`space-y-2`}>
                            <h3 className="text-2xl font-bold">{lecture.name}</h3>
                            <p>Instructor: {lecture.instructor}</p>
                            <p>Price: ${lecture.price}</p>
                            <p>Available Seats : {lecture.availableSeats}</p>
                            <button className="btn btn-outline btn-info py-1">Select</button>
                        </div>
                    </div>)
            }

        </section>
    );
};

export default Classes;