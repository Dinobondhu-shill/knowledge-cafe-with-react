import React from 'react';
import PropTypes from 'prop-types';
import SingleMark from '../../single-bookmarks/SingleMark';



const Bookmark = ({bookmarks}) => {
  
  return (
    <div className='w-1/3'>
      <div className='bg-slate-200 text-center font-bold rounded-2xl py-4 px-2  text-[#6047EC]'>
    Spent time on read : {}
      </div>
      <div className='bg-slate-200 py-3 px-4 mt-5 rounded-lg'>
      <h5 className='font-bold mb-5'>Bookmarked Blogs: {bookmarks.length}</h5>
      {
        bookmarks.map(bookmark =>
          <SingleMark key={bookmark.id} bookmark={bookmark}></SingleMark>
        )
      }
      </div>
    </div>
  );
};


Bookmark.propTypes = {
  bookmarks: PropTypes.array
}
export default Bookmark;