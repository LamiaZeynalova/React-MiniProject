import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../Slice/UsersSlice';
import UsersList from '../components/userslist';
import "./uzvler.css";
import bguser from "../images/bg-image-10.jpg";

const Uzvlerimiz = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.items);
    const loading = useSelector((state) => state.users.loading);
    const [category, setCategory] = useState('Hamısı'); 

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const filteredUsers = category === 'Hamısı' ? users : users.filter(user => user.category === category);

    return (
        <>
            <div className='users-container'>
                <div className='userbg-img'>
                    <img src={bguser} alt='User background' style={{ height: "400px", width: "100%" }} />
                    <div className='bg-content'>
                        <div className='bg-head'>
                            <h1>Üzvlərimiz</h1>
                           
                            <button className='offer-btn'>🎉 Yaradıcı</button>
                        </div>
                        <h2>Siz də öz yaradıcılıq fəaliyyətinizdən qazanan şəxslərdən olun.</h2>
                    </div>
                </div>
               
                <div className='search'>
                <select onChange={handleCategoryChange} value={category}>
                                <option value="hamısı">Hamısı</option>
                                <option value="bloger">Bloger</option>
                                <option value="stremwork">Stremwork</option>
                                <option value="yayıncı">Yayıncı</option>
                                <option value="incəsənət">İncəsənət</option>
                                <option value="sosial Media">Sosial Media</option>
                            </select>
                </div>
                <div>
                   <UsersList users={filteredUsers} />
                </div>
            </div>
        </>
    )
}

export default Uzvlerimiz;
