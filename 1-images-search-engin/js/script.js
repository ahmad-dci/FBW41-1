window.onload = () => {
    // any code will be written here gonna be executed after the full page loaded

    // get search input  
    const searchInput = document.querySelector('#searchInput')

    // add key up event listener
    searchInput.addEventListener('keyup', e => {
        if(e.keyCode === 13) {
            // call search function here
        }
    })


    //get search button
    const searchBtn = document.querySelector('#searchBtn')

    // add click event on search button
    searchBtn.addEventListener('click', () => {
        // call search function here
    })

    // search function



}