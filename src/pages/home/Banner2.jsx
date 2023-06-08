import { SunnyMorning } from 'moving-letters'



const Banner2 = () => {
    const links = [
        "https://i.postimg.cc/HscpBgCX/medical.jpg",
        "https://i.postimg.cc/fL8wgWLj/foundation.jpg",
        "https://i.postimg.cc/3RxhpMBy/varisty.jpg",
        "https://i.postimg.cc/xT0vz6rw/chem.jpg"
    ]
    return (
        <article className=' my-10'>
            
            <span className='font-bold text-center mb-10 '><SunnyMorning  text={`Popular Classes`}/></span>
            <figure className='grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-40 mx-5'>
                {
                    links.map((link, index) =>
                        <img key={index} className='shadow-neutral-400 shadow-2xl' src={link} />)
                }
            </figure>
        </article>
    );
};

export default Banner2;