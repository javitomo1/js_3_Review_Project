//Establecemos una lista de objetos, con las propiedades y valores que vamos a trabajar en el proyecto
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

//Establecemos las variables, apuntando a los nodos del documento para mostrar datos en ellos
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
//Establecemos las variables que apuntan a los botones que usará el usuario para interactuar con la página
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//Establecemos la variable que apuntará al índice de nuestro objeto reviews
let currentItem = 0;

//Establecemos el evento que ocurrirá cuando cargue la página en el navegador
window.addEventListener("DOMContentLoaded", function(){
  showPerson();
});

//Establecemos la función que mostrará los datos del objeto, dependiendo del índice de reviews[currentItem], mostrará un objeto u otro de nuestra lista
function showPerson() {
  //Establecemos la variable item que usaremos para apuntar al índice que marque currentItem en nuestra lista de reviews
  const item = reviews[currentItem];
  //Asignamos a las variables los nodos que estas modificarán junto con el índice y el valor que deben mostrar
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// Mostrar perfil siguiente al hacer clic en el botón

nextBtn.addEventListener("click", function() {
  //Por cada clic, el valor del índice augmenta, lo que hace que pasemos al siguiente perfil
  currentItem ++;
  //Si el valor del índice es mayor que la longitud de la lista menos 1, el valor del índice se establece en 0, así damos la vuelta a la lista
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  //Llamamos a la función para que muestre los datos por pantalla
  showPerson();
});
// Mostrar perfil anterior al hacer clic en el botón
prevBtn.addEventListener("click", function() {
  //Por cada clic, el valor del índice disminuye, lo que hace que pasemos al perfil anterior
  currentItem --;
  //Si el valor del indice es menor que 0
  if(currentItem < 0) {
    //Se establece que el valor es la longitud de la lista -1, y esto nos lleva al último objeto de nuestra lista
    currentItem = reviews.length - 1;
  }
  //Llamamos a la función para que muestre los datos por pantalla
  showPerson();
});

// Mostrar perfil aleatorio al hacer clic en el botón
randomBtn.addEventListener('click', function() {
  //El valor del índice es = a un número aleatorio, redondeado a un número entero y multiplicado por la longitud de la lista, ya que la funcion Math.random() devuelve un valor de 0 al 1, de esta manera devuelve un valor de 0 al número de elementos/objetos que tenga nuestra lista
  currentItem = Math.floor(Math.random() * reviews.length)
  //Llamamos a la función para que muestre los datos por pantalla
  showPerson();
});
