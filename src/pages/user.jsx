import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Slice/UsersSlice';
import bguser from "../images/bg-image-10.jpg";
import { useParams } from 'react-router-dom';
import "./user.css";
import kofealmaq from "../images/1_coffee-n.webp"
import { FaGlobe,FaFacebook, FaTelegramPlane ,FaTiktok} from "react-icons/fa"
import { SlSocialYoutube } from "react-icons/sl"

const User = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.items);

    useEffect(() => {dispatch(fetchUsers());
     }, [dispatch]);

    const user = users.find(user => user.id === id);
    if (!user) {
        return <div className="user-not-found">Istifadeci tapilmadi!</div>;
    }

    return (
        <div className="profile-container">
            <div className="user-background">
                <img src={bguser} alt="User background" className="background-img"/>
                <div className="profile-content">
                    <div className="profile-header">
                        <img src={user.image} alt={`${user.name}`} className="profile-img"/>
                        <div>
                            <h1 className="profile-name">{user.name}</h1>
                            <p className="profile-info">{user.info}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-details">
                <div className="profile-card">
                    <img src={kofealmaq} alt="Subscribe card" className="card-img"/>
                </div>
                <div className="profile-info">
                    <h1>Haqqinda</h1>
                    <p>{user.title}</p>
                    <div className="supporter-info">
                        {user.supporter}<span>Destekci</span>
                    </div>
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
    );
};

export default User;
