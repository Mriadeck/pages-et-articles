import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import img from './images/girafe_kenya.jpg';
import img1 from './images/maison_japon.jpg';
import img2 from './images/avion_allemagne.jpg';


const posts = {
 "premier-article": `
Girafe du Kenya, Afrique

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius neque at sapien vestibulum ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ultrices ultrices orci mattis pretium. Praesent pellentesque purus posuere dui fermentum, nec congue risus hendrerit. Morbi varius risus ut nisl cursus porta. Aliquam turpis ligula, consectetur et facilisis vitae, hendrerit et nisl.    `,

 "deuxieme-article": `
Maison Japonaise, Asie

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius neque at sapien vestibulum ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ultrices ultrices orci mattis pretium. Praesent pellentesque purus posuere dui fermentum, nec congue risus hendrerit. Morbi varius risus ut nisl cursus porta. Aliquam turpis ligula, consectetur et facilisis vitae, hendrerit et nisl.    `,
    "troisieme-article": `
Aeroport Allemend

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius neque at sapien vestibulum ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ultrices ultrices orci mattis pretium. Praesent pellentesque purus posuere dui fermentum, nec congue risus hendrerit. Morbi varius risus ut nisl cursus porta. Aliquam turpis ligula, consectetur et facilisis vitae, hendrerit et nisl.    `,
    // Ajoutez d'autres articles ici
};

const BlogPost = () => {

    const { slug } = useParams();

    const content = posts[slug];

    if (!content) {
    return <div>Article non trouvé</div>;
    }
    return (
        <div className="container contents mx-auto px-4 py-8">
        <Link to="/" className="text-blue-600 hover:underline mb-4 block">
            ← Retour à l'accueil
        </Link>
        <div className="prose lg:prose-xl mx-auto">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        </div>
    );
};
export default BlogPost;