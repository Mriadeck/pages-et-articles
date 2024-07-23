import React from 'react';
import { Link } from 'react-router-dom';
import img from './images/girafe_kenya.jpg';
import img1 from './images/maison_japon.jpg';
import img2 from './images/avion_allemagne.jpg';

const posts = [
{ id: 1, title: "Voyage en Afrique",imagedegarde:img, slug: "premier-article"},
{ id: 2, title: "Voyage en Asie",imagedegarde:img1, slug: "deuxieme-article" },
{ id: 3, title: "Voyage en Europe",imagedegarde:img2, slug: "troisieme-article" },
// Ajoutez d'autres articles ici
];
const Home = () => {
    return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">MY <span className='text-blue-700'>BLOG</span></h1>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius neque at sapien vestibulum ultrices. Pellentesque habitant morbi tristique senectus.</p>
        <p className='text-center text-blue-700 font-extrabold'>_______________________</p>
        <br></br>
        <div className='flex flex-row'>
            {posts.map(post => (
                <div key={post.id} className="mx-2  border-2 drop-shadow-md hover:bg-sky-100 w-1/3">
                    <Link to={`/post/${post.slug}`} className="">
                    <img src={post.imagedegarde}></img>
                    <br></br>
                    <p className="font-bold">{post.title}</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius neque at sapien vestibulum ultrices</p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
    );
    };
export default Home;