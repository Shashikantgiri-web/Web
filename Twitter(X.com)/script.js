let for_you = document.querySelector(".For_you")
let bl_1 = document.querySelector(".blue-line_1")
let following = document.querySelector(".Following")
let bl_2 = document.querySelector(".blue-line_2")
let main = document.querySelector(".main_box")
let wb = `<div class="w-[99%] h-[auto] flex justify-center lg:justify-end items-center welcome_box">
                        <div class="w-[90%] lg:w-[70%] h-[auto] flex flex-col justify-center items-start gap-[8px]">
                            <div class="w-[80%] h-[auto] flex justify-start items-center p-[5px] mt-[40px] ">
                                <h1 class="text-3xl font-bold">Welcome to X!</h1>
                            </div>
                            <div class="w-[80%] h-[80px] flex justify-center items-center p-[5px] text-gray-500 mb-[10px]">
                                <p class="text-inherit ">This is the best place to see what’s happening in your world. Find
                                    some people and topics to
                                    follow now.
                                </p>
                            </div>
                            <div class="w-[80%] h-[auto] flex justify-start items-center p-[5px]">
                                <button
                                    class="w-[40%] h-[50px] bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full flex justify-center items-center">
                                    <a href="#">
                                        Let's go!
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>`
let cb = `<div class="w-[99%] h-[auto] flex flex-row justify-end items-start border-2 border-r-black border-b-[#2f3336] border-l-black border-t-[#2f3336] content_box">
                        <div class="w-[10%] h-[20%] flex justify-center items-start">
                            <div class="rounded-full w-9 h-9 flex justify-center items-center mt-[6px] bg-blue-950">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                    style="enable-background:new 0 0 32 32" xml:space="preserve" class="w-6">
                                    <path
                                        d="M12 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM19.942 32H4.058A4.062 4.062 0 0 1 0 27.942c0-6.616 5.383-12 12-12s12 5.384 12 12A4.062 4.062 0 0 1 19.942 32zM12 17.942c-5.514 0-10 4.486-10 10A2.06 2.06 0 0 0 4.058 30h15.884A2.06 2.06 0 0 0 22 27.942c0-5.514-4.486-10-10-10z" />
                                    <path
                                        d="M20 16.942c-1.413 0-2.759.276-4 .762 4.095 1.601 7 5.576 7 10.238A3.058 3.058 0 0 1 19.942 31h8A3.058 3.058 0 0 0 31 27.942c0-6.075-4.925-11-11-11zM20 1a5.97 5.97 0 0 0-4 1.537 5.978 5.978 0 0 1 0 8.926A5.97 5.97 0 0 0 20 13a6 6 0 1 0 0-12z" />
                                    <path
                                        d="M27.942 32h-8a1 1 0 1 1 0-2A2.06 2.06 0 0 0 22 27.942c0-4.142-2.498-7.795-6.364-9.307a1 1 0 0 1 0-1.863c1.408-.55 2.877-.83 4.364-.83 6.617 0 12 5.384 12 12A4.062 4.062 0 0 1 27.942 32zm-4.504-2h4.504A2.06 2.06 0 0 0 30 27.942c0-5.514-4.486-10-10-10-.419 0-.836.027-1.251.08C22.004 20.22 24 23.886 24 27.942c0 .75-.205 1.454-.562 2.058zM20 14a6.984 6.984 0 0 1-4.667-1.792.999.999 0 0 1-.001-1.489C16.392 9.77 17 8.413 17 7s-.607-2.768-1.668-3.72a1.002 1.002 0 0 1 .001-1.488A6.984 6.984 0 0 1 20 0c3.86 0 7 3.14 7 7s-3.14 7-7 7zm-2.503-2.677c.758.44 1.62.677 2.503.677 2.757 0 5-2.243 5-5s-2.243-5-5-5c-.884 0-1.745.236-2.503.677C18.463 3.903 19 5.426 19 7s-.537 3.097-1.503 4.323z" />
                                </svg>
                            </div>
                        </div>
                        <div class="w-[90%] h-[99%] flex flex-col justify-center ">
                            <div class="w-[99%] h-[auto] flex flex-row justify-between items-center p-[5px]">
                                <div
                                    class="w-[90%] md:w-[80%] h-[99%] flex flex-row justify-start items-center gap-[0px] sm:gap-[5px]">
                                    <p class="font-bold cursor-pointer text-base">Marvel Entertainment</p>
                                    <p class="font-bold cursor-pointer text-sm text-gray-500">@Marvel</p>
                                    <p>·</p>
                                    <p class="font-bold cursor-pointer text-sm text-gray-500">Sep 3</p>
                                </div>
                                <div
                                    class=" w-[10%] md:w-[20%] h-[99%] flex justify-center items-center cursor-pointer hover:bg-[#2f3336] rounded-full p-[1%] md:p-2">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"
                                        class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi invert w-[20px] fill-gray-500">
                                        <g>
                                            <path
                                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="w-[99%] h-[auto] flex flex-col justify-between items-center p-[5px] gap-[5px]">
                                <div class="w-[99%] h-[auto] flex justify-between items-center">
                                    <p>
                                        The Web of Life & Destiny just gained a new card, and it connects everything. 🕸️
                                        Introducing the exclusive #MTGxSpiderMan preview card: #SpiderVerse!
                                    </p>
                                </div>
                                <div class="w-[99%] h-[auto] flex justify-between items-center">
                                    <p>
                                        Find more of the cards in this set on the @wizards_magicwebsite. #MTGxMarvel
                                    </p>
                                </div>
                            </div>
                            <div class="w-[99%] h-[auto] flex justify-between items-center p-[5px] gap-[5px]">
                                <img src="https://pbs.twimg.com/media/Gz7ioDrW8AA_OBU?format=jpg&name=900x900"
                                    alt="spiderman" class="w-[99%] h-[auto] rounded-lg">
                            </div>
                            <div class="w-[99%] h-[auto] flex flex-row justify-between items-center p-[5px]">
                                <div
                                    class="w-[20%] h-[50px] flex flex-row justify-start items-center p-[5px] gap-[5px] cursor-pointer">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"
                                        class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-50lct3 r-1srniue fill-white w-[25px] hover:fill-blue-500">
                                        <g>
                                            <path
                                                d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z">
                                            </path>
                                        </g>
                                    </svg>
                                    <span class="hover:text-blue-500">0</span>
                                </div>
                                <div
                                    class="w-[20%] h-[50px] flex flex-row justify-start items-center p-[5px] gap-[5px] cursor-pointer">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"
                                        class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-50lct3 r-1srniue fill-white w-[25px] hover:fill-blue-500">
                                        <g>
                                            <path
                                                d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z">
                                            </path>
                                        </g>
                                    </svg>
                                    <span class="hover:text-blue-500">0</span>
                                </div>
                                <div
                                    class="w-[20%] h-[50px] flex flex-row justify-start items-center p-[5px] gap-[5px] cursor-pointer">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"
                                        class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-50lct3 r-1srniue fill-white w-[25px] hover:fill-blue-500">
                                        <g>
                                            <path
                                                d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z">
                                            </path>
                                        </g>
                                    </svg>
                                    <span class="hover:text-blue-500">0</span>
                                </div>
                                <div
                                    class="w-[20%] h-[50px] flex flex-row justify-start items-center p-[5px] gap-[5px] cursor-pointer">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"
                                        class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-50lct3 r-1srniue fill-white w-[25px] hover:fill-blue-500">
                                        <g>
                                            <path
                                                d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z">
                                            </path>
                                        </g>
                                    </svg>
                                    <span class="hover:text-blue-500">0</span>
                                </div>
                                <div
                                    class="w-[20%] h-[50px] flex flex-row justify-start items-center p-[5px] gap-[5px] cursor-pointer">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"
                                        class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-50lct3 r-1srniue fill-white w-[25px] hover:fill-blue-500">
                                        <g>
                                            <path
                                                d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z">
                                            </path>
                                        </g>
                                    </svg>
                                    <span class="hover:text-blue-500">0</span>
                                </div>
                            </div>
                        </div>
                    </div>`

for_you.addEventListener("click", () => {
    bl_1.style.display = "block"
    bl_2.style.display = "none"
    main.innerHTML = `${wb}`
})
following.addEventListener("click", () => {
    bl_2.style.display = "block"
    bl_1.style.display = "none"
    main.innerHTML = `${cb}`
})