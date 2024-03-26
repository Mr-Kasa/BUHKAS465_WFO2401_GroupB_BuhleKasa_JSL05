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
    { title: "All the stars", artist: "SZA", genre: "R&B" },
    { title: "Shape of You", artist: "Ed Sheeran", genre: "Pop" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
    { title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock" },
    { title: "Hotel California", artist: "Eagles", genre: "Rock" },
    { title: "Thriller", artist: "Michael Jackson", genre: "Pop" },
    { title: "Let's Get It On", artist: "Marvin Gaye", genre: "R&B" },
    { title: "I Will Always Love You", artist: "Whitney Houston", genre: "R&B" },
    { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Rock" },
    { title: "Sweet Child o' Mine", artist: "Guns N' Roses", genre: "Rock" },
    { title: "Thinking Out Loud", artist: "Ed Sheeran", genre: "Pop" },
    { title: "Empire State of Mind", artist: "Jay-Z ft. Alicia Keys", genre: "Hip-Hop" },
    { title: "God's Plan", artist: "Drake", genre: "Rap" },
    { title: "Lose Yourself", artist: "Eminem", genre: "Rap" },
    { title: "Shape of My Heart", artist: "Sting", genre: "Pop" },
    { title: "Watermelon Sugar", artist: "Harry Styles", genre: "Pop" },
    { title: "I Feel It Coming", artist: "The Weeknd ft. Daft Punk", genre: "Pop" },
    { title: "Toxic", artist: "Britney Spears", genre: "Pop" },
    { title: "Girls Just Want to Have Fun", artist: "Cyndi Lauper", genre: "Pop" },
    { title: "Smooth", artist: "Santana ft. Rob Thomas", genre: "Pop" },
    { title: "Havana", artist: "Camila Cabello", genre: "Pop" },
    { title: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee", genre: "Pop" },
    { title: "Shape of My Heart", artist: "Sting", genre: "Pop" },
    { title: "I Will Survive", artist: "Gloria Gaynor", genre: "Pop" },
    { title: "Let It Be", artist: "The Beatles", genre: "Pop" },
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
    { title: "Like a Prayer", artist: "Madonna", genre: "Pop" },
    { title: "Sweet Caroline", artist: "Neil Diamond", genre: "Pop" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Pop" },
    { title: "Hotel California", artist: "Eagles", genre: "Pop" },
    { title: "Under Pressure", artist: "Queen & David Bowie", genre: "Rock" },
    { title: "Another Brick in the Wall", artist: "Pink Floyd", genre: "Rock" },
    { title: "Back in Black", artist: "AC/DC", genre: "Rock" },
    { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Rock" },
    { title: "Enter Sandman", artist: "Metallica", genre: "Rock" },
    { title: "Eye of the Tiger", artist: "Survivor", genre: "Rock" },
    { title: "Livin' on a Prayer", artist: "Bon Jovi", genre: "Rock" },
    { title: "Sweet Child o' Mine", artist: "Guns N' Roses", genre: "Rock" },
    { title: "Paradise City", artist: "Guns N' Roses", genre: "Rock" },
    { title: "November Rain", artist: "Guns N' Roses", genre: "Rock" },
    { title: "No Scrubs", artist: "TLC", genre: "R&B" },
    { title: "End of the Road", artist: "Boyz II Men", genre: "R&B" },
    { title: "I'll Make Love to You", artist: "Boyz II Men", genre: "R&B" },
    { title: "Un-break My Heart", artist: "Toni Braxton", genre: "R&B" },
    { title: "Waterfalls", artist: "TLC", genre: "R&B" },
    { title: "Creep", artist: "TLC", genre: "R&B" },
    { title: "Say My Name", artist: "Destiny's Child", genre: "R&B" },
    { title: "Endless Love", artist: "Diana Ross & Lionel Richie", genre: "R&B" },
    { title: "I Wanna Dance with Somebody", artist: "Whitney Houston", genre: "R&B" },
    { title: "Return of the Mack", artist: "Mark Morrison", genre: "R&B" },
    { title: "No Diggity", artist: "Blackstreet ft. Dr. Dre", genre: "R&B" },
    { title: "I Want It That Way", artist: "Backstreet Boys", genre: "Pop" },
    { title: "Wannabe", artist: "Spice Girls", genre: "Pop" },
    { title: "Genie in a Bottle", artist: "Christina Aguilera", genre:"R&B"}
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

             // Map songs for this genre to list items
             songsByGenre[genre].map(song => {
                const listItem = document.createElement("li");
                const songTitle = document.createElement("span");      //Create html 

                songTitle.textContent = song.Song;                      //asign the title song html values
                songTitle.classList.add("song-title");
                
                const songArtist = document.createElement("span");          //assign the heading
                songArtist.textContent = ` - ${song.artist}`;
                
                const songItem = document.createElement("li");              //create a list  of songs 
                songItem.classList.add("song");
                
                songItem.appendChild(songTitle);                            //append html
                songItem.appendChild(songArtist);
                return songItem;
            
            }).forEach(songItem => {
                guardianSongList.appendChild(songItem);
            });

            // Create a header element for the guardian's name
            const guardianHeader = document.createElement("h3");
            guardianHeader.textContent = guardian+"'s PlayList";

            // Append the guardian header and their song list to the genre div
            genreDiv.appendChild(guardianHeader);
            genreDiv.appendChild(guardianSongList);
        });

        // Append the genre div to the playlists div
        playlistsDiv.appendChild(genreDiv);
    });
    
}
generatePlaylist(guardians, songs);