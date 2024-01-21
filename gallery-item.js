function openModal(imageSrc) {
  document.getElementById('modalImage').src = imageSrc;
  document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}