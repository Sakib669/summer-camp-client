import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const [data, setData] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure('/payment-details')
            .then(res => setData(res.data));
    }, []);
    console.log(data);
    return (
        <section>
            <div className="overflow-x-auto mx-40 min-h-screen">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Lecture Name</th>
                            <th>Instructor</th>
                            <th>Transaction ID</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody className='items-center'>
                        {
                            data.map((data, index) =>
                                <tr key={data._id}>
                                    <th>{index + 1}</th>
                                    <td>{data.lecture.name}</td>
                                    <td>{data.lecture.instructor}</td>
                                    <td>{data.transactionId}</td>
                                    <td>{data.date}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PaymentHistory;