var swiper = new Swiper('.Slider-container', {
  effect: 'cards',
  grabCursor: true,
  centerdSlides: true,
  loop: false,
});
// swiper.changeDirection('vertical');


 // Array to store image URLs
 var images = [];
 const accessKey = "liWsrz3HEPbjJjV2CTZcIPI15i_mEiXtfmrw2f2sRYU"


 // Function to fetch a new image
    // Function to fetch a new image
    async function fetchImage() {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&query=woman&orientation=portrait&count=1`);
        const data = await response.json(); // parse the JSON response
        console.log(data); // log the response
        const imageUrl = data[0].urls.regular; // get the regular size image URL
        return imageUrl;
    }
 
  
 // Fetch images for each slide
 async function fetchImages(i) {
     for (let i = 0; i < swiper.slides.length; i++) {
         const url = await fetchImage();
         images.push(url); // Store the image URL in the array
     }
 }
 
 
 fetchImages().then(() => {
     // Once all images are fetched, update the src attribute of each img element
     swiper.slides.forEach((slide, index) => {
         slide.querySelector('img').src = images[index];
     });
     swiper.loop = true; // enable loop after images are loaded
    swiper.update(); // update swiper after changing parameters
    console.log(images); // log the images array after it's been populated
});