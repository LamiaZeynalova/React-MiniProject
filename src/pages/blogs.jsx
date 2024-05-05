import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import './blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3002/blogs');
        setBlogs(response.data);
        setFilteredBlogs(response.data); 
      } catch (error) {
        console.error('Failed to fetch blogs', error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const filterBlogs = () => {
      const filtered = blogs.filter(blog =>
        (blog.title?.toLowerCase().includes(searchText.toLowerCase())) ||
        (blog.info?.toLowerCase().includes(searchText.toLowerCase()))||
        (blog.owner?.toLowerCase().includes(searchText.toLowerCase()))

      );
      setFilteredBlogs(filtered);
    };

    filterBlogs();
  }, [searchText, blogs]);

  return (
    <>
    <div className='blogs-bg'>
 </div>
    <div className="blogs-container">
    
      <div className="blogs-header">
        <div className="title-block">
          <h1 className='blogs-title'>🚀 Blog Yazilari</h1>
          <p className='blogs-description'>İstənilən mövzuda yazıçıların hekayələrini, düşüncələrini və təcrübələrini kəşf edin.</p>
        </div>
        <div className='search-block'>
          <input className='search-input' placeholder='Search...' value={searchText}
            onChange={(e) => setSearchText(e.target.value)} type="text" />
          <div className='search-icon'><IoSearch /></div>
          <button className="filter-button"><CiFilter /> Filter</button>
        </div>
      </div>

      <div className='blog-grid'>
        {filteredBlogs.map((blog, index) => (
          <Link to={`/blogs/${blog.id}`} key={index} className='blog-card'>
            <div className="blog-image">
              <img src={blog.image} alt="" />
            </div>
            <div className="blog-details">
              <h1 className='blog-title'>{blog.title}</h1>
              <p className='blog-text'>{blog.info}</p>
              <div className='blog-info'>
                <img className='creator-image' src={blog.ownerimg} alt="" />
                <span className='creator-name'> {blog.owner}</span>
                <div className="time-info">
                  <FaRegEye />
                  {blog.review}
                  <IoTimeOutline />
                  {blog.time}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
};

export default Blogs;
