import React, { useState } from "react";
import ProductCard from "../ProductCard";
import Filter from "../Filter";

import './index.css'
import AddToCartModal from "../AddToCartModal";


const ProductListing = () => {
    const [products] = useState([
        { uniqueNo: 1, name: "Monstera", price: 299, image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729410484/e1ce63ff429a0c018fd6e2e5dd614458_pgjbg0.png" },
        { uniqueNo: 2, name: "Monstera", price: 299, image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729410826/7973d62829a030074ad8b6ad34_seziel.png" },
        { uniqueNo: 3, name: "Monstera", price: 299, image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729410826/daa994fdb511faa82ea79a5ef58fbb1a_mniblb.png" },
        { uniqueNo: 4, name: "Monstera", price: 299, image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729410484/e1ce63ff429a0c018fd6e2e5dd614458_pgjbg0.png" },
        { uniqueNo: 5, name: "Monstera", price: 299, image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729410826/7973d62829a030074ad8b6ad34_seziel.png" },
        { uniqueNo: 6, name: "Monstera", price: 299, image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729410826/daa994fdb511faa82ea79a5ef58fbb1a_mniblb.png" },
        { uniqueNo: 7, name: "Monstera", price: 299, image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729410484/e1ce63ff429a0c018fd6e2e5dd614458_pgjbg0.png" },
        { uniqueNo: 8, name: "Monstera", price: 299, image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729410826/7973d62829a030074ad8b6ad34_seziel.png" },
        { uniqueNo: 9, name: "Monstera", price: 299, image: "https://res.cloudinary.com/dbedhqjpl/image/upload/v1729410826/daa994fdb511faa82ea79a5ef58fbb1a_mniblb.png" }
    ]);


    const [modalShow, setModalShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState("");

    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setModalShow(true);
    };

    const handleClose = () => setModalShow(false);

    return (
        <div className="filter-product-list">
            <Filter />
            <h1>Product Listing</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.name}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
            <AddToCartModal
                show={modalShow}
                handleClose={handleClose}
                product={selectedProduct}
                
            />

        </div>
    );
};

export default ProductListing;
