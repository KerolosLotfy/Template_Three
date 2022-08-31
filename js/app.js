const sections = document.querySelectorAll("section");
// selectation active section when scrolling
document.onscroll = () => {
    sections.forEach((section) => {
        if (section.getBoundingClientRect().y < 200) {
            sections.forEach((section) => {
                section.classList.remove("active");
            });
            section.classList.add("active");
        }
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////
// make counter

const days = document.getElementById('days').children[0];
const hours = document.getElementById('hours').children[0];
const mins = document.getElementById('mins').children[0];
const secs = document.getElementById('secs').children[0];

window.addEventListener("load", counter);

function counter() {
    setInterval(() => {
        secs.textContent -= 1;
        if (secs.textContent == 0) {
            secs.textContent = 60;
            mins.textContent -= 1;
            if (mins.textContent == 0) {
                mins.textContent = 60;
                hours.textContent -= 1;
                if (hours.textContent == 0) {
                    hours.textContent = 24;
                    days.textContent -= 1;
                    if (days.textContent == 0) {
                        days.textContent = 1;
                    }
                }
            }
        }
        window.localStorage.setItem("seconds", secs.textContent)
        window.localStorage.setItem("Minutes", mins.textContent)
        window.localStorage.setItem("Hours", hours.textContent)
        window.localStorage.setItem("Days", days.textContent)
    }, 1000);
};



if (window.localStorage.seconds === "" || window.localStorage.seconds === undefined ) {
    secs.textContent = 60;
    mins.textContent = 60;
    hours.textContent = 1;
    days.textContent = 1;
} else {
    secs.textContent = window.localStorage.getItem('seconds');
    mins.textContent = window.localStorage.getItem('Minutes');
    hours.textContent = window.localStorage.getItem('Hours');
    days.textContent = window.localStorage.getItem('Days');
}

///////////////////////////////////////////////////////////////////////////////////////////////

const scrollUp = document.getElementById("scroll-up");

// add scroll event to show / hide  scroll top icon 
document.addEventListener("scroll", () => {
    if (scrollY > 400) {
        scrollUp.classList.add("show-up");
    } else {
        scrollUp.classList.remove("show-up");
    }
})
// add click event for scroll top icon to scroll to top   
scrollUp.addEventListener("click", () => {
    window.scrollTo({ behavior: "smooth", top: 0 })
})

///////////////////////////////////////////////////////////////////////////////////////////////

// function to increase Numbers of Stats when scrolling to active stats section
const stats_nums = document.querySelectorAll(".num");
let once = false;
window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        if (section.id === "stats" && section.getBoundingClientRect().y <= 0 && section.getBoundingClientRect().y > -20) {
            if (!once) {
                increaseNumbers();
            }
        };
    });
});

// increase Numbers function 
function increaseNumbers() {
    stats_nums.forEach((num) => {
        let increase = 0;
        const finish = parseInt(num.id);
        let counter = setInterval(() => {
            num.innerHTML = increase++;
            if (num.innerHTML == finish) {
                clearInterval(counter);

            }
        }, 10);
        once = true;
    });
}



// time Line video
const timeLine = document.querySelectorAll("#timeLine li");
const video = document.querySelector(".video iframe")

// timeLine.forEach((time) => {
//     time.addEventListener("click", () => {
//         let timeNumber = time.children[time.children.length - 1].textContent;
//         let t_hrs;
//         let t_mins;
//         let t_secs;
//         let t;
//         if (timeNumber.split(":").length === 1) {
//             t_secs = parseInt(timeNumber.split(":")[0]);
//             t = t_secs;
//             console.log(t);
//         } else if (timeNumber.split(":").length === 2) {
//             t_mins = parseInt(timeNumber.split(":")[0]) * 60;
//             t_secs = parseInt(timeNumber.split(":")[1]);
//             t = t_mins + t_secs;
//             console.log(t);
//         } else if (timeNumber.split(":").length === 2) {
//             t_hrs = parseInt(timeNumber.split(":")[0]) * 60 * 60;
//             t_mins = parseInt(timeNumber.split(":")[1]) * 60;
//             t_secs = parseInt(timeNumber.split(":")[2]);
//             t = t_hrs + t_mins + t_secs;
//             console.log(t);
//         } else {
//             console.error("error");
//         }
//         video.src += `?t=${t}`;
//         console.log(video.src);
//     })
// })


// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '360',
        width: '640',
        videoId: 'M7lc1UVf-VE'
    });
}


