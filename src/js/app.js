
const timeline = document.querySelector('#timeline')

document.querySelectorAll('.tl-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        let section = document.querySelector(anchor.getAttribute('href')),
            elementPosition = section.offsetLeft;

        timeline.scrollTo({
            left: elementPosition,
            behavior: 'smooth'
        });
    });
});