import { useState } from 'react';
import './index.css'

const Nursery=()=>{
    const [nurseryProducts] = useState([
        { uniqueNo: 1, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729367123/Ellipse_68_ywrh1r.png"},
        { uniqueNo: 2, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368528/Ellipse_69_mnab9k.png"},
        { uniqueNo: 3, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368526/Ellipse_70_puvney.png"},
        { uniqueNo: 4, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368526/Ellipse_71_t2wm8j.png"},
        { uniqueNo: 5, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368525/Ellipse_62_xanwzz.png"},
        { uniqueNo: 6, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368523/Ellipse_63_wbnupv.png"},
        { uniqueNo: 7, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729367123/Ellipse_68_ywrh1r.png"},
        { uniqueNo: 8, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368526/Ellipse_70_puvney.png"},
        { uniqueNo: 9, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368523/Ellipse_63_wbnupv.png"},
        { uniqueNo: 10, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729367123/Ellipse_68_ywrh1r.png"},
        { uniqueNo: 11, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368528/Ellipse_69_mnab9k.png"},
        { uniqueNo: 13, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368526/Ellipse_70_puvney.png"},
        { uniqueNo: 14, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368526/Ellipse_71_t2wm8j.png"},
        { uniqueNo: 15, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368525/Ellipse_62_xanwzz.png"},
        { uniqueNo: 16, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368523/Ellipse_63_wbnupv.png"},
        { uniqueNo: 17, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729367123/Ellipse_68_ywrh1r.png"},
        { uniqueNo: 18, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368526/Ellipse_70_puvney.png"},
        { uniqueNo: 19, name: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum", image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729368523/Ellipse_63_wbnupv.png"}
    ]);

    return(
        <div className="nursery-main-container">
            <h3>Nursery</h3>
            <div className="nursery-image-container">
                {nurseryProducts.map((product) => (
                    <div className="nursery-imgages">
                    <img key={product.uniqueNo} src={product.image} alt={product.uniqueNo} className="image"/>
                    <p>{product.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Nursery;