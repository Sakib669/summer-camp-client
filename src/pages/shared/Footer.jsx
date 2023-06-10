import React from 'react';

const Footer = ({toggle}) => {
    return (
        <footer className={`flex ${toggle ? 'bg-base-300' : 'bg-slate-500 text-white'}`}>
            <div className='mx-auto py-20 text-center'>
            <img src="https://aparsclassroom.com/HSC-Full-Course/assets/images/1.png" className="w-44 mb-4" />
            <p>© 2018-2023 Apar's Classroom
                <br />
                All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;