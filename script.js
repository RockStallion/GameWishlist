const images = [
    '/img/image1.jpg',
    '/img/image2.jpg',
    '/img/image3.jpg',
    '/img/image4.png',
    '/img/image5.jpg',
    '/img/image6.jpg',
    '/img/image7.jpg',
    '/img/image8.jpg',
    '/img/image9.jpg',
    '/img/image10.png',
    '/img/image11.jpg',
    '/img/image12.jpg'
];

function isValidImage(extension) {
    return ['.jpg', '.png', '.jpeg'].includes(extension.toLowerCase());
}

function createImageGallery() {
    const gallery = document.querySelector('#imageGallery');

    images.forEach(image => {
        const extension = image.substring(image.lastIndexOf('.'));

        if (isValidImage(extension)) {
            const img = document.createElement('img');
            img.src = image;
            img.alt = 'Imagen';
            gallery.appendChild(img);
        }
    });
}

createImageGallery();
