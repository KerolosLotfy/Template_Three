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
                }
            }
        }
        window.localStorage.setItem("seconds", secs.textContent)
        window.localStorage.setItem("Minutes", mins.textContent)
        window.localStorage.setItem("Hours", hours.textContent)
        window.localStorage.setItem("Days", days.textContent)
    }, 1000);
};



if (window.localStorage.seconds === "" || window.localStorage.seconds === undefined) {
    secs.textContent = 60;
    mins.textContent = 60;
    hours.textContent = 24;
    days.textContent = 124;
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

window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        if (section.id === "stats" && section.getBoundingClientRect().y <= 0 && section.getBoundingClientRect().y > -50) {
            increaseNumbers();
            console.log(section.getBoundingClientRect().y)
        };
    });
});

// increase Numbers function 
function increaseNumbers() {
    stats_nums.forEach((num) => {
        let increase = 0;
        const finish = parseInt(num.ariaValueMax);
        let counter = setInterval(() => {
            num.innerHTML = increase++;
            if (num.innerHTML == finish) {
                clearInterval(counter);
            }
        }, 10);
    });
}


