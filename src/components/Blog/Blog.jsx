import React from 'react';
import PropTypes from 'prop-types';


const Blog = ({blog}) => {
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
      <div>
        <p>{reading_time} min read</p>
      </div>
      </div>
      <h2 className='text-4xl font-bold mb-3'>{title}</h2>
      <div>#{ hashtag[0] } #{hashtag[1]}</div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}
export default Blog;