let currentSoung = new Audio();
let s, i, c, b_t, c_t;

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

let audio_title;
async function getT_S() {
    async function songs() {
        let song = await fetch("http://127.0.0.1:5500/Spotifiy_song/T_S/");
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
        let image = await fetch("http://127.0.0.1:5500/Spotify_images/T_S/");
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
    s = await songs();
    i = await image();
    c = title(s);
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
                <h5 class="s_display" data-songs="${s_no}"><a href="#" class="t_display">${c_no.replaceAll("%20", " ")}</a></h5>
            </div>`;
        document.querySelector(".TS").innerHTML = document.querySelector(".TS").innerHTML + html;
        // console.log(s_no);
        // console.log(`${c_no.replaceAll("%20"," ")}`);
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
        let url = await fetch("http://127.0.0.1:5500/Spotify_images/P_A/");
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
    let t = title_PA(u);
    for (let index = 0; index < u.length; index++) {
        let u_no = u[index];
        let t_no = t[index];
        let html = `
            <div class="card_box">
                <div class="box_img_2">
                    <img src="${u_no}" alt="${u_no}">
                    <button class="img_button" style="display: none;">
                        <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                    </button>
                </div>
                <div class="box_title_PA">
                    <h5><a href="#">${t_no.replaceAll("%20", " ")}</a></h5>
                    <p><a href="#">Artist</a></p>
                </div>
            </div>`;
        document.querySelector(".PA").innerHTML = document.querySelector(".PA").innerHTML + html;
    }
    Array.from(document.querySelector(".PA").getElementsByClassName("card_box")).forEach(e => {
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

async function getPAS() {
    async function PAS_url() {
        let url = await fetch("http://127.0.0.1:5500/Spotify_images/P_A_S/");
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
    let u = await PAS_url();
    let t = title_PAS(u);
    for (let index = 0; index < u.length; index++) {
        let u_no = u[index];
        let t_no = t[index];
        let html = `<div class="card_box">
                        <div class="box_img">
                            <img src="${u_no}" alt="${u_no}">
                            <button class="img_button" style="display: none;">
                                <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                            </button>
                        </div>
                        <div class="box_title_PAS">
                            <h5><a href="#">${t_no.replaceAll("%20", " ")}</a></h5>
                            <p><a href="#"></a></p>
                        </div>
                    </div>`;
        document.querySelector(".PAS").innerHTML = document.querySelector(".PAS").innerHTML + html;
    }
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
}

async function getPR() {
    async function PR_img() {
        let url = await fetch("http://127.0.0.1:5500/Spotify_images/P_R/");
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
    let u = await PR_img();
    for (let index = 0; index < u.length; index++) {
        let u_no = u[index];
        let html = `<div class="card_box">
                        <div class="box_img box_pr">
                            <img src="${u_no}" alt="">
                            <button class="img_button" style="display: none;">
                                <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                            </button>
                        </div>
                        <div class="box_title_PR title_pr">
                            <h5><a href="#"> with Artists</a></h5>
                        </div>
                    </div>`;
        // console.log(u_no);
        document.querySelector(".PR").innerHTML = document.querySelector(".PR").innerHTML + html;
    }
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
        let url = await fetch("http://127.0.0.1:5500/Spotify_images/F_C/");
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
    let u = await FC_img();
    for (let index = 0; index < u.length; index++) {
        let u_no = u[index];
        let html = `<div class="card_box">
                        <div class="box_img box_fc">
                            <img src="${u_no}" alt="">
                            <button class="img_button" style="display: none;">
                                <img src="https://cdn-icons-png.flaticon.com/128/9073/9073187.png" alt="">
                            </button>
                        </div>
                        <div class="box_title_FC title_fc">
                            <h5><a href="#">Your weekly update of the most played tracks right now - Global.</a></h5>
                        </div>
                    </div>`;
        // console.log(u_no);
        document.querySelector(".FC").innerHTML = document.querySelector(".FC").innerHTML + html;
    }
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

function playMusic(url, src, title) {
    let a = url;
    b_t = src;
    c_t = title;
    console.log("c_t :- ", c_t);
    audio_title = title;
    
    // Update UI elements
    document.querySelector(".spb-title").innerHTML = `<p>${c_t}</p>`;
    document.querySelector(".spb-album-art").src = `${b_t}`;
    
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
}

// Separate function for time update to avoid multiple listeners
function updateTimeDisplay() {
    document.querySelector(".spb-current").innerHTML = `${secondsToMinutesSeconds(currentSoung.currentTime)}`;
    document.querySelector(".spb-duration").innerHTML = `${secondsToMinutesSeconds(currentSoung.duration)}`;
    
    // Set the range input min, max, and value to match audio time in seconds
    const slider = document.querySelector(".spb-slider");
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

let prev = document.querySelector(".spb-prev");
prev.addEventListener("click", () => {
    // Check if arrays are loaded and a song is currently playing
    if (!s || !i || !c || !c_t) {
        console.log("No song currently playing or arrays not loaded");
        return;
    }
    
    // Find current song index using the title instead of src for better reliability
    let currentIndex = -1;
    for (let i = 0; i < c.length; i++) {
        if (c[i].replaceAll("%20", " ") === c_t) {
            currentIndex = i;
            break;
        }
    }
    
    if (currentIndex > 0) {
        console.log("Prev :- ", (c[currentIndex - 1]).replaceAll("%20", " "));
        playMusic(s[currentIndex - 1], i[currentIndex - 1], (c[currentIndex - 1]).replaceAll("%20", " "));
    } else {
        console.log("Already at first song");
    }
});

let next = document.querySelector(".spb-next");
next.addEventListener("click", () => {
    // Check if arrays are loaded and a song is currently playing
    if (!s || !i || !c || !c_t) {
        console.log("No song currently playing or arrays not loaded");
        return;
    }
    
    // Find current song index using the title instead of src for better reliability
    let currentIndex = -1;
    for (let i = 0; i < c.length; i++) {
        if (c[i].replaceAll("%20", " ") === c_t) {
            currentIndex = i;
            break;
        }
    }
    
    if (currentIndex >= 0 && currentIndex < c.length - 1) {
        console.log("Next :- ", (c[currentIndex + 1]).replaceAll("%20", " "));
        playMusic(s[currentIndex + 1], i[currentIndex + 1], (c[currentIndex + 1]).replaceAll("%20", " "));
    } else {
        console.log("Already at last song");
    }
});


getT_S();
getPA();
getPAS();
getPR();
getFC();

document.querySelector(".button-nav").addEventListener("click", () => {
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

document.querySelector(".back_buttom").addEventListener("click", () => {
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
