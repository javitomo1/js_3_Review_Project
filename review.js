// local reviews data
const reviews = [
    {
        id: 1,
        name: "Fernando Alonso",
        job: "Driver",
        img: "img/foto_3.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ratione. Quos similique magni asperiores eius facilis perspiciatis accusantium dolor fugit voluptate aperiam ut quo tempora quam, neque omnis fugiat nam."
    },
    {
        id: 2,
        name: "pepe",
        job: "football player",
        img: "img/foto_2.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ratione. Quos similique magni asperiores eius facilis perspiciatis accusantium dolor fugit voluptate aperiam ut quo tempora quam, neque omnis fugiat nam."
    },
    {
        id: 3,
        name: "macarena",
        job: "singer",
        img: "img/foto_1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ratione. Quos similique magni asperiores eius facilis perspiciatis accusantium dolor fugit voluptate aperiam ut quo tempora quam, neque omnis fugiat nam."
    }
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function(){
  showPerson();
});

// show person based on item

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// show next person

nextBtn.addEventListener("click", function() {
  currentItem ++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
// show prev person
prevBtn.addEventListener("click", function() {
  currentItem --;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener('click', function() {
  currentItem = Math.floor(Math.random() * reviews.length)
  showPerson();
});