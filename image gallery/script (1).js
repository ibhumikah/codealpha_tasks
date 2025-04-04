// script.js
const images = document.querySelectorAll('.image-container');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });

  // Update thumbnails
  updateThumbnails(index);

  // Disable buttons at the start or end
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === images.length - 1;
}

function updateThumbnails(index) {
  thumbnails.forEach((thumbnail, i) => {
    if (i === index) {
      thumbnail.classList.add('active');
    } else {
      thumbnail.classList.remove('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showImage(currentIndex);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showImage(currentIndex);
  }
});

thumbnails.forEach((thumbnail, i) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = i;
    showImage(currentIndex);
  });
});

// Show the first image on page load
showImage(currentIndex);