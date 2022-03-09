import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css'

function Navbar() {
    return(
        <header className="d-flex align-items-center">
            <nav className="container">
                <div className="d-flex justify-content-between align-items-center text-white dsmovie-nav-content">
                    <h1 className="m-0 fw-bold">DSMovie</h1>
                    <a href="https://github.com/PrinceHard">
                        <div className="d-flex dsmovie-content-link align-items-center">
                            <GithubIcon />
                            <p className="m-0 ms-2">/PrinceHard</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;