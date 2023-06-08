import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Banner3 from './Banner3';

const Home = () => {
    return (
        <section className="md:mx-20">
            <Banner/>
            <Banner2/>
            <Banner3/>
        </section>
    );
};

export default Home;