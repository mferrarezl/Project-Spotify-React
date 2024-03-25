import React, { useEffect } from 'react';
import './result-search.css';

const Search = () => {
  useEffect(() => {
      const resultArtist = document.getElementById("result-artist");
      const playlistContainer = document.getElementById("result-playlists");
      const searchInput = document.getElementById("search-input");

      function requestApi(searchTerm) {
        fetch(`http://localhost:3001/artists?name_like=${searchTerm}`)
          .then((response) => response.json())
          .then((results) => displayResults(results));
      }

      function displayResults(results) {
        hidePlaylists();
        const artistImage = document.getElementById("artist-img");
        const artistName = document.getElementById("artist-name");

        results.forEach((element) => {
          artistImage.src = element.urlImg;
          artistName.innerText = element.name;
        });
        resultArtist.classList.remove("hidden");
      }

      function hidePlaylists() {
        playlistContainer.classList.add("hidden");
      }

      searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm === "") {
          resultArtist.classList.add("hidden");
          playlistContainer.classList.remove("hidden");
          return;
        }
        requestApi(searchTerm);
      });
  }, []);

  return (
    <div id="result-artist" className="hidden">
      <div className="grid-container">
        <div className="artist-card" id="">
            <div className="card-img">
                <img id="artist-img" alt="" className="artist-img" />
                <div className="play">
                    <span className="fa fa-solid fa-play"></span>
                </div>
            </div>
            <div className="card-text">
                <a title="Foo Fighters" className="vst" href="">
                    <span className="artist-name" id="artist-name"></span>
                    <span className="artist-categorie">Artista</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Search;