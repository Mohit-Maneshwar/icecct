// const track = document.getElementById("carouselTrack");
// const cards = document.querySelectorAll(".place-card");
// const totalCards = cards.length;
// const visibleCards = 4;
// let index = 0;

// function moveCarousel() {
//   index++;
//   if (index > totalCards - visibleCards) {
//     index = 0;
//   }
//   const cardWidth = cards[0].offsetWidth;
//   track.style.transform = `translateX(-${index * cardWidth}px)`;
// }

// setInterval(moveCarousel, 3000);

const track = document.getElementById("carouselTrack");
const cards = document.querySelectorAll(".speaker-card");
const totalCards = cards.length;
const visibleCards = 5;
let index = 0;

function moveCarousel() {
  index++;
  if (index > totalCards - visibleCards) {
    index = 0;
  }
  const cardWidth = cards[0].offsetWidth;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

setInterval(moveCarousel, 1500);
