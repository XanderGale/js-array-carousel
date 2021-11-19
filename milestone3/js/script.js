const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const leftContainer = document.querySelector('.left-image');
const rightSlider = document.querySelector('.right-slider');

console.log(leftContainer);
console.log(rightSlider);

// Popolo i contenitori
for( let i = 0; i < items.length; i++ ) {
    const itemPath = items[i];
    const itemTitle = title[i];
    const itemText = text[i];
    
    // Popolare il contenitore di immagini a destra
    const sliderImage = `
    <div class="slider-img-container">
        <img src="${itemPath}" alt="Image ${i}">
    </div>
    `;

    // Popolare il contenitore di immagini a sinistra
    const leftImage = `
    <div class="left-image-container">
        <img src="${itemPath}" alt="Image ${i}">

        <div class="left-image-text">
            <h2>${itemTitle}</h2>
            <p>${itemText}</p>
        </div>
    </div>
    `;

    rightSlider.innerHTML += sliderImage;
    leftContainer.innerHTML += leftImage;
}

// Rendo active un elemento
let activeImage = 0;
const sliderImages = document.getElementsByClassName('slider-img-container');
const leftImage = document.getElementsByClassName('left-image-container');
sliderImages[activeImage].classList.add('active');
leftImage[activeImage].classList.add('active');

// Al click di prev e next, sposto le classi active all'immagine e al cerchietto
const downArrow = document.querySelector('.down');
console.log(downArrow);
downArrow.addEventListener('click',
    function() {
    // Rimuovere active all'immagine corrente
    sliderImages[activeImage].classList.remove('active');
    leftImage[activeImage].classList.remove('active');

    // incrementare activeImage di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if( activeImage < items.length - 1 ) {
        activeImage++;
    } else {
        activeImage = 0;
    }

    // assegnare all'immagine la classe active
    sliderImages[activeImage].classList.add('active');
    leftImage[activeImage].classList.add('active');
});

const upArrow = document.querySelector('.up');
console.log(upArrow);
upArrow.addEventListener('click',
    function() {
    // Rimuovere active all'immagine corrente
    sliderImages[activeImage].classList.remove('active');
    leftImage[activeImage].classList.remove('active');

    // decrementare activeImage di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if ( activeImage > 0 ) {
        activeImage--;
    } else {
        activeImage = items.length - 1;
    }

    // assegnare all'immagine la classe active
    sliderImages[activeImage].classList.add('active');
    leftImage[activeImage].classList.add('active');
});