
import { fetchUsers } from '../Slice/UsersSlice';
import  "./userslist.css";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaGlobe,FaFacebook, FaTelegramPlane ,FaTiktok} from "react-icons/fa"
import { SlSocialYoutube } from "react-icons/sl"


const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.items);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  
  const renderSocialIcons = (user) => {
    return (
      <>
        {user.facebook && <FaFacebook className="icon-facebook" />}
        {user.youtube && <SlSocialYoutube className="icon-youtube" />}
        {user.Socialglobe && <FaGlobe className="icon-socialglobe" />}
        {user.tiktok && <FaTiktok className="icon-tiktok" />}
        {user.telegram && <FaTelegramPlane className="icon-telegram" />}
      </>
    );
  };

 
  const renderUserCards = (users) => {
    return users.map((user) => (
      <div key={user.id} className="user-card">
        <img src={user.image} alt={user.name} />
        <div className="user-info">
          <h3>{user.name}</h3>
          <p>{user.title || user.info}</p>
          <span>{user.supporter} Destekçi</span>
          <div className="social-icons">
            {renderSocialIcons(user)}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="user-list">
      {loading ? <p>Yükleniyor...</p> : renderUserCards(users)}
    </div>
  );
};

export default UsersList;




