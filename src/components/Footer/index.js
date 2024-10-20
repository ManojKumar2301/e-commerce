import './index.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className="footer-details">
                    <div className="footer-subscribe-container">
                        <p className='sub'>SUBSCRIBE TO OUR <br /> NEWSLETTER</p>
                        <ul className="footer-subscribe">
                            <li>Lorem Ipsum Dolor Sit Amet. Aut Ipsam <br />
                                Illum Et Nostrum Quidem Aut Necesbus <br /> Enim</li>

                            <li><input type="text" placeholder="Enter Your Email Address" /></li>
                            <br />
                            <button >SUBSCRIBE</button>
                        </ul>
                    </div>
                    <div >
                        <p>ABOUT US</p>

                        <ul className='footer-about'>
                            <li>Our Story</li>
                            <li>Blogs</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                            <li>Help & Support</li>
                        </ul>
                    </div>
                    <div >
                        <p>OUR SERVICES</p>

                        <ul className='footer-our'>
                            <li>Book Maali</li>
                            <li>Plant Day Care</li>
                            <li>Rent Plants</li>
                            <li>Plants & Pots</li>
                            <li>Gardening Tools</li>
                        </ul>
                    </div>
                    <div >
                        <p>USEFUL LINKS</p>

                        <ul className='footer-useful'>
                            <li>My Account</li>
                            <li>Orders & Returns</li>
                            <li>Track Order</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Return, Refund &<br /> Replacement Policy</li>
                        </ul>
                    </div>
                    <div className='footer-get-in'>
                        <p>GET IN TOUCH</p>
                        <p>Address: F-262, First Floor,<br /> Sushant Lok Phase-III,<br /> Sector-57, Gurgaon,<br /> Haryana, India 122003</p>

                        <p>Call:<br />+919958287272</p>

                        <p>Email:<br />care@chaperoneplants.com</p>
                    </div>
                </div>
                <div>
                    <h2>CHAPERONE</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
                    <br />
                </div>
                <h3>Folow us on</h3>
                <ul>
                    <li>
                        <img src="https://res.cloudinary.com/dbedhqjpl/image/upload/v1729283021/image_84_fxvi5w.png" alt="insta" className="follow-us-img" />
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/dbedhqjpl/image/upload/v1729283028/image_85_e8cuqd.png" alt="facebook" className="follow-us-img" />
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/dbedhqjpl/image/upload/v1729283035/image_86_kktisv.png" alt="threads" className="follow-us-img" />
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/dbedhqjpl/image/upload/v1729283045/image_87_ixi1dn.png" alt="youtube" className="follow-us-img" />
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/dbedhqjpl/image/upload/v1729283056/image_88_s4e9al.png" alt="linkedin" className="follow-us-img" />
                    </li>
                </ul>
                <br />
                <hr />
                <br />
                <p>© 2023, chaperone.com All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;