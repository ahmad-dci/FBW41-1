window.onload = () => {
    // any code will be written here gonna be executed after the full page loaded

    // get search input  
    const searchInput = document.querySelector('#searchInput')

    // add key up event listener
    searchInput.addEventListener('keyup', e => {
        if(e.keyCode === 13) {
            // call search function here
            search()
        }
    })


    //get search button
    const searchBtn = document.querySelector('#searchBtn')

    // add click event on search button
    searchBtn.addEventListener('click', () => {
        // call search function here
        search()
    })

    // search function

    function search() {
        const keyWord = searchInput.value
        const url = 'https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q=' + keyWord
        fetch(url).then(response => {
        
            // check response code
            if (response.status === 200) {
                response.json().then(data => {
                    // data to deal with
                    console.log(data);
                }).catch(error => {
                    console.log(error);
                })
            } else {
                console.log(response.status);
            }
        

        }).catch(error => {
            console.log(error);
        })

    }


}