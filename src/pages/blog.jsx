import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './blog.css';
import { FaRegEye, } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FiWatch} from "react-icons/fi";
import { FaGlobe,FaFacebook, FaTelegramPlane ,FaTiktok} from "react-icons/fa"
import { SlSocialYoutube } from "react-icons/sl"

const Blog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3002/blogs/${id}`)
            .then(response => {
                setBlog(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch blog', err);
                setError('Failed to load the blog. Please try again later.');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!blog) return <div>Blog not found!</div>;

    return (
        <div className='blog-background'>
            <div className="blog-banner">
            <img src="https://kofe.al/assets/images/bg/bg-image-10.jpg" style={{ "width": "100%", "height": "100%" }} alt="" />
                <div className="overlay-content">
                    <div className="author-info">
                        <img src={blog.ownerimg} alt="Author" className="author-image" />
                        <span className="author-name">{blog.owner}</span>
                    </div>
                    <div className="blog-stats">
                        <span className="views-count"><FaRegEye />{blog.review}</span>
                        <span className="post-time"><IoTimeOutline />{blog.time}</span>
                        <span className="reading-time"><FiWatch />{blog.readtime} min read</span>
                    </div>
                    <h1 className='blog-title'>{blog.title}</h1>
                    <p className='blog-description'>{blog.info}</p>
                </div>
               
            </div>
            <div className='blog-content'>
            <div>
                   <Link to= {blog.link} ><img src={blog.image} alt="Blog banner" className="blog-img" /></Link> 
                    </div>
               <div className='bloginfo'>
               <p className="blog-text">{blog.info}</p>
                <p className='melumat'> Azerbaycan dilinde sesli nagil dinle/ Nagil / Hekaye / Nağıl / Hekayə / Öyrədici / Oyrədici / Usaq kanali / Uşaq kanalıEtiketlər: nağıl, nağıllar, nagil, nagillar Azərbaycan dilində nağıllar, Azerbaycan dilinde nagillar, öyrədici uşaq kanalı, oyredici usaq kanalı, Мультфильмы на азербайджанском языке, Поучительные мультфильмы на Азербайджанском языке, Azerbaijani fairy tales, Azerbaijani animated films for children,  çizgi film, cizgi film, Azerbaycan masalları, Azərbaycan nağılları, qısa nağıl, qisa nagil, evcik, siçan, hophop siçan, qurbağa, qurqur qurbağa, dovşan, qaçağan dovşan,  tülkü, şələquyruq tülkü, canavar, boz canavar, ayı, əyripəncə ayı</p>
                <div  className='iconss'>
                       <span><FaFacebook/> </span> 
                       <span><FaGlobe/></span> 
                       <span><FaTiktok/></span>
                       <span><FaTelegramPlane/> </span> 
                       <span><FaGlobe/></span> 
                       <span><SlSocialYoutube/></span> 
                    </div>
               </div>
            </div>
            
        </div>
    )
}

export default Blog;
