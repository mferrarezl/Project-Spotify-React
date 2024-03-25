import './main.css';
import Header from "../header/header.js";
import Cards from "../cards/cards.js";
import Search from '../search/search.js';
import Greeting from '../greeting/greeting.js';

const Main = () => {
    return (
        <div className="main__container">

        <Header/>

        {/* PLAYLIST */}
            <div class="playlist-container">
                <div id="result-playlists">

                    {/* LIST ITEM 1 */}
                    <div class="offer__scroll-container">

                        <Greeting/>
                        
                        <Cards/>

                    </div>
                </div>
                
                    <Search/>
                
            </div>
        </div> 
    );
}

export default Main;