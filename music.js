const songData = [
  {
    id: 1,
    title: "All of Me",
    author: "Berlin",
    images: "./images/All of me.jpg",
    songs: "./songs/All of me.mp3",
    genre: "Rock",
  },
  {
    id: 2,
    title: "Locked Away",
    author: "Tokyo",
    images: "./images/locked away.jpg",
    songs: "./songs/Locked away.mp3",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Shape of you",
    author: "Delhi",
    images: "./images/shape of you.jpg",
    songs: "./songs/Shape of you.mp3",
    genre: "Pop",
  },
  {
    id: 4,
    title: "Someone like you",
    author: "New York",
    images: "./images/someone.jpg",
    songs: "./songs/Someone like you.mp3",
    genre: "Pop",
  },
  {
    id: 5,
    title: "Sugar maroon",
    author: "Chicago",
    images: "./images/sugar.jpeg",
    songs: "./songs/Sugar maroon.mp3",
    genre: "Hip Hop",
  },
  {
    id: 6,
    title: "Wonderwall",
    author: "Paris",
    images: "./images/wonderwall.jpg",
    songs: "./songs/Wonderwall.mp3",
    genre: "Hip Hop",
  },
];

let genreList = [...new Set(songData.map((item) => item.genre))];

genreList = ["All", ...genreList];

let songsList = [...songData];

const genreEl = document.getElementById("genre");

genreEl.innerHTML = genreList.map(
  (item) => `<option value="${item}">${item}</option>`,
);

const songEl = document.getElementById("displaySongs");

genreEl.addEventListener("change", function (e) {
  e.preventDefault();
  let dropValue = genreEl.value;
  console.log(dropValue);

  if (dropValue != "All") {
    songsList = songData.filter((item) => item.genre == dropValue);
  } else {
    songsList = [...songData];
  }

  console.log(songsList);

  songEl.innerHTML = songsList
    .map(
      (item, id) =>
        `<button onClick="handleSongChoice('${item.id}')">${item.title}</button>`,
    )
    .join("");
});

const songImg = document.getElementById("songImg");
const songAudio = document.getElementById("songAudio");
let songIndex = null;

function handleSongChoice(id) {
  const song = songsList.find((item) => item.id == id);
  songIndex = songsList.findIndex((item) => item.id == id);
  songImg.src = song.images;
  songAudio.src = song.songs;
}

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

prevEl.addEventListener("click", function () {
 
  songIndex -= 1;
  if (songIndex < 0) {
    songIndex = songsList.length - 1;
  }

  const songs = songsList[songIndex];
  
  songImg.src = songs.images;
  songAudio.src = songs.songs;
});


nextEl.addEventListener("click", function () {
 
  songIndex += 1;
  if (songIndex > songsList.length-1) {
    songIndex = 0;
  }

  const songss = songsList[songIndex];
  
  songImg.src = songss.images;
  songAudio.src = songss.songs;
});

const playListEl = document.getElementById("addPlayList")

const playListNameEl = document.getElementById('playListName');
const playListCreate = document.getElementById('playListCreate');
const playListContainerEl = document.getElementById('playListContainer');

let allPlaylist = []
let currentPlayList = ""

let playListValues = []

playListCreate.addEventListener('click',function(){
    let valuees = playListNameEl.value;

    playListValues.push({[valuees]:[]})

    // let tempplayListValues = playListValues.map((item)=>Object.keys(item)[0])

    // console.log(tempplayListValues)

    playListContainerEl.innerHTML = playListValues.map((item)=>`<button>${Object.keys(item)[0]}</button>`).join('')
})



playListContainerEl.addEventListener('click',function(e){
    if(e.target.tagName == "BUTTON"){
        console.log("Hello")
        currentPlayList = e.target.textContent;
        allPlaylist.push({[e.target.textContent]:[]})
        console.log(allPlaylist)
        console.log(currentPlayList)
    }
})

playListEl.addEventListener('click', function(){
    let favSong = songsList[songIndex];
    console.log(favSong)
    console.log(currentPlayList)
    allPlaylist = allPlaylist.length > 0 ? allPlaylist.forEach((item)=>{
        
        let key = Object.keys(item)[0]
        if(key == currentPlayList){
            item[key].push(favSong)
        }
    }) :alert("create a playList")
    console.log(allPlaylist)
})




