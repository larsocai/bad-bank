import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {
	return (
		<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">BadBank</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/createaccount/">Create Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login/">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/deposit/">Deposit</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/withdraw/">Withdraw</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/balance/">Balance</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/alldata/">All Data</Link>
                        </li>                        
                    </ul>
                </div>
            </div>
        </nav>
		</>
	);
}

export default NavBar;
