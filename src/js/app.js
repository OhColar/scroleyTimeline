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


