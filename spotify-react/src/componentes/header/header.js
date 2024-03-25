import './header.css';
import arrowRight from '../../assets/icons/small-right.png';
import arrowLeft from '../../assets/icons/small-left.png'
import searchIcon from '../../assets/icons/search.png'

const Header =  () => {
    return (
        <nav className="header__navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <img src={arrowLeft} alt="Seta esquerda" />
                    </button>
                    <button className="arrow-right">
                        <img src={arrowRight} alt="Seta direita" />
                    </button>
                </div>

                <div className="header__search">
                    <img src={searchIcon} alt="" />
                    <input id="search-input" type="text" maxLength="100" placeholder="O que você quer ouvir?" />
                </div>

                <div className="header__login">
                    <button className="signup">
                        <span>Inscrever-se</span>
                    </button>
                    <button className="signin">
                        <span>Entrar</span>
                    </button>
                </div>
            </nav>
    );
}

export default Header;