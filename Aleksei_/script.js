const scrollContainer = document.querySelector('.scroll-container'),
 railway = document.querySelector('.railway'),
 railway2Img = document.querySelector('.railway2-img'),
 trainPng = document.querySelector('.trainPng'),
 busPng = document.querySelector('.busPng'),
 shipPng = document.querySelector('.shipPng'),
 planePng = document.querySelector('.planePng'),
 startButton = document.querySelector('.start-button'),
 bobble = document.querySelector('.bobble'),
 number = document.querySelector('.number'),

 line1Width = ((railway.offsetWidth * 70 / 100) - (trainPng.offsetWidth / 1.5)) + 'px',
 line2Height = ((railway.offsetHeight * 30 / 100) - (trainPng.offsetWidth / 2)) + 'px',
 line3Height = ((railway.offsetHeight) - (trainPng.offsetHeight * 1.5)) + 'px',
 line4Width = (railway.offsetWidth) - (railway.offsetWidth * 25 / 100) + 'px',
 line4Height = '-' + (railway2Img.offsetHeight * 5 / 100) + 'px',
 line5Width = (railway2Img.offsetWidth) + 'px',
 line5Height = '-' + (railway2Img.offsetHeight * 19 / 100) + 'px',
 line6Width = (railway2Img.offsetWidth * 25 / 100) + 'px';

console.log('line5Height: ' + line5Height)
console.log('line5Width: ' + line5Width)
console.log('line6Width: ' + line6Width)

let promiseIndex = 0;
let isAnimating = false;
let preventDefault = true;
let circleText = document.createElement('div');
circleText.classList.add('circle-text');
circleText.innerHTML = `
                        <div class="text-main" style="font-size: 50px">> 1,5 млн<br>
                            <div class="circle-subtext">билетов в месяц продается через нашу систему
                            </div>
                        </div>`;

number.appendChild(circleText);

let changeCircleText = () => {
    setTimeout(() => {
        circleText.innerHTML = `
                        <div class="text-main">200<br>
                            <div class="circle-subtext">авиаперевозчиков
                            </div>
                        </div>`;
    },3000)
    setTimeout(() => {
        circleText.innerHTML = `
                        <div class="text-main">300<br>
                            <div class="circle-subtext">автобусных
перевозчиков
                            </div>
                        </div>`;
    },6000)
    setTimeout(() => {
        circleText.innerHTML = `
                        <div class="text-main">5000<br>
                            <div class="circle-subtext">автобусных
перевозчиков
                            </div>
                        </div>`;
    },9000)
}
changeCircleText();


const promises = [
    new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 8000);
    }),
    new Promise(resolve => {

        setTimeout(() => {
            resolve();
        }, 8000);
    }),
    new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 8000);
    }),
    new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 8000);
    }),
    new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 8000);
    }),
];

const runAnimation = () => {
    isAnimating = true;
    if (promiseIndex === 0) {


        trainPng.animate([

            {transform: 'translate(0px, -50%)'},
            {transform: `translate(${line1Width}, -50%)`},
            {transform: `translate(${line1Width}, ${line2Height})`},


        ], {
            id: 1,
            duration: 8000,
            fill: 'forwards'
        })

        setTimeout(() => {
            bobble.animate([

                {opacity: '1'},


            ], {
                id: 10,
                duration: 2000,
                fill: 'forwards'
            })
        }, 7000)


    } else if (promiseIndex === 1) {

        isAnimating = true;

            trainPng.style.opacity = '0';
            busPng.style.opacity = '1';

            busPng.animate([

                {transform: `translate(${line1Width}, ${line2Height})`},
                {transform: `translate(${line1Width}, ${line3Height})`},
                {transform: `translate(${line4Width}, ${line3Height})`},

            ], {
                id: 2,
                duration: 8000,
                fill: 'forwards'
            });


    } else if (promiseIndex === 2) {

        console.log('3-start')

        scrollContainer.scrollTo({
            left: document.body.scrollWidth,
            behavior: 'smooth'
        });

    } else if (promiseIndex === 3) {

        shipPng.animate([
            {transform: `translate(0, 5%`},
            {transform: `translate(${line4Width}, ${line4Height}`},
        ], {
            id: 3,
            duration: 8000,
            fill: 'forwards'
        });

    } else if (promiseIndex === 4) {

        shipPng.style.opacity = '0';
        planePng.style.opacity = '1';

        planePng.animate([
            {transform: `translate(${line4Width}, ${line4Height}`},
            {transform: `translate(${line5Width}, ${line5Height}`},
        ], {
            id: 4,
            duration: 8000,
            fill: 'forwards'
        });
    } else if (promiseIndex === 5) {

        shipPng.style.opacity = '0';
        planePng.style.opacity = '1';

        planePng.animate([
            {transform: `translate(${line4Width}, ${line4Height}`},
            {transform: `translate(${line5Width}, ${line5Height}`},
        ], {
            id: 4,
            duration: 8000,
            fill: 'forwards'
        });
    }
};

const runPromise = () => {
    promises[promiseIndex].then(() => {
        promiseIndex++;
        isAnimating = false;
        if (promiseIndex === promises.length) {
            promiseIndex = 0;
        }
    });
};

startButton.addEventListener("click", () => {
    if (!isAnimating) {
        runAnimation();
        runPromise();
    }
});

window.addEventListener("wheel", e => {
    if (e.deltaY > 0 && !isAnimating) {
        runAnimation();
        runPromise();
    }
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});







