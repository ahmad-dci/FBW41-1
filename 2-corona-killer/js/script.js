// get html elements
const container = document.querySelector('#container');
const injection = document.querySelector('#injection');
const pointsDiv = document.querySelector('#pointsDiv');

// add mousemove event listener to container to control injection position
container.addEventListener('mousemove', e => {
    //console.log(e);
    injection.style.left = (e.clientX - 12.5) + 'px';
})



// create array to save corona objects 
const coronaArr = [];


setInterval(() => {

// get container width
let containerWidth = container.offsetWidth;

// create corona div element
const coronaDiv = document.createElement('div');

// set class for corona div
coronaDiv.classList.add('corona');

// set the left position for the div randomly
let coronaLeft = Math.floor(Math.random() * containerWidth) + 1;

coronaDiv.style.left = coronaLeft + 'px';

// add coronaDiv to container
container.append(coronaDiv);

// create corona object
let coronaObj = {
    coronaElement: coronaDiv,
    top: 0,
    left: coronaLeft
}

// add the coronaObj to coronaArr
coronaArr.push(coronaObj)

}, 1000)



// create interval to move the coronaDivs down by increasing the top property on them style
setInterval(() => {

    // get height of the container
    let containerHeight = container.offsetHeight;



    // loop through coronaArr to change the top of coronaElements
    coronaArr.forEach((element, idx) => {
        // check the top of coronaDiv is greater than the container height so we need to delete the coronadiv
        if ( element.top > containerHeight) {
            // delete corona element from HTML (DOM)
            container.removeChild(element.coronaElement);
            // delete the element from the array
            coronaArr.splice(idx, 1);
        } else {
            element.top += 10;
            element.coronaElement.style.top = element.top + 'px';
        }
        
    })
}, 50);

// create click event listener for container to create the bullet

container.addEventListener('click', e => {

    //create bullet html element
    const bulletDiv = document.createElement('div');

    // set class to bullet div
    bulletDiv.classList.add('bullet');

    // set left position for bulletDiv
    bulletDiv.style.left = e.clientX + 'px';

    // add bulletDiv to container
    container.append(bulletDiv);


    // set the start bottom for the bulletDiv
    let bottom = 100;

    // create set interval to make the bullets move to top
    const interval = setInterval(() => {
        bottom += 25;
        bulletDiv.style.bottom = bottom + 'px';
        // check the bullet is outside the container so we need to delete the bullet div and kill the interval
        
    }, 50);
    
})






