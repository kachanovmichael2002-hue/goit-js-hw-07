const images = [
  { url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg", alt: "Cat" },
  { url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg", alt: "Fish" },
  { url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg", alt: "Horses" },
];

const gallery = document.querySelector('.gallery');

const markup = images
  .map(img => `<li><img src="${img.url}" alt="${img.alt}" /></li>`)
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);