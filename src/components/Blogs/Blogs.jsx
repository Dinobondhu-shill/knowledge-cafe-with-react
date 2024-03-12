import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmarks, handleAdditionMinute}) => {

  const [blogs, setBlogs] = useState([]);

useEffect(()=>{
  fetch('blogs.json')
  .then(res=> res.json())
  .then(data=> setBlogs(data))
}, [])
  return (
    <div className="w-2/3">
     
      {
        blogs.map(blog => <Blog 
          key={blog.id}
          blog={blog}
          handleAddToBookmarks ={handleAddToBookmarks}
          handleAdditionMinute ={handleAdditionMinute}
          ></Blog>)
      }
    </div>
  );
};


Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func,
  handleAddToBookmarks: PropTypes.func
}
export default Blogs;