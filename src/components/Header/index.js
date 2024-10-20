import Navbar from '../Navbar/index.js';
import Nursery from '../Nursery/index.js';
import Search from '../SearchBar/index.js';

import './index.css'


const Header = () => {
    return (
        <header className="header" >

            <div className="nav-upper">
                <div className="free">
                <p >Free Shipping on orders above 999/-</p>
                </div>
                <div className="number">
                    <p >Call us on: +91 98768 05120</p>
                </div>

            </div>

            <Navbar />
            <Search />
            <div>
                <div>
                    <button>Plants</button>
                    <button>Pots</button>
                </div>
                <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
            </div>
            <Nursery />
        </header>
    )
}

export default Header;