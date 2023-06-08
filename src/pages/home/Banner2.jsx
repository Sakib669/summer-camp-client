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
            
            <h3 className='font-bold text-center mb-10 '><SunnyMorning  text={`Popular Classes`}/></h3>
            <figure className='grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-40 mx-5'>
                {
                    links.map((link) =>
                        <img className='shadow-neutral-400 shadow-2xl' src={link} />)
                }
            </figure>
        </article>
    );
};

export default Banner2;