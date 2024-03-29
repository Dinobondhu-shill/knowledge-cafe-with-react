
import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {
  
const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);


const handleAdditionMinute = time =>{

  setReadingTime(readingTime+time);
}

const handleAddToBookmarks = blog =>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
}


  return (
    <>
      <Header></Header>
      <div className='md:flex lg:flex md:gap-5 lg:gap-6 mx-72 mt-8'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks} handleAdditionMinute={handleAdditionMinute}></Blogs>
      <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
      </div>
    </>
  )
}

export default App
