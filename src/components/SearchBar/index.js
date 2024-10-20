import './index.css'

const Search=()=>{
    return(
        <div>
        <div className='search-container'>
            <img src="https://res.cloudinary.com/dbedhqjpl/image/upload/v1729323425/image_1_jdwjum.png" alt="search-image" className='search-image'/>
            <input type="search" placeholder='Search Plant' className="search" />
            <img src="https://res.cloudinary.com/dbedhqjpl/image/upload/v1729323474/image_91_lwfkgi.png" alt="search-leaf" className='search-leaf'/>
        </div>
        <hr className="search-line"/>
        </div>
    )
}

export default Search