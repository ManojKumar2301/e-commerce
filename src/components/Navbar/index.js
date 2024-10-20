import './index.css'
const Navbar = () => {
    return (

        <nav className="nav-container">
            <div className="logo">
                <div>
                    <img
                        src="https://res.cloudinary.com/dbedhqjpl/image/upload/v1729274654/image_55_y4hrop.png"
                        alt="website logo"
                        className="website-logo" />
                </div>
                <div>
                    <p className="logo-name">Chaperone</p>
                </div>
            </div>
            <div class="nav-item-names">
                <ul className="ul-nav" type="none">
                    <li className="nav-items">Home</li>
                    <li className="nav-items plant">Plants & Pots</li>
                    <li className="nav-items">Tools <select className="s"></select></li>
                    <li className="nav-items">Our Services <select className="s"></select></li>
                    <li className="nav-items">Blog</li>
                    <li className="nav-items">Our Story</li>
                    <li className="nav-items">FAQs</li>

                </ul>
            </div>

            <div className="profile-items">
                <div className="profile">
                    <div>
                        <img src="https://res.cloudinary.com/dbedhqjpl/image/upload/v1729277247/account_profile_cjzjni.png" alt="profile" className="profile-image" />
                    </div>
                    <p>My Profile</p>
                </div>
            </div>
            <div className="cart-items">
                <div className="cart">
                    <div className="cart-no-of-items">
                        <p>3</p>
                    </div>
                    <img src="https://res.cloudinary.com/dbedhqjpl/image/upload/v1729277020/image_2_wculcd.png" alt="cart" className="cart-image" />
                    <p>Cart</p>
                </div>
            </div>

        </nav>

    )
}

export default Navbar;