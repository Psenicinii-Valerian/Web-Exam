const content = document.getElementById("slider-image");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const pageNumber = document.getElementById("page-number");

let images = [
    "https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg",
    "https://www.sectorlink.com/img/blog/php-web-development.jpg",
    "https://www.ionos.co.uk/digitalguide/fileadmin/_processed_/0/d/csm_html-tagst_4385979214.webp",
    "https://pixelmechanics.com.sg/wp-content/uploads/2019/04/css.jpg",
    "https://kinsta.com/wp-content/uploads/2023/02/Untitled-21.png",
    "https://undsgn.com/wp-content/uploads/2018/03/XAMPP-3.jpg"
];

let currentImageNumber = 0;
content.style.backgroundImage = `url(${images[currentImageNumber]}`;
pageNumber.textContent = `Image: ${currentImageNumber+1}/${images.length}`;

rightBtn.addEventListener("click", () => {
    if (currentImageNumber < images.length-1) {
        currentImageNumber += 1;
    } else {
        currentImageNumber = 0;
    }
    console.log(currentImageNumber);
    content.style.backgroundImage = `url(${images[currentImageNumber]}`;
    pageNumber.textContent = `Image: ${currentImageNumber+1}/${images.length}`;
});

leftBtn.addEventListener("click", () => {
    if (currentImageNumber == 0) {
        currentImageNumber = images.length-1;
    } else {
        currentImageNumber -= 1;
    }
    console.log(currentImageNumber);
    content.style.backgroundImage = `url(${images[currentImageNumber]}`;
    pageNumber.textContent = `Image: ${currentImageNumber+1}/${images.length}`;
});