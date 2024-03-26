  // Array of song objects. Add at least 5 songs with title, artist, and genre properties.
  const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "love me", artist: "Lil wayne", genre: "Hip-Hop" },
    { title: "Go get it", artist: "T.I", genre: "Rap" },
    { title: "HiiPower", artist: "Kendrick Lamar", genre: "Rap" },
    { title: "Starboy", artist: "The Weeknd", genre: "Pop" },
    { title: "Complaints", artist: "Quavo", genre: "Hip-Hop" },
    { title: "All the stars", artist: "SZA", genre: "R&B" }
    // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax":"Rap",
    "Rocket":"R&B",
    "Groot":"Hip-Hop"
};

function generatePlaylist(guardians, songs) {
    // Initialize an empty object to store songs grouped by genre
    const songsByGenre = {};

    // Iterate through each song in the songs array
    songs.forEach(song => {
        const genre = song.genre;

        // Check if the genre already exists as a key in the songsByGenre object
        if (!songsByGenre[genre]) {
            // If the genre doesn't exist, create an empty array for it
            songsByGenre[genre] = [];
        }
        songsByGenre[genre].push({ Song: song.title, artist: song.artist });
    });

    // Select the div element with id="playlists"
    const playlistsDiv = document.getElementById("playlists");

    // Loop through each genre in songsByGenre
    Object.keys(songsByGenre).forEach(genre => {

        // Create a new div element for the current genre
        const genreDiv = document.createElement("div");
        genreDiv.classList.add("playlist");

        // Filter guardians based on the current genre
        const guardiansForGenre = Object.keys(guardians).filter(guardian => guardians[guardian] === genre);

        // Loop through each guardian for the current genre
        guardiansForGenre.forEach(guardian => {
            // Create an unordered list to hold the songs for this guardian
            const guardianSongList = document.createElement("ul");

            // Map songs for current genre to list items
            songsByGenre[genre].map(song => {
                const listItem = document.createElement("li");
                listItem.textContent = `${song.Song} - ${song.artist}`;
                return listItem;
            }).forEach(listItem => {
                guardianSongList.appendChild(listItem);
            });

            // Create a header element for the guardian's name
            const guardianHeader = document.createElement("h3");
            guardianHeader.textContent = guardian;

            // Append the guardian header and their song list to the genre div
            genreDiv.appendChild(guardianHeader);
            genreDiv.appendChild(guardianSongList);
        });

        // Append the genre div to the playlists div
        playlistsDiv.appendChild(genreDiv);
    });
}
generatePlaylist(guardians, songs);