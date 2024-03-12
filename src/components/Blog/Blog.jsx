import React from 'react';
import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';


const Blog = ({blog, handleAddToBookmarks}) => {
  const {title, cover_image, author_profile_image, author_name, posted_date, reading_time, hashtag} = blog;
  return (
    <div className='mb-10'>
      <img src={cover_image} alt={`cover picture for ${title}`} />
      
      <div className='flex justify-between items-center '>
      <div className='flex items-center gap-5'>
    <img src={author_profile_image} className='w-10' />
    <div>
    <h3 className='font-bold text-xl'>{author_name}</h3>
    <p>{posted_date}</p>
    </div>
      </div>
      <div className='flex gap-2 items-center'>
        <p>{reading_time} min read</p>
        <button className='text-2xl text-red-400' onClick={()=> handleAddToBookmarks(blog)}>
        <CiBookmark></CiBookmark>
        </button>
      </div>
      </div>
      <h2 className='text-4xl font-bold mb-3'>{title}</h2>
      <div>
        { 
      hashtag.map((has, index) => <span key={index}><a href='#'> #{has} </a></span>)
      }
      </div>
      <a href="#" className='text-blue-700 underline font-bold'>Mark as read</a>
      
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired ,
  handleAddToBookmarks: PropTypes.func
}
export default Blog;