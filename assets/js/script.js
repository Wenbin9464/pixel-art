// Array of image URLs for the banner
const bannerImages = [
    "assets/img/mario1-removebg-preview.png",
    "assets/img/mario2-removebg-preview.png",
    "assets/img/mario3-removebg-preview.png",
  ];
  
  // Index to track the current image
  let currentIndex = 0;
  
  // Function to change the banner image
  function changeBannerImage() {
    const bannerImageElement = document.getElementById('bannerImage');
    currentIndex = (currentIndex + 1) % bannerImages.length;
    bannerImageElement.src = bannerImages[currentIndex];
  }
  
  // Change banner image every 3 seconds
  setInterval(changeBannerImage, 260);
  
  // Function to open the modal
  function openModal(src) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImage.src = src;
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
  
  function esckey(evt) {
    if (evt.keyCode == 27) {
       closeModal()
    }
 }