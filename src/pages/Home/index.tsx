import { Link } from 'react-router-dom';
import { ReactComponent as Mapa } from 'assets/img/mapa.svg';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <br />
            <Mapa />
            <br />
            <Link to="/cepsearch">
                <button className="btn btn-primary btn-lg start-button">Iniciar</button>
            </Link>
        </div>
    );
}

export default Home;
