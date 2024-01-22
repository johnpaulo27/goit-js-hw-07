import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', function () {
    // Gallery items data
    const galleryItems = [
      {
        url: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg"
        alt: "Hokkaido Flower",
      },
      {
        url: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
        alt: "Container Haulage Freight",
      },
      {
        url: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
        alt: "Aerial Beach View",
      },
      {
        url: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
        alt: "Container Haulage Freight",
      },
      {
        url: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
        alt: "Aerial Beach View",
      },
      {
        url: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
        alt: "Flower Blooms",
      },
      {
        url: "ttps://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
        alt: "Flower Blooms",
      },
      // Add more items as needed
    ];
  
    // Get the gallery element
    const galleryList = document.querySelector('.gallery');
  
    // Render gallery items
    galleryItems.forEach(function (item) {
      const galleryItem = document.createElement('li');
      galleryItem.classList.add('gallery-item');
  
      const image = document.createElement('img');
      image.src = item.url;
      image.alt = item.alt;
      image.classList.add('gallery-image');
  
      galleryItem.appendChild(image);
      galleryList.appendChild(galleryItem);
    });
  
    // Event delegation to open modal on click
    galleryList.addEventListener('click', function (event) {
      if (event.target.tagName === 'IMG' && event.target.closest('.gallery-item')) {
        const largeImageUrl = event.target.src.replace('/small/', '/large/'); // Assuming you have different directories for small and large images
        openModal(largeImageUrl);
      }
    });
  
    // Function to open the modal window
    function openModal(imageUrl) {
      const modal = basicLightbox.create(
        `<img src="${imageUrl}" alt="Large Image">`
      );
      modal.show();
    }
  });

console.log(galleryItems);