// =======================================
// Timeline JS
// =======================================

// Variables
// =======================================
const timeline = document.querySelector('#timeline'),
    bar = document.querySelector('.tl-links .bar'),
    year = document.querySelectorAll('.tl-year');


// Timeline clicking action
// =======================================
document.querySelectorAll('.tl-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        let section = document.querySelector(anchor.getAttribute('href')),
            elementPosition = section.offsetLeft,
            timelineWidth = timeline.offsetWidth,
            middleView = timelineWidth / 3.1;
        timeline.scrollTo({
            left: elementPosition - middleView,
            behavior: 'smooth'
        });
    });
});

// Setting the scroll progression
// =======================================
timeline.addEventListener("scroll", event => {
    //console.log(timeline.scrollLeft)

    // Get % value
    let timelineWidth = timeline.clientWidth,
        bodyWidth =  timeline.scrollWidth - timelineWidth,
        scrollPos = timeline.scrollLeft
    const calc = ((scrollPos/bodyWidth)*100)/100;
    bar.style.transform ="scaleX(" + calc + ")";

    // use the data-position attr to check if the scroll position is greater than or equal to the p- class value
    document.querySelectorAll('.tl-position').forEach(position => {
        let positionValue = position.getAttribute("data-position"),
            percentageCalc = calc * 100,
            activePosition = document.querySelector('[data-position="'+ positionValue +'"]');
        if(percentageCalc >= positionValue) {
            activePosition.classList.add('active')
        } else {
            activePosition.classList.remove('active')
        }
    });

    //timelineTrigger(year)
}, { passive: true });

// Scroll hijack
// =======================================
// timeline.addEventListener('wheel', (ev) => {
//     // Get scroll progress 0 - 1
//     let timelineWidth = timeline.clientWidth,
//         bodyWidth =  timeline.scrollWidth - timelineWidth,
//         scrollPos = timeline.scrollLeft
//     const calc = ((scrollPos/bodyWidth)*100)/100;
//
//     // Check to see if the direction is not UP and the progress is less than 1
//
//     if(calc < 1) {
//         ev.preventDefault();  // stop scrolling in another direction
//         timeline.scrollLeft += (ev.deltaY + ev.deltaX);
//     } else {
//
//     }
//
//     //console.log(calc)
//
// });

// Drag to scroll
// =======================================
const slider = document.querySelector('#timeline');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});



