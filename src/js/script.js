const nav = document.querySelector('#nav')
const menuBtn = document.querySelector('#menu-btn')
const navLink = document.querySelectorAll('#nav li a')
const loginBtn = document.querySelector('#login-btn')
const login = document.querySelector('#login')
const searchBtn = document.querySelector('#search-btn')
const searchForm = document.querySelector('#search')
const info = document.querySelector('#info')
const infoBtn = document.querySelector('#info-icon')
const closeInfo = document.querySelector('#close-info')
const closeSerach = document.querySelector('#close-search')
const closeLogin = document.querySelector('#close-login')
const closeMenu = document.querySelector('#close-menu')

menuBtn.addEventListener('click', () => {
  if (nav.classList.contains('left-[-320px]')) {
    nav.classList.remove('left-[-320px]')
    nav.classList.add('left-0')
  }
  else {
    nav.classList.add('left-[-320px]')
    nav.classList.remove('left-0')
  }
})

closeMenu.addEventListener('click', () => {
  nav.classList.remove('left-0')
  nav.classList.add('left-[-320px]')
})

navLink.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.add('left-[-320px]')
    nav.classList.remove('left-0')
  })
})


loginBtn.addEventListener('click', () => {
  login.classList.toggle('hidden')
})

closeLogin.addEventListener('click', () => {
  login.classList.toggle('hidden')
})

searchBtn.addEventListener('click', () => {
  searchForm.classList.toggle('hidden')
})

closeSerach.addEventListener('click', () => {
  searchForm.classList.toggle('hidden')
})

infoBtn.addEventListener('click', () => {
  if (info.classList.contains('right-[-350px]')) {
    info.classList.remove('right-[-350px]')
    info.classList.add('right-0')
  }
  else {
    info.classList.add('right-[-350px]')
    info.classList.remove('right-0')
  }
})

closeInfo.addEventListener('click', () => {
  info.classList.remove('right-0')
  info.classList.add('right-[-350px]')
})

//====== Home slider
var swiper = new Swiper("#home-slider", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//====== counter section
let nums = document.querySelectorAll(".num");
let section = document.querySelector("#about");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 120) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      el.textContent = goal + '+'
      clearInterval(count);
    }
  }, 3000 / goal);
}

//====== reviews section
var swiper = new Swiper("#reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//====== Blogs slider
var swiper = new Swiper("#blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//====== Logo slider
var swiper = new Swiper("#logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 5,
    },
  },
});
