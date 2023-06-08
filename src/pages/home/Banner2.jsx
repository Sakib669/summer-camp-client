import React from 'react';

const Banner2 = () => {
    return (
        <article className=' my-10'>
            <h3 className='text-5xl font-bold text-center mb-10 text-primaryClr'>Popular Classes</h3>
           <figure className='grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-40 mx-5'>
           <img className='shadow-neutral-400 shadow-2xl' src="https://i.postimg.cc/HscpBgCX/medical.jpg"  />
           <img className='shadow-neutral-400 shadow-2xl' src="https://i.postimg.cc/fL8wgWLj/foundation.jpg" />
           <img className='shadow-neutral-400 shadow-2xl' src="https://i.postimg.cc/3RxhpMBy/varisty.jpg" />
           <img className='shadow-neutral-400 shadow-2xl' src="https://i.postimg.cc/xT0vz6rw/chem.jpg" />
           </figure>
        </article>
    );
};

export default Banner2;