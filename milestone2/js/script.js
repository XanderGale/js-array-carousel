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
