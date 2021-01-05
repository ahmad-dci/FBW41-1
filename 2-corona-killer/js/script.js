// get html elements
const container = document.querySelector('#container');
const injection = document.querySelector('#injection');
const pointsDiv = document.querySelector('#pointsDiv');

// add mousemove event listener to container to control injection position
container.addEventListener('mousemove', e => {
    //console.log(e);
    injection.style.left = (e.clientX - 12.5) + 'px';
})
setInterval(() => {
//console.log('hi');
}, 500)


