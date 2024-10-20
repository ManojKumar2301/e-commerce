import './index.css'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div>
      <div className="product-image">
        <img className="wishList" src="https://res.cloudinary.com/dbedhqjpl/image/upload/v1729402858/Vector_iig9mm.png" alt="wishlist" />
        <img className="image" src={product.image} alt={product.name} />
        <button className="view-product-button">View Product</button>
      </div>
      <h2>{product.name}</h2>
      <p>Indoor Plant, Low maintenance</p>
      <div className="rating">
        <img src="https://res.cloudinary.com/dbedhqjpl/image/upload/v1729403327/image_10_bp0fvt.png" alt="rating" />
        <p>4.9</p>
      </div>
      <p><span className='striked-price' >₹359</span> ₹{product.price}</p>
      <div>
        <button onClick={() => onAddToCart(product)}>- Add to Cart +</button>
        <button>Buy on Rent</button>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
