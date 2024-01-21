// 01-gallery.js

// Sample data array. Replace it with your actual data.
const galleryItems = [
    { small: '/Images/pic1.jpg', large: 'large-image1.jpg', description: 'Description 1' },
    { small: '/Images/pic2.jpg', large: 'large-image2.jpg', description: 'Description 2' },
    { small: '/Images/pic3.jpg', large: 'large-image2.jpg', description: 'Description 2' },
    { small: '/Images/pic4.jpg', large: 'large-image2.jpg', description: 'Description 2' },
    // Add more items as needed
];

// Function to render gallery items
function renderGalleryItems() {
    const galleryContainer = document.getElementById('gallery-container');

    galleryItems.forEach(item => {
        const galleryItem = document.createElement('li');
        galleryItem.className = 'gallery__item';

        const link = document.createElement('a');
        link.className = 'gallery__link';
        link.href = item.large;

        const image = document.createElement('img');
        image.className = 'gallery__image';
        image.src = item.small;
        image.alt = item.description;
        image.setAttribute('data-source', item.large);

        link.appendChild(image);
        galleryItem.appendChild(link);
        galleryContainer.appendChild(galleryItem);
    });
}

// Call the function to render gallery items
renderGalleryItems();

// Event delegation to handle click on gallery items
document.getElementById('gallery-container').addEventListener('click', function (event) {
    if (event.target.classList.contains('gallery__image')) {
        event.preventDefault();
        const largeImageUrl = event.target.getAttribute('data-source');
        openModal(largeImageUrl);
    }
});

// Function to open modal window
function openModal(imageUrl) {
    const lightbox = basicLightbox.create(`
        <img src="${imageUrl}" alt="Image description">
    `);

    lightbox.show();
}
