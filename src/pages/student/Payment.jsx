const stripePromise = loadStripe('pk_test_51N7cRyE9XlTLe8gVxqiVH0Z3eYJ0cFDl0TbC1JLSFkn1iAgaimPgczFEhQqzRWaG2bwBL6tO7f634a378vIwPoY600WCBJvdby');
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const Payment = () => {
    const {id} = useParams();
    const [axiosSecure] = useAxiosSecure();
    const [price, setPrice] = useState(null);
    const [lectureId, setLectureId] = useState(null);
    const [lectureId2, setLectureId2] = useState(null);
    axiosSecure(`http://localhost:5000/classesCart/${id}`)
    .then(res => {
        setPrice(res.data?.lecture?.price);
        setLectureId2(res.data?.lecture);
        setLectureId(res.data?._id);
    })

    return (
        <section className='mx-40 min-h-screen'>
            <Elements  stripe={stripePromise}>
                <CheckoutForm id={id} lecture={lectureId2} lectureId={lectureId} price={price} />
            </Elements>
        </section>
    );
};

export default Payment;