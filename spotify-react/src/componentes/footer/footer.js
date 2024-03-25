import './footer.css'
const Footer = () => {
    return (
        <footer className="rodape">
        <div className="rodape__content">
            <span className="texto title">Testar Spotify Premium de graça</span>
            <span className="texto subtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</span>
        </div>
        <button className="rodape__button">
            <span className="texto button-title">Inscreva-se grátis</span>
        </button>
    </footer>
    );
}

export default Footer;