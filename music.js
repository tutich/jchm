const songs = [ 
    "music/Burna Boy - Gbona [Official Music Video].mp3",
    "music/Burna Boy - Omo (Official Audio)(MP3_128K).mp3",
    "music/Chris_Brown_-_Wobble_Up_(Audio)_ft._Nicki_Minaj,_G-Eazy(256k).mp3",
    "music/Desiigner - Panda (Official Music Video).mp3",
    "music/drake_laugh_now_cry_later_official_music_video_ft._lil_durk_aac_70142.m4a",
   "music/J Balvin - 6 AM ft. Farruko (Official Video).mp3",
    "music/Lil Uzi Vert - The Way Life Goes Remix (Feat. Nicki Minaj) [Official M 128 kbps - Copy.wma",
    "music/Nasty_C - UOK (Official Music Video)(MP3_160K) - Copy.mp3",
    "music/Nyashinski - Glory (Official Music Video) [Skiza_(MP3_160K) - Copy.mp3",
   " music/Nyashinski - Wach Wach (Official Audio) [SMS _Skiz(MP3_160K) - Copy.mp3",
] ;

function createSongs() {
    const list = document.createElement("ol");
    for(let i = 0; i < songs.length; i++) {
        const item = document.createElement("li")
        item.appendChild(document.createTextNode(songs[i]))
       list.appendChild(item) 
    }
    return list;
}
document.getElementById('mySongs').appendChild(createSongs());