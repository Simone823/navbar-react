// import react usestate
import React, {useState} from 'react';

function Header() {

    // use state hamburger menu
    const [hambMenu, setHambMenu] = useState(false);

    // toggle hamb menu
    const toggleHambMenu = (e) => {
        e.preventDefault();

        // set hamb menu
        setHambMenu(!hambMenu);
    }

    return (
        // header
        <header className='shadow fixed-top'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    {/* nav brand */}
                    <a className="navbar-brand fw-bold" href="/">
                        <img src={require('../assets/img/nav-brand.png')} alt="Logo" width="40" height="40" className="d-inline-block align-text-center me-3"/>
                        Dev Bar
                    </a>

                    {/* btn hamburger menu */}
                    <button onClick={toggleHambMenu} className="navbar-toggler border-0" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* collapse nav links */}
                    <div className={`collapse navbar-collapse pt-3 pt-lg-0 ${hambMenu ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bolder" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bolder" href="/">Chi Siamo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bolder" href="/">Progetti</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bolder" href="/">Contattaci</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header