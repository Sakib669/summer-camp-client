import React from 'react';

const Banner3 = () => {
    return (
        <article className='my-10'>
            <h3 className='text-5xl font-bold text-center mt-40 text-primaryClr'>Popular Instructors</h3>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-20 gap-y-40 md:mx-40 mx-5 mt-40'>
                <div className="card relative bg-slate-200 shadow-2xl">
                    <div className="avatar absolute -top-1/3 left-10 bg-slate-200 rounded shadow-neutral-500 shadow-inner p-3">
                        <div className="w-24 rounded">
                            <img src="https://i.postimg.cc/nrrW1QtD/247338684-677337763233136-3287452107768516666-n.jpg" />
                        </div>
                    </div>
                    <div className="card-body mt-10">
                        <h2 className="card-title">Md Nazmus Sakib</h2>
                        <p>Chemistry Dept. Dhaka University
                            <br />
                            CEO, ACS Group
                        </p>
                        <p>Instructor of Chemistry</p>
                    </div>
                </div>
                <div className="card relative bg-slate-200 shadow-2xl">
                    <div className="avatar absolute -top-1/3 left-10 bg-slate-200 rounded shadow-neutral-500 shadow-inner p-3">
                        <div className="w-24 rounded">
                            <img src="https://i.postimg.cc/0NBqsr4C/25487446-2078715289017118-575051190755419269-o.jpg" />
                        </div>
                    </div>
                    <div className="card-body mt-10">
                        <h2 className="card-title">Abhi Datta Tushar</h2>
                        <p>BSc in Mechanical Engineering, BUET
                            <br />
                            Chief Operating Officer, ACS Group
                            <br />
                            Founder, RhomBus Parallel Science Hub</p>
                        <p>Instructor of Mathematics
                        </p>
                    </div>
                </div>
                <div className="card relative bg-slate-200 shadow-2xl">
                    <div className="avatar absolute -top-1/3 left-10 bg-slate-200 rounded shadow-neutral-500 shadow-inner p-3">
                        <div className="w-24 rounded">
                            <img src="https://i.postimg.cc/DychPq8r/Screenshot-2021-09-20-174533.png" />
                        </div>
                    </div>
                    <div className="card-body mt-10">
                        <h2 className="card-title">Hasnat Shuvro
                        </h2>
                        <p>Shaheed Suhrawardy Medical College
                            <br />
                            (Undergraduate)</p>
                        <p>Instructor of Biology

                        </p>
                    </div>
                </div>
                <div className="card relative bg-slate-200 shadow-2xl">
                    <div className="avatar absolute -top-1/3 left-10 bg-slate-200 rounded shadow-neutral-500 shadow-inner p-3">
                        <div className="w-24 rounded">
                            <img src="https://i.postimg.cc/dVSqqWkd/Screenshot-2021-11-19-001737.png" />
                        </div>
                    </div>
                    <div className="card-body mt-10">
                        <h2 className="card-title">Sanjoy Chakraborty

                        </h2>
                        <p>Mechanical Engineering , BUET</p>
                        <p>Instructor of Chemistry
                        </p>
                    </div>
                </div>
                <div className="card relative bg-slate-200 shadow-2xl">
                    <div className="avatar absolute -top-1/3 left-10 bg-slate-200 rounded shadow-neutral-500 shadow-inner p-3">
                        <div className="w-24 rounded">
                            <img src="https://i.postimg.cc/MHwMt29g/Sharoare-Hosan-Emonjpeg.jpg" />
                        </div>
                    </div>
                    <div className="card-body mt-10">
                        <h2 className="card-title">SHAROARE HOSAN EMON
                        </h2>
                        <p>Biomedical Engineering , BUET</p>
                        <p>Instructor of Physics
                        </p>
                    </div>
                </div>
                <div className="card relative bg-slate-200 shadow-2xl">
                    <div className="avatar absolute -top-1/3 left-10 bg-slate-200 rounded shadow-neutral-500 shadow-inner p-3">
                        <div className="w-24 rounded">
                            <img src="https://i.postimg.cc/SRLt7Wwb/Screenshot-2021-10-02-214544.png" />
                        </div>
                    </div>
                    <div className="card-body mt-10">
                        <h2 className="card-title">Mahir Asif
                        </h2>
                        <p>Former Lecturer, UDVASH
                            <br />
                            Founder, Maths with Mahir Asif</p>
                        <p>Instructor of Mathematics
                        </p>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default Banner3;