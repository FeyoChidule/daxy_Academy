/*menu buttuns on mobile*/
const open = document.querySelector(".fa-bars")
const close = document.querySelector(".fa-close")
const nav = document.getElementById("nav")


open.addEventListener("click",()=>{
  open.style.display = "none"
  close.style.display="block"
  nav.style.display="flex"
})
close.addEventListener("click",()=>{
  nav.style.display="none"
  open.style.display = "block"
  close.style.display = "none"
})

// Select the nav and the button
const navLinks = document.querySelectorAll('.li');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      nav.style.display = "none"
      close.style.display = "none"
      open.style.display = "block"
    }
  });
});

//galley photos slide show

let currentIndex = 0;
    const totalSlides = 8; 
    const slideInterval = 3000; 
    function updateSliderPosition() {
      const sliderContainer = document.querySelector('.slider-container');
      sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateIndicators();
    }
    function updateIndicators() {
      const indicators = document.querySelectorAll('.indicator');
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSliderPosition();
    }
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
      updateSliderPosition();
    }
    function goToSlide(index) {
      currentIndex = index;
      updateSliderPosition();
    }
    function startAutoSlide() {
      setInterval(nextSlide, slideInterval);
    }
    window.onload = startAutoSlide;