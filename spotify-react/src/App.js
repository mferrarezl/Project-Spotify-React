import './styles/reset.css';
import './styles/vars.css'
import './styles/index.css';
import './componentes/cards/cards.css'

import Sidebar from './componentes/sidebar/sidebar.js';
import Footer from './componentes/footer/footer.js';
import Main from './componentes/main/main.js';

import './styles/media-queries.css'

function App() {
  return (
    <div>
      <Sidebar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
