let currentSoung = new Audio();
let s, i, c, b_t, c_t;
let audio_title;

// Album management system for prev/next functionality
let allAlbums = {
    currentAlbumIndex: 0,
    currentSongIndex: 0,
    albums: []
};

// Function to add album data to the global album system
function addAlbumToSystem(albumName, songs, images, titles) {
    allAlbums.albums.push({
        name: albumName,
        songs: songs,
        images: images,
        titles: titles
    });
}

// Function to find current album and song indices
function findCurrentIndices() {
    for (let albumIndex = 0; albumIndex < allAlbums.albums.length; albumIndex++) {
        const album = allAlbums.albums[albumIndex];
        for (let songIndex = 0; songIndex < album.titles.length; songIndex++) {
            if (album.titles[songIndex].replaceAll("_", " ") === c_t) {
                allAlbums.currentAlbumIndex = albumIndex;
                allAlbums.currentSongIndex = songIndex;
                return { albumIndex, songIndex };
            }
        }
    }
    return null;
}

// Enhanced prev function that works across all albums
function playPreviousSong() {
    const current = findCurrentIndices();
    if (!current) {
        console.log("Could not find current song in album system");
        return;
    }

    let { albumIndex, songIndex } = current;
    
    // Try to go to previous song in current album
    if (songIndex > 0) {
        songIndex--;
    } else {
        // Go to last song of previous album
        if (albumIndex > 0) {
            albumIndex--;
            songIndex = allAlbums.albums[albumIndex].songs.length - 1;
        } else {
            // Wrap to last album, last song
            albumIndex = allAlbums.albums.length - 1;
            songIndex = allAlbums.albums[albumIndex].songs.length - 1;
        }
    }

    const targetAlbum = allAlbums.albums[albumIndex];
    const songUrl = targetAlbum.songs[songIndex];
    const imageUrl = targetAlbum.images[songIndex];
    const songTitle = targetAlbum.titles[songIndex].replaceAll("_", " ");

    console.log(`Previous: ${songTitle} from ${targetAlbum.name}`);
    playMusic(songUrl, imageUrl, songTitle);
}

// Enhanced next function that works across all albums
function playNextSong() {
    const current = findCurrentIndices();
    if (!current) {
        console.log("Could not find current song in album system");
        return;
    }

    let { albumIndex, songIndex } = current;
    
    // Try to go to next song in current album
    if (songIndex < allAlbums.albums[albumIndex].songs.length - 1) {
        songIndex++;
    } else {
        // Go to first song of next album
        if (albumIndex < allAlbums.albums.length - 1) {
            albumIndex++;
            songIndex = 0;
        } else {
            // Wrap to first album, first song
            albumIndex = 0;
            songIndex = 0;
        }
    }

    const targetAlbum = allAlbums.albums[albumIndex];
    const songUrl = targetAlbum.songs[songIndex];
    const imageUrl = targetAlbum.images[songIndex];
    const songTitle = targetAlbum.titles[songIndex].replaceAll("_", " ");

    console.log(`Next: ${songTitle} from ${targetAlbum.name}`);
    playMusic(songUrl, imageUrl, songTitle);
}

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

document.querySelector(".HOME").addEventListener("click", () => {
    // Show the home page content
    let home_html = `
        <div class="main">
                    <div class="title">
                        <div class="title_1">
                            <h2><a href="#">Trending songs</a></h2>
                        </div>
                        <div class="title_2">
                            <h4 class="TS_see"><a href="#">Show all</a></h4>
                        </div>
                    </div>
                    <div class="cards TS"></div>
                </div>
                <div class="main">
                    <div class="title">
                        <div class="title_1">
                            <h2><a href="#">Popular artists</a></h2>
                        </div>
                        <div class="title_2">
                            <h4 class="PA_see"><a href="#">Show all</a></h4>
                        </div>
                    </div>
                    <div class="cards PA">

                    </div>
                </div>
                <div class="main">
                    <div class="title">
                        <div class="title_1">
                            <h2><a href="#">Popular albums and singles</a></h2>
                        </div>
                        <div class="title_2">
                            <h4 class="PAS_see"><a href="#">Show all</a></h4>
                        </div>
                    </div>
                    <div class="cards PAS">

                    </div>
                </div>
                <div class="main">
                    <div class="title">
                        <div class="title_1">
                            <h2><a href="#">Popular radio</a></h2>
                        </div>
                        <div class="title_2">
                            <h4 class="PR_see"><a href="#">Show all</a></h4>
                        </div>
                    </div>
                    <div class="cards PR">

                    </div>
                </div>
                <div class="main">
                    <div class="title">
                        <div class="title_1">
                            <h2><a href="#">Featured Charts</a></h2>
                        </div>
                        <div class="title_2">
                            <h4 class="FC_see"><a href="#">Show all</a></h4>
                        </div>
                    </div>
                    <div class="cards FC">

                    </div>
                </div>
                <div class="main">
                    <div class="title">
                        <div class="title_1">
                            <h2><a href="#">India's Best</a></h2>
                        </div>
                        <div class="title_2">
                            <h4 class="IR_see"><a href="#">Show all</a></h4>
                        </div>
                    </div>
                    <div class="cards IR">
                        
                    </div>
                </div>`;
    
    // Update the main content area
    const boxElement = document.querySelector(".box");
    if (boxElement) {
        boxElement.innerHTML = home_html;
        
        // Reload all the content
        getT_S();
        getPA();
        getPAS();
        getPR();
        getFC();
        getI_R();
        
        console.log("Home page loaded successfully!");
    } else {
        console.error("Box element not found");
    }
});

async function getT_S() {
    async function songs() {
        try {
            let song = await fetch("http://spotifyclone.gamer.gd/Spotifiy_song/T_S/");
            if (!song.ok) {
                console.error('Failed to fetch songs:', song.status, song.statusText);
                return [];
            }
            let song_r = await song.text();
            let div_s = document.createElement("div");
            div_s.innerHTML = song_r;
            let a = div_s.getElementsByTagName("a");
            let href_s = [];
            for (let index = 0; index < a.length; index++) {
                const element_s = a[index];
                if (element_s.href.endsWith("m4a")) {
                    href_s.push(element_s.href);
                };
            };
            return href_s;
        } catch (error) {
            console.error('Error fetching songs:', error);
            return [];
        }
    }

    function title(array) {
        let copy = [];
        for (let index = 0; index < array.length; index++) {
            let e = array[index];
            copy.push(e.split("/T_S/")[1]);
        }
        return copy;
    }

    async function image() {
        try {
            let image = await fetch("http://spotifyclone.gamer.gd/Spotify_images/T_S/");
            if (!image.ok) {
                console.error('Failed to fetch images:', image.status, image.statusText);
                return [];
            }
            let image_r = await image.text();
            let div_i = document.createElement("div");
            div_i.innerHTML = image_r;
            let i = div_i.getElementsByTagName("a");
            let href_i = [];
            for (let index = 0; index < i.length; index++) {
                const element_i = i[index];
                if (element_i.href.endsWith("png")) {
                    href_i.push(element_i.href);
                };
            };
            return href_i;
        } catch (error) {
            console.error('Error fetching images:', error);
            return [];
        }
    }
    s = await songs();
    i = await image();
    c = title(s);
    
    // Add this album to the global album system for prev/next functionality
    addAlbumToSystem("Top Songs", s, i, c);
    
    const tsContainer = document.querySelector(".TS");
    if (!tsContainer) {
        console.error('TS container not found');
        return;
    }
    
    for (let index = 0; index < s.length; index++) {
        let s_no = s[index];
        let i_no = i[index];
        let c_no = c[index];
        let html = `<div class="card_box">
             <div class="box_img">
                <img src="${i_no}" alt="${i_no}" class="T_S_i">
                <button class="img_button" style="display: none;">
                    <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                </button>
            </div>
            <div class="box_title_IR">
                <h5 class="s_display" data-songs="${s_no}"><a href="#" class="t_display">${c_no.replaceAll("_", " ")}</a></h5>
            </div>`;
        tsContainer.innerHTML = tsContainer.innerHTML + html;
        // console.log(s_no);
        // console.log(`${c_no.replaceAll("_"," ")}`);
    }

    const tsSeeButton = document.querySelector(".TS_see");
    if (tsSeeButton) {
        tsSeeButton.addEventListener("click", async () => {
        let s = await songs();
        let i = await image();
        let c = title(s);
        let see_html = `
            <div class="see_body">
                <div class="title_box">
                    <h2>Trending songs</h2>
                </div>
                <div class="ab_box">
                       
                </div>
            </div>`;
        document.querySelector(".box").innerHTML = see_html;
        for (let index = 0; index < s.length; index++) {
            let s_no = s[index];
            let i_no = i[index];
            let c_no = c[index];
            let all_box = `<div class="card_box">
             <div class="box_img">
                <img src="${i_no}" alt="${i_no}" class="T_S_i">
                <button class="img_button" style="display: none;">
                    <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                </button>
            </div>
            <div class="box_title_IR">
                <h5 class="s_display" data-songs="${s_no}"><a href="#" class="t_display">${c_no.replaceAll("_", " ")}</a></h5>
            </div>`;
            document.querySelector(".ab_box").innerHTML = document.querySelector(".ab_box").innerHTML + all_box;
            // console.log("click See all button");
        }

        Array.from(document.querySelector(".ab_box").getElementsByClassName("card_box")).forEach(e => {
            e.addEventListener("click", element => {
                let u_e = e.getElementsByClassName("s_display")[0];
                let i_e = e.getElementsByClassName("T_S_i")[0];
                let t_e = e.getElementsByClassName("t_display")[0];
                let b_d = e.getElementsByClassName("img_button")[0];
                b_d.style.display = "flex";
                console.log(`Songs: ${u_e.dataset.songs}`);
                console.log(`Img: ${i_e.src}`);
                console.log(`Title: ${t_e.innerHTML}`);
                playMusic(u_e.dataset.songs, i_e.src, t_e.innerHTML);
            });
        })
    });
    }

    Array.from(document.querySelector(".TS").getElementsByClassName("card_box")).forEach(e => {
        e.addEventListener("click", element => {
            let u_e = e.getElementsByClassName("s_display")[0];
            let i_e = e.getElementsByClassName("T_S_i")[0];
            let t_e = e.getElementsByClassName("t_display")[0];
            let b_d = e.getElementsByClassName("img_button")[0];
            b_d.style.display = "flex";
            console.log(`Songs: ${u_e.dataset.songs}`);
            console.log(`Img: ${i_e.src}`);
            console.log(`Title: ${t_e.innerHTML}`);
            playMusic(u_e.dataset.songs, i_e.src, t_e.innerHTML);
        });
    })

    Array.from(document.querySelector(".TS").getElementsByClassName("card_box")).forEach(e => {
        e.addEventListener("mouseenter", element => {
            let b_d = e.getElementsByClassName("img_button")[0];
            // Set initial position (below the card)
            b_d.style.transform = "translateY(100%)";
            b_d.style.transition = "transform 0.5s ease-in-out";
            b_d.style.display = "flex";

            // Trigger the animation to slide up from bottom
            setTimeout(() => {
                b_d.style.transform = "translateY(0)";
            }, 10);
        });
        e.addEventListener("mouseleave", element => {
            let b_d = e.getElementsByClassName("img_button")[0];
            // Animate down to bottom
            b_d.style.transform = "translateY(100%)";
            b_d.style.transition = "transform 0.5s ease-in-out";

            // Hide button after animation completes
            setTimeout(() => {
                b_d.style.display = "none";
                b_d.style.transform = "translateY(100%)"; // Reset position for next time
            }, 200);
        });
    });
};

async function getPA() {
    async function PA_url() {
        let url = await fetch("http://spotifyclone.gamer.gd/Spotify_images/P_A/");
        let url_r = await url.text();
        let div_i = document.createElement("div");
        div_i.innerHTML = url_r;
        let a = div_i.getElementsByTagName("a");
        let href_i = [];
        for (let index = 0; index < a.length; index++) {
            const element_i = a[index];
            if (element_i.href.endsWith("jpg")) {
                href_i.push(element_i.href);
            };
        };
        // console.log(href_i);
        return href_i;
    }

    async function PA2_img() {
        let url_1 = await fetch("http://spotifyclone.gamer.gd/Spotify_images/P_A/");
        let url_r = await url_1.text();
        let div_1 = document.createElement("div");
        div_1.innerHTML = url_r;
        let a_1 = div_1.getElementsByTagName("a");
        let href_1 = [];
        for (let index = 0; index < a_1.length; index++) {
            const element_i = a_1[index];
            if (element_i.href.endsWith("song")) {
                href_1.push(element_i.href);
            };
        };
        return href_1;
    }

    async function PA2_song() {
        let url_2 = await fetch("http://spotifyclone.gamer.gd/Spotifiy_song/P_A/");
        let url_r_2 = await url_2.text();
        let div_2 = document.createElement("div");
        div_2.innerHTML = url_r_2;
        let a_2 = div_2.getElementsByTagName("a");
        let href_2 = [];
        for (let index = 3; index < a_2.length; index++) {
            const element_i = a_2[index];
            if (element_i.href.endsWith("songs")) {
                href_2.push(element_i.href);
            };
        };
        // console.log(href_2);
        return href_2;
    }

    function title_PA(array) {
        let copy = [];
        for (let index = 0; index < array.length; index++) {
            let e = array[index];
            copy.push(e.split("/P_A/")[1]);
        }
        // console.log(copy);
        return copy;
    }
    let u = await PA_url();
    let u_2 = await PA2_img();
    let u_3 = await PA2_song();
    // console.log(u_2);
    // console.log(u_3);
    let t = title_PA(u);
    for (let index = 0; index < u.length; index++) {
        let u_no = u[index];
        let t_no = t[index];
        let u_no_2 = u_2[index];
        let u_no_3 = u_3[index];
        let html = `
        <div class="card_box">
            <div class="box_img_2">
                <img src="${u_no}" alt="${u_no}" data-fetch="${u_no_2}" id="f_img">
                <button class="img_button" style="display: none;">
                    <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                </button>
            </div>
            <div class="box_title_PA">
                <h5><a href="#" data-fetch="${u_no_3}" id="f_song">${t_no.replaceAll("_", " ")}</a></h5>
                <p><a href="#">Artist</a></p>
            </div>
        </div>`;
        document.querySelector(".PA").innerHTML = document.querySelector(".PA").innerHTML + html;
        // console.log("IMAGE",u_no_2);
        // console.log("SONG",u_no_3);
    }

    // Attach event listeners AFTER creating the HTML elements
    Array.from(document.querySelector(".PA").getElementsByClassName("card_box")).forEach(e => {
        e.addEventListener("click", async () => {
            let imgFetch = e.querySelector("#f_img").dataset.fetch;
            let songFetch = e.querySelector("#f_song").dataset.fetch;
            let AB_img = e.querySelector("#f_img").src;
            let AB_title = e.querySelector("#f_song").innerHTML;
            console.log("Image Fetch URL:", imgFetch);
            console.log("Song Fetch URL:", songFetch);
            let url_1 = await fetch(imgFetch);
            let url_2 = await fetch(songFetch);
            let url_r_1 = await url_1.text();
            let url_r_2 = await url_2.text();
            let div_1 = document.createElement("div");
            div_1.innerHTML = url_r_1;
            let a_1 = div_1.getElementsByTagName("a");
            let div_2 = document.createElement("div");
            div_2.innerHTML = url_r_2;
            let a_2 = div_2.getElementsByTagName("a");
            let href_1 = [];
            let href_2 = [];
            for (let index = 0; index < a_1.length; index++) {
                const element_1 = a_1[index];
                const element_2 = a_2[index];
                if (element_1.href.endsWith("jpg")) {
                    href_1.push(element_1.href);
                };
                if (element_2.href.endsWith("mp3")) {
                    href_2.push(element_2.href);
                };
            };

            function title_PA(url) {
                let copy_1 = [];
                for (let index = 0; index < url.length; index++) {
                    let e = url[index];
                    copy_1.push(e.split("/P_A/")[1].replaceAll("_", " "));
                }
                return copy_1;
            }
            let img_f = href_1;
            let song_f = href_2;
            let t_f = title_PA(song_f);
            
            // Add this album to the global album system for prev/next functionality
            addAlbumToSystem(AB_title, song_f, img_f, t_f);
            
            console.log("Image:", AB_img);
            console.log("Title:", AB_title);
            console.log("Image URLs:", img_f);
            console.log("Song URLs:", song_f);
            console.log("Title URLs:", t_f);
            let see_html = `<div class="AB_d">
                    <div class="AB_title_box">
                        <div class="ABbox_title">
                            <h1>${AB_title}</h1>
                        </div>
                        <div class="ABbox_img">
                            <img src="${AB_img}" alt="">
                        </div>
                    </div>
                    <div class="AB_Songs_box">
                        <div class="songs_title">
                            <h3>Popular</h3>
                        </div>
                        <div class="songs_list">
                            <ul class="AB_ul">
                                
                            </ul>
                        </div>
                    </div>
                </div>`;
            document.querySelector(".box").innerHTML = see_html;
            for (let index = 0; index < song_f.length; index++) {
                let s_no = song_f[index];
                let i_no = img_f[index];
                let c_no = t_f[index];
                let all_box = `<li class="AB_li s_display" data-songs="${s_no}"> <img src="${i_no}" alt="icons" class="T_S_i"> <p class="t_display">${c_no}</p></li>`;
                document.querySelector(".AB_ul").innerHTML = document.querySelector(".AB_ul").innerHTML + all_box;
                // console.log("click See all button");
            }
            Array.from(document.querySelector(".AB_ul").getElementsByClassName("AB_li")).forEach(e => {
                e.addEventListener("click", element => {
                    let u_e = e;
                    let i_e = e.getElementsByClassName("T_S_i")[0];
                    let t_e = e.getElementsByClassName("t_display")[0];
                    console.log(`Songs: ${u_e.dataset.songs}`);
                    console.log(`Img: ${i_e.src}`);
                    console.log(`Title: ${t_e.innerHTML}`);
                    playMusic(u_e.dataset.songs, i_e.src, t_e.innerHTML);
                });
            })
        });

        e.addEventListener("mouseenter", element => {
            let b_d = e.getElementsByClassName("img_button")[0];
            // Set initial position (below the card)
            b_d.style.transform = "translateY(100%)";
            b_d.style.transition = "transform 0.5s ease-in-out";
            b_d.style.display = "flex";

            // Trigger the animation to slide up from bottom
            setTimeout(() => {
                b_d.style.transform = "translateY(0)";
            }, 10);
        });
        e.addEventListener("mouseleave", element => {
            let b_d = e.getElementsByClassName("img_button")[0];
            // Animate down to bottom
            b_d.style.transform = "translateY(100%)";
            b_d.style.transition = "transform 0.5s ease-in-out";

            // Hide button after animation completes
            setTimeout(() => {
                b_d.style.display = "none";
                b_d.style.transform = "translateY(100%)"; // Reset position for next time
            }, 500);
        });
    });

    document.querySelector(".PA_see").addEventListener("click", async () => {
        let u = await PA_url();
        let t = title_PA(u);
        let see_html = `
            <div class="see_body">
                <div class="title_box">
                    <h2>Popular artists</h2>
                </div>
                <div class="ab_box">
                       
                </div>
            </div>`;
        document.querySelector(".box").innerHTML = see_html;
        for (let index = 0; index < u.length; index++) {
            let s_no = u[index];
            let st_no = t[index];
            let all_box = `<div class="card_box">
                            <div class="box_img">
                                <img src="${s_no}" alt="${s_no}" class="#">
                                <button class="img_button" style="display: none;">
                                    <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                                </button>
                            </div>
                            <div class="box_title_IR">
                                <h5 class="s_display" data-songs="#">
                                    <a href="#" class="t_display">${st_no.replaceAll("_", " ")}</a>
                                </h5>
                            </div>
                        </div>`;
            document.querySelector(".ab_box").innerHTML = document.querySelector(".ab_box").innerHTML + all_box;
            console.log("click See all button");
        }
    });
}

async function getPAS() {
    async function PAS_url() {
        let url = await fetch("http://spotifyclone.gamer.gd/Spotify_images/P_A_S/");
        let url_r = await url.text();
        let div_i = document.createElement("div");
        div_i.innerHTML = url_r;
        let a = div_i.getElementsByTagName("a");
        let href_i = [];
        for (let index = 0; index < a.length; index++) {
            const element_i = a[index];
            if (element_i.href.endsWith("jpg")) {
                href_i.push(element_i.href);
            };
        };
        // console.log(href_i);
        return href_i;
    }
    function title_PAS(array) {
        let copy = [];
        for (let index = 0; index < array.length; index++) {
            let e = array[index];
            copy.push(e.split("/P_A_S/")[1]);
        }
        // console.log(copy);
        return copy;
    }

    async function PAS2_img() {
        let url_1 = await fetch("http://spotifyclone.gamer.gd/Spotify_images/P_A_S/");
        let url_r = await url_1.text();
        let div_1 = document.createElement("div");
        div_1.innerHTML = url_r;
        let a_1 = div_1.getElementsByTagName("a");
        let href_1 = [];
        for (let index = 0; index < a_1.length; index++) {
            const element_i = a_1[index];
            if (element_i.href.endsWith("songs")) {
                href_1.push(element_i.href);
            };
        };
        return href_1;
    }

    async function PAS2_song() {
        let url_2 = await fetch("http://spotifyclone.gamer.gd/Spotifiy_song/P_A_S/");
        let url_r_2 = await url_2.text();
        let div_2 = document.createElement("div");
        div_2.innerHTML = url_r_2;
        let a_2 = div_2.getElementsByTagName("a");
        let href_2 = [];
        for (let index = 3; index < a_2.length; index++) {
            const element_i = a_2[index];
            if (element_i.href.endsWith("songs")) {
                href_2.push(element_i.href);
            };
        };
        // console.log(href_2);
        return href_2;
    }

    let u = await PAS_url();
    let t = title_PAS(u);
    let u_2 = await PAS2_img();
    let u_3 = await PAS2_song();
    for (let index = 0; index < u.length; index++) {
        let u_no = u[index];
        let t_no = t[index];
        let u_no_2 = u_2[index];
        let u_no_3 = u_3[index];
        let html = `<div class="card_box">
                            <div class="box_img">
                                <img src="${u_no}" alt="${u_no}" class="#"  data-fetch="${u_no_2}" id="f_img">
                                <button class="img_button" style="display: none;">
                                    <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                                </button>
                            </div>
                            <div class="box_title_IR">
                                <h5 class="s_display" data-songs="#">
                                    <a href="#" class="t_display" data-fetch="${u_no_3}" id="f_song">${t_no.replaceAll("_", " ")}</a>
                                </h5>
                            </div>
                        </div>`;
        document.querySelector(".PAS").innerHTML = document.querySelector(".PAS").innerHTML + html;
    }

    // Attach event listeners AFTER creating the HTML elements
    Array.from(document.querySelector(".PAS").getElementsByClassName("card_box")).forEach(e => {
        e.addEventListener("click", async () => {
            let imgFetch = e.querySelector("#f_img").dataset.fetch;
            let songFetch = e.querySelector("#f_song").dataset.fetch;
            let AB_img = e.querySelector("#f_img").src;
            let AB_title = e.querySelector("#f_song").innerHTML;
            let url_1 = await fetch(imgFetch);
            let url_2 = await fetch(songFetch);
            let url_r_1 = await url_1.text();
            let url_r_2 = await url_2.text();
            let div_1 = document.createElement("div");
            div_1.innerHTML = url_r_1;
            let a_1 = div_1.getElementsByTagName("a");
            let div_2 = document.createElement("div");
            div_2.innerHTML = url_r_2;
            let a_2 = div_2.getElementsByTagName("a");
            let href_1 = [];
            let href_2 = [];
            for (let index = 0; index < a_1.length; index++) {
                const element_1 = a_1[index];
                const element_2 = a_2[index];
                if (element_1.href.endsWith("png")) {
                    href_1.push(element_1.href);
                };
                if (element_2.href.endsWith("mp3")) {
                    href_2.push(element_2.href);
                };
            };

            function title_PAS(url) {
                let copy_1 = [];
                for (let index = 0; index < url.length; index++) {
                    let e = url[index];
                    copy_1.push(e.split("/P_A_S/")[1].replaceAll("_", " "));
                }
                return copy_1;
            }
            let img_f = href_1;
            let song_f = href_2;
            let t_f = title_PAS(song_f);
            
            // Add this album to the global album system for prev/next functionality
            addAlbumToSystem(AB_title, song_f, img_f, t_f);
            
            console.log("Image:", AB_img);
            console.log("Title:", AB_title);
            console.log("Image URLs:", img_f);
            console.log("Song URLs:", song_f);
            console.log("Title URLs:", t_f);
            let see_html = `<div class="AB_d">
                    <div class="AB_title_box">
                        <div class="ABbox_title">
                            <h1>${AB_title}</h1>
                        </div>
                        <div class="ABbox_img">
                            <img src="${AB_img}" alt="">
                        </div>
                    </div>
                    <div class="AB_Songs_box">
                        <div class="songs_title">
                            <h3>Popular</h3>
                        </div>
                        <div class="songs_list">
                            <ul class="AB_ul">
                                
                            </ul>
                        </div>
                    </div>
                </div>`;
            document.querySelector(".box").innerHTML = see_html;
            for (let index = 0; index < song_f.length; index++) {
                let s_no = song_f[index];
                let i_no = img_f[index];
                let c_no = t_f[index];
                let all_box = `<li class="AB_li s_display" data-songs="${s_no}"> <img src="${i_no}" alt="icons" class="T_S_i"> <p class="t_display">${c_no}</p></li>`;
                document.querySelector(".AB_ul").innerHTML = document.querySelector(".AB_ul").innerHTML + all_box;
                // console.log("click See all button");
            }
            Array.from(document.querySelector(".AB_ul").getElementsByClassName("AB_li")).forEach(e => {
                e.addEventListener("click", element => {
                    let u_e = e;
                    let i_e = e.getElementsByClassName("T_S_i")[0];
                    let t_e = e.getElementsByClassName("t_display")[0];
                    console.log(`Songs: ${u_e.dataset.songs}`);
                    console.log(`Img: ${i_e.src}`);
                    console.log(`Title: ${t_e.innerHTML}`);
                    playMusic(u_e.dataset.songs, i_e.src, t_e.innerHTML);
                });
            })
        });
    });

    document.querySelector(".PAS_see").addEventListener("click", async () => {
        let u = await PAS_url();
        let t = title_PAS(u);
        let see_html = `
            <div class="see_body">
                <div class="title_box">
                    <h2>Popular albums and singles</h2>
                </div>
                <div class="ab_box">
                       
                </div>
            </div>`;
        document.querySelector(".box").innerHTML = see_html;
        for (let index = 0; index < u.length; index++) {
            let s_no = u[index];
            let st_no = t[index];
            let u_no_2 = u_2[index];
            let u_no_3 = u_3[index];
            let all_box = `<div class="card_box">
                            <div class="box_img">
                                <img src="${s_no}" alt="${s_no}" class="#"  data-fetch="${u_no_2}" id="f_img">
                                <button class="img_button" style="display: none;">
                                    <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                                </button>
                            </div>
                            <div class="box_title_IR">
                                <h5 class="s_display" data-songs="#">
                                    <a href="#" class="t_display" data-fetch="${u_no_3}" id="f_song">${st_no.replaceAll("_", " ")}</a>
                                </h5>
                            </div>
                        </div>`;
            document.querySelector(".ab_box").innerHTML = document.querySelector(".ab_box").innerHTML + all_box;
            console.log("click See all button");
        }
    });

    Array.from(document.querySelector(".PAS").getElementsByClassName("card_box")).forEach(e => {
        e.addEventListener("mouseenter", element => {
            let b_d = e.getElementsByClassName("img_button")[0];
            // Set initial position (below the card)
            b_d.style.transform = "translateY(100%)";
            b_d.style.transition = "transform 0.5s ease-in-out";
            b_d.style.display = "flex";

            // Trigger the animation to slide up from bottom
            setTimeout(() => {
                b_d.style.transform = "translateY(0)";
            }, 10);
        });
        e.addEventListener("mouseleave", element => {
            let b_d = e.getElementsByClassName("img_button")[0];
            // Animate down to bottom
            b_d.style.transform = "translateY(100%)";
            b_d.style.transition = "transform 0.5s ease-in-out";

            // Hide button after animation completes
            setTimeout(() => {
                b_d.style.display = "none";
                b_d.style.transform = "translateY(100%)"; // Reset position for next time
            }, 500);
        });
    });
};

async function getPR() {
    async function PR_img() {
        let url = await fetch("http://spotifyclone.gamer.gd/Spotify_images/P_R/");
        let url_r = await url.text();
        let div_i = document.createElement("div");
        div_i.innerHTML = url_r;
        let a = div_i.getElementsByTagName("a");
        let href_i = [];
        for (let index = 0; index < a.length; index++) {
            const element_i = a[index];
            if (element_i.href.endsWith("jpg")) {
                href_i.push(element_i.href);
            };
        };
        // console.log(href_i);
        return href_i;
    }

    async function PR2_img() {
        let url_1 = await fetch("http://spotifyclone.gamer.gd/Spotify_images/P_R/PR_songs_img/");
        let url_r = await url_1.text();
        let div_1 = document.createElement("div");
        div_1.innerHTML = url_r;
        let a_1 = div_1.getElementsByTagName("a");
        let href_1 = [];
        for (let index = 0; index < a_1.length; index++) {
            const element_i = a_1[index];
            if (element_i.href.endsWith("songs")) {
                href_1.push(element_i.href);
            };
        };
        return href_1;
    }

    async function PR2_song() {
        let url_2 = await fetch("http://spotifyclone.gamer.gd/Spotifiy_song/P_R/");
        let url_r_2 = await url_2.text();
        let div_2 = document.createElement("div");
        div_2.innerHTML = url_r_2;
        let a_2 = div_2.getElementsByTagName("a");
        let href_2 = [];
        for (let index = 3; index < a_2.length; index++) {
            const element_i = a_2[index];
            if (element_i.href.endsWith("songs")) {
                href_2.push(element_i.href);
            };
        };
        // console.log(href_2);
        return href_2;
    }

    let u = await PR_img();
    let u_2 = await PR2_img();
    let u_3 = await PR2_song();
    for (let index = 0; index < u.length; index++) {
        let u_no = u[index];
        let u_no_2 = u_2[index];
        let u_no_3 = u_3[index];
        // console.log(u_no_2);
        let html = `<div class="card_box">
                        <div class="box_img box_pr">
                            <img class="f_img" src="${u_no}" alt="${u_no}" data-fetch="${u_no_2}" >
                            <button class="img_button" style="display: none;">
                                <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                            </button>
                        </div>
                        <div class="box_title_PR title_pr">
                            <h5><a href="#" data-fetch="${u_no_3}" class="f_song"> with Artists</a></h5>
                        </div>
                    </div>`;
        // console.log(u_no);
        document.querySelector(".PR").innerHTML = document.querySelector(".PR").innerHTML + html;
    }

    // Attach event listeners AFTER creating the HTML elements
    Array.from(document.querySelector(".PR").getElementsByClassName("card_box")).forEach(e => {
        e.addEventListener("click", async () => {
            let songFetch = e.querySelector(".f_song").dataset.fetch;
            let imgFetch = e.querySelector(".f_img").dataset.fetch;
            // console.log(imgFetch);
            let url_1 = await fetch(imgFetch);
            let url_2 = await fetch(songFetch);
            let AB_img = e.querySelector(".f_img").src;
            let AB_title = e.querySelector(".f_song").innerHTML;
            // console.log("Image Fetch URL:", imgFetch);
            // console.log("Song Fetch URL:", songFetch);
            let url_r_1 = await url_1.text();
            let url_r_2 = await url_2.text();
            let div_1 = document.createElement("div");
            div_1.innerHTML = url_r_1;
            let a_1 = div_1.getElementsByTagName("a");
            let div_2 = document.createElement("div");
            div_2.innerHTML = url_r_2;
            let a_2 = div_2.getElementsByTagName("a");
            let href_1 = [];
            let href_2 = [];
            for (let index = 0; index < a_1.length; index++) {
                let element_1 = a_1[index];
                if (element_1.href.endsWith("jpg")) {
                    href_1.push(element_1.href);
                    // console.log(element_1.href);
                };
            };
            for (let index = 0; index < a_2.length; index++) {
                let element_2 = a_2[index];
                if (element_2.href.endsWith("mp3")) {
                    href_2.push(element_2.href);
                    // console.log(element_2.href);
                };
            };

            function title_PAS(url) {
                let copy_1 = [];
                for (let index = 0; index < url.length; index++) {
                    let e = url[index];
                    copy_1.push(e.split("/P_R/")[1].replaceAll("_", " "));
                }
                return copy_1;
            }
            let img_f = href_1;
            let song_f = href_2;
            let t_f = title_PAS(song_f);
            
            // Add this album to the global album system for prev/next functionality
            addAlbumToSystem(AB_title, song_f, img_f, t_f);
            
            // console.log("Image:", AB_img);
            // console.log("Title:", AB_title);
            // console.log("Image URLs:", img_f);
            // console.log("Song URLs:", song_f);
            // console.log("Title URLs:", t_f);
            let see_html = `<div class="AB_d">
                    <div class="AB_title_box">
                        <div class="ABbox_title">
                            <h1>${AB_title}</h1>
                        </div>
                        <div class="ABbox_img">
                            <img src="${AB_img}" alt="">
                        </div>
                    </div>
                    <div class="AB_Songs_box">
                        <div class="songs_title">
                            <h3>Popular</h3>
                        </div>
                        <div class="songs_list">
                            <ul class="AB_ul">
                                
                            </ul>
                        </div>
                    </div>
                </div>`;
            document.querySelector(".box").innerHTML = see_html;
            for (let index = 0; index < song_f.length; index++) {
                let s_no = song_f[index];
                let i_no = img_f[index];
                let c_no = t_f[index];
                let all_box = `<li class="AB_li s_display" data-songs="${s_no}"> <img src="${i_no}" alt="icons" class="T_S_i"> <p class="t_display">${c_no}</p></li>`;
                document.querySelector(".AB_ul").innerHTML = document.querySelector(".AB_ul").innerHTML + all_box;
                // console.log("click See all button");
            }
            Array.from(document.querySelector(".AB_ul").getElementsByClassName("AB_li")).forEach(e => {
                e.addEventListener("click", element => {
                    let u_e = e;
                    let i_e = e.getElementsByClassName("T_S_i")[0];
                    let t_e = e.getElementsByClassName("t_display")[0];
                    console.log(`Songs: ${u_e.dataset.songs}`);
                    console.log(`Img: ${i_e.src}`);
                    console.log(`Title: ${t_e.innerHTML}`);
                    playMusic(u_e.dataset.songs, i_e.src, t_e.innerHTML);
                });
            })
        });
    });

    document.querySelector(".PR_see").addEventListener("click", async () => {
        let u = await PR_img();
        let see_html = `
            <div class="see_body">
                <div class="title_box">
                    <h2>Popular radio</h2>
                </div>
                <div class="ab_box">
                       
                </div>
            </div>`;
        document.querySelector(".box").innerHTML = see_html;
        for (let index = 0; index < u.length; index++) {
            let s_no = u[index];
            let all_box = `<div class="card_box">
                            <div class="box_img">
                                <img src="${s_no}" alt="${s_no}" class="#">
                                <button class="img_button" style="display: none;">
                                    <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                                </button>
                            </div>
                            <div class="box_title_IR">
                                <h5 class="s_display" data-songs="#">
                                    <a href="#" class="t_display"> with Artists</a>
                                </h5>
                            </div>
                        </div>`;
            document.querySelector(".ab_box").innerHTML = document.querySelector(".ab_box").innerHTML + all_box;
            console.log("click See all button");
        }
    });

    Array.from(document.querySelector(".PR").getElementsByClassName("card_box")).forEach(e => {
        e.addEventListener("mouseenter", element => {
            let b_d = e.getElementsByClassName("img_button")[0];
            // Set initial position (below the card)
            b_d.style.transform = "translateY(100%)";
            b_d.style.transition = "transform 0.5s ease-in-out";
            b_d.style.display = "flex";

            // Trigger the animation to slide up from bottom
            setTimeout(() => {
                b_d.style.transform = "translateY(0)";
            }, 10);
        });
        e.addEventListener("mouseleave", element => {
            let b_d = e.getElementsByClassName("img_button")[0];
            // Animate down to bottom
            b_d.style.transform = "translateY(100%)";
            b_d.style.transition = "transform 0.5s ease-in-out";

            // Hide button after animation completes
            setTimeout(() => {
                b_d.style.display = "none";
                b_d.style.transform = "translateY(100%)"; // Reset position for next time
            }, 500);
        });
    });
}

async function getFC() {
    async function FC_img() {
        let url = await fetch("http://spotifyclone.gamer.gd/Spotify_images/F_C/");
        let url_r = await url.text();
        let div_i = document.createElement("div");
        div_i.innerHTML = url_r;
        let a = div_i.getElementsByTagName("a");
        let href_i = [];
        for (let index = 0; index < a.length; index++) {
            const element_i = a[index];
            if (element_i.href.endsWith("jpg")) {
                href_i.push(element_i.href);
            };
        };
        // console.log(href_i);
        return href_i;
    }

    async function FC2_img() {
        let url_1 = await fetch("http://spotifyclone.gamer.gd/Spotify_images/F_C/");
        let url_r = await url_1.text();
        let div_1 = document.createElement("div");
        div_1.innerHTML = url_r;
        let a_1 = div_1.getElementsByTagName("a");
        let href_1 = [];
        for (let index = 0; index < a_1.length; index++) {
            const element_i = a_1[index];
            if (element_i.href.endsWith("songs")) {
                href_1.push(element_i.href);
            };
        };
        return href_1;
    }

    async function F_C2_song() {
        let url_2 = await fetch("http://spotifyclone.gamer.gd/Spotifiy_song/F_C/");
        let url_r_2 = await url_2.text();
        let div_2 = document.createElement("div");
        div_2.innerHTML = url_r_2;
        let a_2 = div_2.getElementsByTagName("a");
        let href_2 = [];
        for (let index = 3; index < a_2.length; index++) {
            const element_i = a_2[index];
            if (element_i.href.endsWith("songs")) {
                href_2.push(element_i.href);
            };
        };
        // console.log(href_2);
        return href_2;
    }

    let u = await FC_img();
    let u_2 = await FC2_img();
    let u_3 = await F_C2_song();
    for (let index = 0; index < u.length; index++) {
        let u_no = u[index];
        let u_no_2 = u_2[index];
        let u_no_3 = u_3[index];
        let html = `<div class="card_box">
                        <div class="box_img box_fc">
                            <img src="${u_no}" alt="" data-fetch="${u_no_2}" id="f_img">
                            <button class="img_button" style="display: none;">
                                <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                            </button>
                        </div>
                        <div class="box_title_FC title_fc">
                            <h5><a href="#" data-fetch="${u_no_3}" id="f_song">Your weekly update of the most played tracks right now - Global.</a></h5>
                        </div>
                    </div>`;
        // console.log(u_no);
        document.querySelector(".FC").innerHTML = document.querySelector(".FC").innerHTML + html;
    }

    Array.from(document.querySelector(".FC").getElementsByClassName("card_box")).forEach(e => {
        e.addEventListener("click", async () => {
            let imgFetch = e.querySelector("#f_img").dataset.fetch;
            let songFetch = e.querySelector("#f_song").dataset.fetch;
            let AB_img = e.querySelector("#f_img").src;
            let AB_title = e.querySelector("#f_song").innerHTML;
            console.log("Image Fetch URL:", imgFetch);
            console.log("Song Fetch URL:", songFetch);
            let url_1 = await fetch(imgFetch);
            let url_2 = await fetch(songFetch);
            let url_r_1 = await url_1.text();
            let url_r_2 = await url_2.text();
            let div_1 = document.createElement("div");
            div_1.innerHTML = url_r_1;
            let a_1 = div_1.getElementsByTagName("a");
            let div_2 = document.createElement("div");
            div_2.innerHTML = url_r_2;
            let a_2 = div_2.getElementsByTagName("a");
            let href_1 = [];
            let href_2 = [];
            for (let index = 0; index < a_1.length; index++) {
                const element_1 = a_1[index];
                const element_2 = a_2[index];
                if (element_1.href.endsWith("png")) {
                    href_1.push(element_1.href);
                };
                if (element_2.href.endsWith("mp3")) {
                    href_2.push(element_2.href);
                };
            };

            function title_FC(url) {
                let copy_1 = [];
                for (let index = 0; index < url.length; index++) {
                    let e = url[index];
                    copy_1.push(e.split("/F_C/")[1].replaceAll("_", " "));
                }
                return copy_1;
            }
            let img_f = href_1;
            let song_f = href_2;
            let t_f = title_FC(song_f);
            
            // Add this album to the global album system for prev/next functionality
            addAlbumToSystem(AB_title, song_f, img_f, t_f);
            
            console.log("Image:", AB_img);
            console.log("Title:", AB_title);
            console.log("Image URLs:", img_f);
            console.log("Song URLs:", song_f);
            console.log("Title URLs:", t_f);
            let see_html = `<div class="AB_d">
                    <div class="AB_title_box">
                        <div class="ABbox_title">
                            <h1>Featured Charts</h1>
                        </div>
                        <div class="ABbox_img">
                            <img src="${AB_img}" alt="">
                        </div>
                    </div>
                    <div class="AB_Songs_box">
                        <div class="songs_title">
                            <h3>Popular</h3>
                        </div>
                        <div class="songs_list">
                            <ul class="AB_ul">
                                
                            </ul>
                        </div>
                    </div>
                </div>`;
            document.querySelector(".box").innerHTML = see_html;
            for (let index = 0; index < song_f.length; index++) {
                let s_no = song_f[index];
                let i_no = img_f[index];
                let c_no = t_f[index];
                let all_box = `<li class="AB_li s_display" data-songs="${s_no}"> <img src="${i_no}" alt="icons" class="T_S_i"> <p class="t_display">${c_no}</p></li>`;
                document.querySelector(".AB_ul").innerHTML = document.querySelector(".AB_ul").innerHTML + all_box;
                // console.log("click See all button");
            }
            Array.from(document.querySelector(".AB_ul").getElementsByClassName("AB_li")).forEach(e => {
                e.addEventListener("click", element => {
                    let u_e = e;
                    let i_e = e.getElementsByClassName("T_S_i")[0];
                    let t_e = e.getElementsByClassName("t_display")[0];
                    console.log(`Songs: ${u_e.dataset.songs}`);
                    console.log(`Img: ${i_e.src}`);
                    console.log(`Title: ${t_e.innerHTML}`);
                    playMusic(u_e.dataset.songs, i_e.src, t_e.innerHTML);
                });
            })
        });
    });

    document.querySelector(".FC_see").addEventListener("click", async () => {
        let u = await FC_img();
        let see_html = `
            <div class="see_body">
                <div class="title_box">
                    <h2>Popular radio</h2>
                </div>
                <div class="ab_box">
                       
                </div>
            </div>`;
        document.querySelector(".box").innerHTML = see_html;
        for (let index = 0; index < u.length; index++) {
            let s_no = u[index];
            let all_box = `<div class="card_box">
                            <div class="box_img">
                                <img src="${s_no}" alt="${s_no}" class="#">
                                <button class="img_button" style="display: none;">
                                    <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                                </button>
                            </div>
                            <div class="box_title_IR">
                                <h5 class="s_display" data-songs="#">
                                    <a href="#" class="t_display"> with Artists</a>
                                </h5>
                            </div>
                        </div>`;
            document.querySelector(".ab_box").innerHTML = document.querySelector(".ab_box").innerHTML + all_box;
            console.log("click See all button");
        }
    });

    Array.from(document.querySelector(".FC").getElementsByClassName("card_box")).forEach(e => {
        e.addEventListener("mouseenter", element => {
            let b_d = e.getElementsByClassName("img_button")[0];
            // Set initial position (below the card)
            b_d.style.transform = "translateY(100%)";
            b_d.style.transition = "transform 0.5s ease-in-out";
            b_d.style.display = "flex";

            // Trigger the animation to slide up from bottom
            setTimeout(() => {
                b_d.style.transform = "translateY(0)";
            }, 10);
        });
        e.addEventListener("mouseleave", element => {
            let b_d = e.getElementsByClassName("img_button")[0];
            // Animate down to bottom
            b_d.style.transform = "translateY(100%)";
            b_d.style.transition = "transform 0.5s ease-in-out";

            // Hide button after animation completes
            setTimeout(() => {
                b_d.style.display = "none";
                b_d.style.transform = "translateY(100%)"; // Reset position for next time
            }, 500);
        });
    });
}

async function getI_R() {
    async function songs() {
        let song = await fetch("http://spotifyclone.gamer.gd/Spotifiy_song/I_R/");
        let song_r = await song.text();
        let div_s = document.createElement("div");
        div_s.innerHTML = song_r;
        let a = div_s.getElementsByTagName("a");
        let href_s = [];
        for (let index = 0; index < a.length; index++) {
            const element_s = a[index];
            if (element_s.href.endsWith("mp3")) {
                href_s.push(element_s.href);
            };
        };
        return href_s;
    }

    function title(array) {
        let copy = [];
        for (let index = 0; index < array.length; index++) {
            let e = array[index];
            copy.push(e.split("/I_R/")[1]);
        }
        return copy;
    }

    async function image() {
        let image = await fetch("http://spotifyclone.gamer.gd/Spotify_images/I_R/");
        let image_r = await image.text();
        let div_i = document.createElement("div");
        div_i.innerHTML = image_r;
        let i = div_i.getElementsByTagName("a");
        let href_i = [];
        for (let index = 0; index < i.length; index++) {
            const element_i = i[index];
            if (element_i.href.endsWith("png")) {
                href_i.push(element_i.href);
            };
        };
        return href_i;
    }
    let s = await songs();
    let i = await image();
    let c = title(s);
    
    // Add this album to the global album system for prev/next functionality
    addAlbumToSystem("India Best", s, i, c);
    for (let index = 0; index < s.length; index++) {
        let s_no = s[index];
        let i_no = i[index];
        let c_no = c[index];
        let html = `<div class="card_box">
             <div class="box_img">
                <img src="${i_no}" alt="${i_no}" class="I_R_i">
                <button class="img_button" style="display: none;">
                    <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                </button>
            </div>
            <div class="box_title_IR">
                <h5 class="s_display" data-songs="${s_no}"><a href="#" class="t_display">${c_no.replaceAll("_", " ")}</a></h5>
            </div>`;
        document.querySelector(".IR").innerHTML = document.querySelector(".IR").innerHTML + html;
        // console.log(s_no);
        // console.log(`${c_no.replaceAll("%20"," ")}`);
    }

    document.querySelector(".IR_see").addEventListener("click", async () => {
        let s = await songs();
        let i = await image();
        let c = title(s);
        let see_html = `
            <div class="see_body">
                <div class="title_box">
                    <h2>India Best</h2>
                </div>
                <div class="ab_box">
                       
                </div>
            </div>`;
        document.querySelector(".box").innerHTML = see_html;
        for (let index = 0; index < s.length; index++) {
            let s_no = s[index];
            let i_no = i[index];
            let c_no = c[index];
            let all_box = `<div class="card_box">
             <div class="box_img">
                <img src="${i_no}" alt="${i_no}" class="I_R_i">
                <button class="img_button" style="display: none;">
                    <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                </button>
            </div>
            <div class="box_title_IR">
                <h5 class="s_display" data-songs="${s_no}"><a href="#" class="t_display">${c_no.replaceAll("_", " ")}</a></h5>
            </div>`;
            document.querySelector(".ab_box").innerHTML = document.querySelector(".ab_box").innerHTML + all_box;
            // console.log("click See all button");
        }

        Array.from(document.querySelector(".ab_box").getElementsByClassName("card_box")).forEach(e => {
            e.addEventListener("click", element => {
                let u_e = e.getElementsByClassName("s_display")[0];
                let i_e = e.getElementsByClassName("T_S_i")[0];
                let t_e = e.getElementsByClassName("t_display")[0];
                let b_d = e.getElementsByClassName("img_button")[0];
                b_d.style.display = "flex";
                console.log(`Songs: ${u_e.dataset.songs}`);
                console.log(`Img: ${i_e.src}`);
                console.log(`Title: ${t_e.innerHTML}`);
                playMusic(u_e.dataset.songs, i_e.src, t_e.innerHTML);
            });
        })
    });

    Array.from(document.querySelector(".IR").getElementsByClassName("card_box")).forEach(e => {
        e.addEventListener("click", element => {
            let u_e = e.getElementsByClassName("s_display")[0];
            let i_e = e.getElementsByClassName("I_R_i")[0];
            let t_e = e.getElementsByClassName("t_display")[0];
            let b_d = e.getElementsByClassName("img_button")[0];
            b_d.style.display = "flex";
            console.log(`Songs: ${u_e.dataset.songs}`);
            console.log(`Img: ${i_e.src}`);
            console.log(`Title: ${t_e.innerHTML}`);
            playMusic(u_e.dataset.songs, i_e.src, t_e.innerHTML);
        });
    })

    Array.from(document.querySelector(".IR").getElementsByClassName("card_box")).forEach(e => {
        e.addEventListener("mouseenter", element => {
            let b_d = e.getElementsByClassName("img_button")[0];
            // Set initial position (below the card)
            b_d.style.transform = "translateY(100%)";
            b_d.style.transition = "transform 0.5s ease-in-out";
            b_d.style.display = "flex";

            // Trigger the animation to slide up from bottom
            setTimeout(() => {
                b_d.style.transform = "translateY(0)";
            }, 10);
        });
        e.addEventListener("mouseleave", element => {
            let b_d = e.getElementsByClassName("img_button")[0];
            // Animate down to bottom
            b_d.style.transform = "translateY(100%)";
            b_d.style.transition = "transform 0.5s ease-in-out";

            // Hide button after animation completes
            setTimeout(() => {
                b_d.style.display = "none";
                b_d.style.transform = "translateY(100%)"; // Reset position for next time
            }, 200);
        });
    });
};

function playMusic(url, src, title) {
    try {
        let a = url;
        b_t = src;
        c_t = title;
        // console.log("c_t :- ", c_t);
        audio_title = title;

        // Update UI elements with error checking
        const titleElement = document.querySelector(".spb-title");
        const albumArtElement = document.querySelector(".spb-album-art");
        
        if (titleElement) {
            titleElement.innerHTML = `<p>${c_t}</p>`;
        }
        if (albumArtElement) {
            albumArtElement.src = `${b_t}`;
        }

    // Set initial play button state
    document.querySelector(".spb-play").innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="black">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>`;

    // Pause current audio before loading new one
    currentSoung.pause();

    // Set audio source and play
    currentSoung.src = `${a}`;

    // Add error handling for audio loading
    currentSoung.addEventListener('error', (e) => {
        console.error('Error loading audio:', e);
        alert('Error loading audio file. Please try again.');
    });

    // Play the audio
    currentSoung.play().catch(error => {
        console.error('Error playing audio:', error);
        alert('Error playing audio. Please try again.');
    });

    // Remove existing event listeners by cloning and replacing the element
    const playButton = document.querySelector(".spb-play");
    const newPlayButton = playButton.cloneNode(true);
    playButton.parentNode.replaceChild(newPlayButton, playButton);

    // Add new event listener
    newPlayButton.addEventListener("click", () => {
        if (currentSoung.paused) {
            currentSoung.play().catch(error => {
                console.error('Error playing audio:', error);
            });
            newPlayButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="black">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>`;
        }
        else {
            currentSoung.pause();
            newPlayButton.innerHTML = `
             <svg height="32" width="32" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="#fff" />
                <polygon points="13,10 24,16 13,22" fill="#000" />
            </svg>`;
        };
    });

    // Remove existing timeupdate listener and add new one
    currentSoung.removeEventListener("timeupdate", updateTimeDisplay);
    currentSoung.addEventListener("timeupdate", updateTimeDisplay);
    } catch (error) {
        console.error('Error in playMusic function:', error);
        alert('Error playing music. Please try again.');
    }
}

// Separate function for time update to avoid multiple listeners
function updateTimeDisplay() {
    try {
        const currentElement = document.querySelector(".spb-current");
        const durationElement = document.querySelector(".spb-duration");
        const slider = document.querySelector(".spb-slider");
        
        if (currentElement) {
            currentElement.innerHTML = `${secondsToMinutesSeconds(currentSoung.currentTime)}`;
        }
        if (durationElement) {
            durationElement.innerHTML = `${secondsToMinutesSeconds(currentSoung.duration)}`;
        }

        // Set the range input min, max, and value to match audio time in seconds
        if (slider) {
            slider.min = 0;
            slider.max = isNaN(currentSoung.duration) ? 0 : Math.floor(currentSoung.duration);

            // Only update slider value if the user is not currently dragging it
            if (!slider.dragging) {
                slider.value = Math.floor(currentSoung.currentTime);
            }

            // Add event listener to allow user to change audio current time by moving the slider
            if (!slider.hasListener) {
                slider.addEventListener("input", function () {
                    currentSoung.currentTime = slider.value;
                });
                slider.hasListener = true; // Prevent adding multiples listeners
            }
        }
    } catch (error) {
        console.error('Error in updateTimeDisplay:', error);
    }
}

let prev = document.querySelector(".spb-prev");
if (prev) {
    prev.addEventListener("click", () => {
        playPreviousSong();
    });
}

let next = document.querySelector(".spb-next");
if (next) {
    next.addEventListener("click", () => {
        playNextSong();
    });
}

const navButton = document.querySelector(".button-nav");
if (navButton) {
    navButton.addEventListener("click", () => {
    let nav = document.getElementsByTagName("nav")[0];
    // Set initial position (off-screen to the right)
    nav.style.transform = "translateX(100%)";
    nav.style.transition = "transform 0.3s ease-in-out";
    nav.style.display = "flex";

    // Trigger the animation to slide in from right to left
    setTimeout(() => {
        nav.style.transform = "translateX(0)";
    }, 10);
    });
}

const backButton = document.querySelector(".back_buttom");
if (backButton) {
    backButton.addEventListener("click", () => {
    let nav = document.querySelector("nav");
    // Animate out from left to right
    nav.style.transform = "translateX(100%)";
    nav.style.transition = "transform 0.3s ease-in-out";

    // Hide nav after animation completes
    setTimeout(() => {
        nav.style.display = "none";
        nav.style.transform = "translateX(100%)"; // Reset position for next time
    }, 300);
    });
}

getT_S();
getPA();
getPAS();
getPR();
getFC();
getI_R();