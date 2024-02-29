import React from 'react'
import "./searchPost.css";
import { IoMdSearch } from "react-icons/io";

const SearchPost = () => {
  
  const handleSearch = ()=>{

  }

  const handleInput = ()=>{

  }

  return (
  
    <div>
      <form className="SearchBox" role="search"  onSubmit={handleSearch} >
        <div style={{ width: "276px", display: "flex" }} >
          <input className="SearchInput"  name='SearchName' type="search" placeholder="Search" onChange={handleInput} aria-label="Search" />
          <button className="button1" type="submit"  ><IoMdSearch style={{"height":"1.5rem",width:"2rem"}} /></button></div>
      </form>
      
    </div>
    
  )
}

export default SearchPost;
