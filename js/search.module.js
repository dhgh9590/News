/* search */
let searchButton = document.querySelector(".search_btt");
let searchInput = document.querySelector(".search_input");
let value;

searchButton.addEventListener("click",function(e){
    e.preventDefault();
    value = searchInput.value
    add(value);
});

function add(value){
    console.log(value);
}

export {add};



