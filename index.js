const songs = [
    {
      id: 1,
      title: 'Kilos Milos',
      artist: 'black sherif',
      album: 'The Vilian',
      albumArt: 'cover pics/the vilian i never was cover pic.jpeg',
      audioUrl: 'songs/Black-Sherif-Kilos-Milos-(Bazehits).mp3',
      duration: '2:37',
      country: 'Ghana',
      genre: 'Afrobeat'
    },
    {
      id: 2,
      title: 'Go Gaaga',
      artist: 'Afriyie Wutah ft Sarkodie',
      album: 'Go Gaaga',
      albumArt: 'cover pics/go gaaga cover pic.jpg',
      audioUrl: 'songs/Afriyie-Wutah-Go-Gaaga-ft-Sarkodie-Prod.-By-DDT-www.hitxgh.com_.mp3',
      duration: '3:35',
      country: 'Ghana',
      genre: 'Afrobeat'
    },

    {
        id: 3,
        title: 'Lonely',
        artist: 'Akon',
        album: 'Trouble',
        albumArt: 'cover pics/Akon lonely cover pic.jpeg',
        audioUrl: 'songs/Akon-Lonely-(Bazehits).mp3',
        duration: '3:35',
        country: 'USA',
        genre: 'R&B'
      },

      {
        id: 4,
        title: 'Favorite Song',
        artist: 'King Promise ft olivetheboy ft Sarkodie',
        album: 'Five 5 Star',
        albumArt: 'cover pics/favorite song king promise cover pic.webp',
        audioUrl: 'songs/King-Promise-Favourite-Story-ft-Sarkodie--Olivetheboy.mp3',
        duration: '3:55',
        country: 'Ghana',
        genre: 'Afrobeat'
      },

      {
        id: 5,
        title: 'Tokyo',
        artist: 'King promise ft Wizkid',
        album: 'As Promised',
        albumArt: 'cover pics/Tokyo King promise cover pic.jpeg',
        audioUrl: 'songs/King-Promise-Tokyo-ft-Wizkid.mp3',
        duration: '3:51',
        country: 'Ghana',
        genre: 'Afrobeat'
      },

      {
        id: 6,
        title: 'Someone You loved',
        artist: 'Lewis Capaldi',
        album: 'Someone You loved',
        albumArt: 'cover pics/Lewis capaldi cover pic.jpeg',
        audioUrl: 'songs/Lewis_Capaldi_-_Someone_You_Loved.mp3',
        duration: '3:35',
        country: 'USA',
        genre: 'R&B'
      },

      {
        id: 7,
        title: 'Number 1 one',
        artist: 'Ms Forson ft fameye',
        album: 'Number one 1',
        albumArt: 'cover pics/fameye numbe one cover pic.jpeg',
        audioUrl: 'songs/New Hitx/01_-_Fameye_-_Number_1.mp3',
        duration: '3:22',
        country: 'Ghana',
        genre: 'Afrobeat'
      },

      {
        id: 8,
        title: 'up and awake',
        artist: 'Cojo Cue X Shaker ft Kwesi Arthur',
        album: 'Pen and paper',
        albumArt: 'cover pics/up and awake cojo cue cover pic.jpeg',
        audioUrl: 'songs/New Hitx/08-Up-_-Awake-ft-Kwesi-Arthur.mp3',
        duration: '2:30',
        country: 'Ghana',
        genre: 'Afrobeat'
      },

      {
        id: 9,
        title: 'Atia',
        artist: 'Episode ft Abiana ft Dela Botri',
        album: 'Atia',
        albumArt: 'cover pics/Epixode_Atia_Rendition cover pic.jpeg',
        audioUrl: 'songs/New Hitx/abiana_dela_botri_on_atia_by_epixode_folk_rendition_plugnplay_sessions_mp3_45181.mp3',
        duration: '2:30',
        country: 'Ghana',
        genre: 'Highlife'
      },
      {
        id: 10,
        title: 'Bestie',
        artist: 'Abochi',
        album: 'Short songs',
        albumArt: 'cover pics/Abochie bestie cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Abochi-–-Bestie-www.Ghanasongs.com_.mp3',
        duration: '2:30',
        country: 'Ghana',
        genre: 'Afrobeat'
      },
      {
        id: 11,
        title: 'Jeje',
        artist: 'Adina',
        album: 'Araba',
        albumArt: 'cover pics/Adina Jeje cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Adina-–-Jeje-Prod.-by-Richie-Mensah-DownGh.com_.mp3',
        duration: '2:30',
         country: 'Ghana'
      },
      {
        id: 12,
        title: 'Take Care',
        artist: 'Adina ft stonebwoy',
        album: 'Take Care of you',
        albumArt: 'cover pics/Adina take care cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Adina-–-Take-Care-Of-You-ft.-Stonebwoy-Prod.-by-Street-Beatz.mp3',
        duration: '2:30',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 13,
        title: 'Why',
        artist: 'Adina Thembi',
        album: 'Araba',
        albumArt: 'cover pics/Adina why cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Adina-Why-Halmblog.com_.mp3',
        duration: '2:30',
         country: 'Ghana',
         genre: 'Raggae'
      },
      {
        id: 14,
        title: 'Posti Me',
        artist: 'Akwaboah Jnr',
        album: 'Posti Me',
        albumArt: 'cover pics/Akwaboah posti me cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Akwaboah-–-Posti-Me-DownGh.com_.mp3',
        duration: '2:30',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 15,
        title: 'Kyibom',
        artist: 'Amerado',
        album: 'Kyibom (Free hype)',
        albumArt: 'cover pics/Amerado kyibom cover pic.jpeg',
        audioUrl: 'songs/New Hitx/amerado_kyibom_free_hype_mp3_45123.mp3',
        duration: '2:30',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 16,
        title: 'Lyrical Josephine',
        artist: 'Amerado',
        album: 'amerado diss',
        albumArt: 'cover pics/Amerado Lyrical Josephine.jpeg',
        audioUrl: 'songs/New Hitx/amerado_lyrical_josephine_mp3_42833.mp3',
        duration: '2:30',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 17,
        title: 'Obia Boa',
        artist: 'Amerado',
        album: 'Obia Boa',
        albumArt: 'cover pics/amerado-obiaa-boa- cover pic.webp',
        audioUrl: 'songs/New Hitx/amerado_obiaa_boa_official_video_mp3_55579.mp3',
        duration: '2:30',
         country: 'Ghana',
         genre: 'Highlife'
      },
      {
        id: 18,
        title: 'Sin no more',
        artist: 'Amerado',
        album: 'Amerado diss',
        albumArt: 'cover pics/Amerado sin no more.jpeg',
        audioUrl: 'songs/New Hitx/amerado_sin_no_more_lyrical_joe_diss_mp3_42908.mp3',
        duration: '2:17',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 19,
        title: 'Me ho ye',
        artist: 'Amerado',
        album: 'Me ho ye',
        albumArt: 'cover pics/Amerado Me ho y3.jpeg',
        audioUrl: 'songs/New Hitx/Amerado-–-Me-Ho-Y3-Prod.-by-Itz-Joe-Beatz.mp3',
        duration: '3:00',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 20,
        title: 'Allowed',
        artist: 'Amg Armani ft Quamina Mp Ft Medikal',
        album: 'Allowed',
        albumArt: 'cover pics/Amg Armani Allowed cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Amg-Armani-–-Allowed-Ft.-Quamina-MP-x-Medikal-DownGh.com_.mp3',
        duration: '4:07',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 21,
        title: 'Bye bye to property',
        artist: 'Amg Armani ft Fameye ft Kofi Mole',
        album: 'Bye bye to property',
        albumArt: 'cover pics/Amg Armani Bye Bye cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Amg-Armani-Bye-Bye-To-Poverty-ft.-Fameye-Kofi-Mole-Ghbeatz.com_.mp3',
        duration: '4:19',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 22,
        title: 'Tackle Tackle',
        artist: 'Amg Armani',
        album: 'Tackle Tackle',
        albumArt: 'cover pics/Amg Armani Tackle Tackle cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Amg-Armani-Tackle-Tackle-Mixed-by-Unkle-Beatz.mp3',
        duration: '2:55',
         country: 'Ghana',
         genre: 'Hip Hop'
      },
      {
        id: 23,
        title: '1k',
        artist: 'Andy Dosty ft E.L ft Kidi',
        album: '1K',
        albumArt: 'cover pics/Andy dosty 1K cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Andy-Dosty-–-1k-Ft-E.L-KiDi.mp3',
        duration: '4:21',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 24,
        title: 'Obiaa Ne Ni Taste',
        artist: 'Angla Boy ft Medikal',
        album: 'Obiaa Ne Ni Taste',
        albumArt: 'cover pics/Angla boy obiaa cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Angla Boy ft Medikal – Obiaa Ne Ni Taste.mp3',
        duration: '3:00',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 25,
        title: 'Fit',
        artist: 'B4 Bonnah',
        album: 'Fit',
        albumArt: 'cover pics/B4bonah zodivs cover pic.jpeg',
        audioUrl: 'songs/New Hitx/B4Bonah-Zodivc-Fit-GhanaNdwom.com_.mp3',
        duration: '3:57',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 26,
        title: 'Already',
        artist: 'Beyounce ft Shatta Wale',
        album: 'Alreday',
        albumArt: 'cover pics/Beyouce Already cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Beyonc_Ft_Shatta_Wale_Major_Lazer_-_Already.mp3',
        duration: '3:42',
         country: 'USA',
         genre: 'R&B'
      },
      {
        id: 27,
        title: 'Life',
        artist: 'Bisa Kdei ft Patoranking',
        album: 'highlife Connect',
        albumArt: 'cover pics/bisa kdei life cover pic.jpeg',
        audioUrl: 'songs/New Hitx/bisa_kdei_x_patoranking_life_official_video_mp3_56588.mp3',
        duration: '3:35',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 28,
        title: 'Netwerk',
        artist: 'Bisa Kdei ft Medikal',
        album: 'Netwerk',
        albumArt: 'cover pics/Bisa-Kdei-Netwerk cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Bisa-Kdei-Network-ft.-Medikal.mp3',
        duration: '3:17',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 29,
        title: 'Ade Akye',
        artist: 'Black Sherif',
        album: 'Ade Akye',
        albumArt: 'cover pics/black sherif Ade akye cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Black-Sherif-–-Ade-Akye-Prod.-by-Joker-www.hitxgh.com_.mp3',
        duration: '3:00',
         country: 'Ghana',
         genre: 'Hip Hop'
      },
      {
        id: 30,
        title: 'Money',
        artist: 'Black Sherif',
        album: 'Money',
        albumArt: 'cover pics/Black sherif money cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Black-Sherif-–-Money-Prod.-By-Tubhani-Muzik-DownGh.com_.mp3',
        duration: '3:23',
         country: 'Ghana',
         genre: 'Hip Hop'
      },

      {
        id: 31,
        title: 'Destiny',
        artist: 'Black Sherif',
        album: 'My destiny',
        albumArt: 'cover pics/Black sherif my destiny cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Black-Sherif-Destiny-www.crateshub.com.mp3',
        duration: '3:23',
         country: 'Ghana',
         genre: 'Hip Hop'
      },
      {
        id: 32,
        title: 'Moonlight',
        artist: 'Bless',
        album: 'moonlight',
        albumArt: 'cover pics/Bless moonlight cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Bless-–-Moonlight-Prod.-By-Kin-Dee.mp3',
        duration: '3:45',
         country: 'Ghana',
         genre: 'Highlife'
      },
      {
        id: 33,
        title: 'chochomucho',
        artist: 'Bless ft kofi kinaata',
        album: 'Chochomucho',
        albumArt: 'cover pics/Bless chochomucho cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Bless-ft-kofi-kinaata-choco-mucho-www.Ghanasongs.com_.mp3',
        duration: '3:23',
         country: 'Ghana',
         genre: 'Highlife'
      },
      {
        id: 34,
        title: 'Mebodam',
        artist: 'Bra Alex ft Tulenkey',
        album: 'mebodam',
        albumArt: 'cover pics/Bra Alex mabodam cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Bra-Alex-–-Mebodam-Remix-Ft.-Tulenkey.mp3',
        duration: '2:50',
         country: 'Ghana',
         genre: 'Hip Hop'
      },
      {
        id: 35,
        title: 'Sika hye botom',
        artist: 'Bra desmond ft oseikrom Sikanii ft Ypee',
        album: 'Sika hye botom',
        albumArt: 'cover pics/Bra-Desmond-Sika-Hy3-Y3n-Botom cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Bra-Desmond-–-Sika-Hy3-Botom-Ft-Oseikrom-Sikanii-x-Ypee.mp3',
        duration: '3:37',
         country: 'Ghana',
         genre: 'Hip Hop'
      },
      {
        id: 36,
        title: 'Love nwantiti',
        artist: 'Ckay ft kuami Eugene',
        album: 'Ckay the first',
        albumArt: 'cover pics/ckay love wantinti cover pic.webp',
        audioUrl: 'songs/New Hitx/Ckay-–-Love-Nwantiti-Remix-ft.-Joeboy-Kuami-Eugene-DownGh.com_.mp3',
        duration: '3:13',
         country: 'Nigeria',
         genre: 'Afrobeat'
      },
      {
        id: 37,
        title: 'felony',
        artist: 'Ckay',
        album: 'Boyfriend',
        albumArt: 'cover pics/ckay felony cover pic.jpeg',
        audioUrl: 'songs/New Hitx/CKay-Felony.mp3',
        duration: '2:25',
         country: 'Nigeria',
         genre: 'Afrobeat'
      },
      {
        id: 38,
        title: 'Too Correct',
        artist: 'Crayon ft Rema',
        album: 'Too correct',
        albumArt: 'cover pics/crayon too correct cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Crayon_Ft_Rema_Too_Correct_9jaflaver.com_.mp3',
        duration: '3:37',
         country: 'Nigeria',
         genre: 'Afrobeat'
      },
      {
        id: 39,
        title: 'Bie Gya',
        artist: 'Criss waddle ft Stonebwoy',
        album: 'Bie Gya',
        albumArt: 'cover pics/Criss-Waddle-Bie-Gya-cover pic.webp',
        audioUrl: 'songs/New Hitx/criss_waddle_bie_gya_open_fire_ft._stonebwoy_official_video_mp3_65436.mp3',
        duration: '3:38',
         country: 'Ghana',
         genre: 'Afrobeat'
      },
      {
        id: 40,
        title: 'king Kong',
        artist: 'criss Waddle ft Kwesi Arthur',
        album: 'King Kong',
        albumArt: 'cover pics/chris waddle king kong cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Criss-Waddle-Ft-Kwesi-Arthur-King-Kong-Prod-By-Kayso-www.Ghanasongs.com_.mp3',
        duration: '2:48',
         country: 'Ghana',
         genre: 'Hip Hop'
      },
      {
        id: 41,
        title: 'Green Light',
        artist: 'Cuppy ft Tekno',
        album: 'Green Light',
        albumArt: 'cover pics/Cuppy X tekno cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Cuppy-x-TekNo-Green-Light-Prod-By-Tekno.mp3',
        duration: '3:37',
         country: 'Nigeria',
         genre: 'Afrobeat'
      },
      {
        id: 35,
        title: 'Sika hye botom',
        artist: 'Bra desmond ft oseikrom Sikanii ft Ypee',
        album: 'Sika hye botom',
        albumArt: 'cover pics/Bra-Desmond-Sika-Hy3-Y3n-Botom cover pic.jpeg',
        audioUrl: 'songs/New Hitx/Bra-Desmond-–-Sika-Hy3-Botom-Ft-Oseikrom-Sikanii-x-Ypee.mp3',
        duration: '3:37',
         country: 'Ghana',
         genre: 'Hip Hop'
      },




  ];
  
  let currentSong = null;
  
  function loadSongs() {
    const songsContainer = document.getElementById('songs');
    songsContainer.innerHTML = '';
  
    songs.forEach(song => {
      const songItem = document.createElement('div');
      songItem.classList.add('song-item');
  
      songItem.innerHTML = `
        <img src="${song.albumArt}" alt="${song.title}">
        <div class="song-info">
          <h3>${song.title}</h3>
          <p>${song.artist} - ${song.album}</p>
        </div>
        <button onclick="playSong(${song.id})">Play</button>
      `;
  
      songsContainer.appendChild(songItem);
    });
  }
  
  function playSong(id) {
    currentSong = songs.find(song => song.id === id);
    
    document.getElementById('album-art').src = currentSong.albumArt;
    document.getElementById('song-title').textContent = currentSong.title;
    document.getElementById('song-artist').textContent = currentSong.artist;
    document.getElementById('audio-player').src = currentSong.audioUrl;
    
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.play();
  }
  
  function searchSongs() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredSongs = songs.filter(song => 
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query) ||
      song.album.toLowerCase().includes(query)
    );
    
    const songsContainer = document.getElementById('songs');
    songsContainer.innerHTML = '';
  
    filteredSongs.forEach(song => {
      const songItem = document.createElement('div');
      songItem.classList.add('song-item');
  
      songItem.innerHTML = `
        <img src="${song.albumArt}" alt="${song.title}">
        <div class="song-info">
          <h3>${song.title}</h3>
          <p>${song.artist} - ${song.album}</p>
        </div>
        <button onclick="playSong(${song.id})">Play</button>
      `;
  
      songsContainer.appendChild(songItem);
    });
  }
  
  function playPause() {
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }
  
  function stopSong() {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }
  
  function skipNext() {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const nextSong = songs[(currentIndex + 1) % songs.length];
    playSong(nextSong.id);
  }
  
  document.addEventListener('DOMContentLoaded', loadSongs);

  function filterByCountry() {
    const selectedCountry = document.getElementById('country-select').value;
    const filteredSongs = selectedCountry
        ? songs.filter(song => song.country === selectedCountry)
        : songs; // If no country is selected, show all songs

    const songsContainer = document.getElementById('songs');
    songsContainer.innerHTML = '';

    filteredSongs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');

        songItem.innerHTML = `
            <img src="${song.albumArt}" alt="${song.title}">
            <div class="song-info">
                <h3>${song.title}</h3>
                <p>${song.artist} - ${song.album}</p>
            </div>
            <button onclick="playSong(${song.id})">Play</button>
        `;

        songsContainer.appendChild(songItem);
    });
}


function loadPlaylists() {
  const ghanaSongsContainer = document.getElementById('ghana-songs');
  const usSongsContainer = document.getElementById('us-songs');
  const ukSongsContainer = document.getElementById('uk-songs');

  songs.forEach(song => {
      const songItem = document.createElement('div');
      songItem.classList.add('playlist-song-item');

      songItem.innerHTML = `
          <img src="${song.albumArt}" alt="${song.title}">
          <div class="song-info">
              <h4>${song.title}</h4>
              <p>${song.artist} - ${song.album}</p>
          </div>
          <button onclick="playSong(${song.id})">Play</button>
      `;

      // Append to the respective container based on the country
      if (song.country === 'Ghana') {
          ghanaSongsContainer.appendChild(songItem);
      } else if (song.country === 'USA') {
          usSongsContainer.appendChild(songItem);
      } else if (song.country === 'UK') {
          ukSongsContainer.appendChild(songItem);
      }
  });
}


function togglePlaylist(playlistId) {
  const playlistContainer = document.getElementById(playlistId);
  // Toggle display property
  if (playlistContainer.style.display === 'none' || playlistContainer.style.display === '') {
      playlistContainer.style.display = 'block';
  } else {
      playlistContainer.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadSongs();
  loadPlaylists();
});





let isShuffling = false; // Shuffle state
let isRepeating = false; // Repeat state

// Function to toggle shuffle mode
function toggleShuffle() {
    isShuffling = !isShuffling;
    document.getElementById('shuffle-btn').classList.toggle('active', isShuffling);
}

// Function to toggle repeat mode
function toggleRepeat() {
    isRepeating = !isRepeating;
    document.getElementById('repeat-btn').classList.toggle('active', isRepeating);
}

// Function to skip to the next song (with shuffle and repeat)
function skipNext() {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id);
    let nextIndex;

    if (isShuffling) {
        // Random song for shuffle mode
        nextIndex = Math.floor(Math.random() * songs.length);
    } else {
        // Normal sequence
        nextIndex = (currentIndex + 1) % songs.length;
    }

    playSong(songs[nextIndex].id);
}

// Function to handle the end of a song (check repeat mode)
document.getElementById('audio-player').addEventListener('ended', () => {
    if (isRepeating) {
        // Repeat the same song
        playSong(currentSong.id);
    } else {
        // Play the next song
        skipNext();
    }
});


// Function to go to the previous song
function skipPrev() {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id);
    let prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : songs.length - 1;

    playSong(songs[prevIndex].id);
}



function filterByGenre(genre) {
  const filteredSongs = songs.filter(song => song.genre === genre);
  displaySongs(filteredSongs);
}

function displaySongs(songsToDisplay) {
  const songsContainer = document.getElementById('songs');
  songsContainer.innerHTML = '';

  songsToDisplay.forEach(song => {
      const songItem = document.createElement('div');
      songItem.classList.add('song-item');

      songItem.innerHTML = `
          <img src="${song.albumArt}" alt="${song.title}">
          <div class="song-info">
              <h3>${song.title}</h3>
              <p>${song.artist} - ${song.album}</p>
          </div>
          <button onclick="playSong(${song.id})">Play</button>
      `;

      songsContainer.appendChild(songItem);
  });
}

// Initially load all songs on page load
document.addEventListener('DOMContentLoaded', () => {
  displaySongs(songs);
});


function filterByGenre(genre) {
  let filteredSongs;
  
  // If 'All' is selected, show all songs, otherwise filter by genre
  if (genre === 'All') {
      filteredSongs = songs;
  } else {
      filteredSongs = songs.filter(song => song.genre === genre);
  }

  displaySongs(filteredSongs);
}


function loadArtistPlaylists() {
  const artistSongsContainer = document.getElementById('artist-song-list');

  // Get unique artists from the songs array
  const uniqueArtists = [...new Set(songs.map(song => song.artist))];

  uniqueArtists.forEach(artist => {
    const artistItem = document.createElement('div');
    artistItem.classList.add('artist-item');

    artistItem.innerHTML = `
      <h4>${artist}</h4>
      <div class="artist-songs"></div>
      <button onclick="toggleArtistSongs('${artist}')">Show/Hide Songs</button>
    `;

    const artistSongs = songs.filter(song => song.artist === artist);

    artistSongs.forEach(song => {
      const songItem = document.createElement('div');
      songItem.classList.add('playlist-song-item');
      songItem.innerHTML = `
        <img src="${song.albumArt}" alt="${song.title}">
        <div class="song-info">
          <h4>${song.title}</h4>
          <p>${song.album}</p>
        </div>
        <button onclick="playSong(${song.id})">Play</button>
      `;
      artistItem.querySelector('.artist-songs').appendChild(songItem);
    });

    artistSongsContainer.appendChild(artistItem);
  });
}
function toggleArtistSongs(artist) {
  const artistSongsContainer = document.querySelectorAll('.artist-item');

  artistSongsContainer.forEach(item => {
    if (item.querySelector('h4').textContent === artist) {
      const songsDiv = item.querySelector('.artist-songs');
      songsDiv.style.display = (songsDiv.style.display === 'none' || songsDiv.style.display === '') ? 'block' : 'none';
    }
  });
}

