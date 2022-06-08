const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
        'X-RapidAPI-Key': 'a828956c59mshc61a4de490385ebp194b43jsna98bc5cb210a'
    }
};

let btn = document.getElementById("generate-btn");
let text = document.getElementById("quote-text");
let author = document.getElementById("author-text");
let category = document.getElementById("category-text");

btn.addEventListener("click", function(){
    text.innerText = "Loading...";
    author.innerText = "Author: ...";
    category.innerText = "Category: ...";

    fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=2', options)
        .then(response => response.json())
        .then(data => {
        text.innerText = data[0].text;
        author.innerText = `Author: ${data[0].author}`;
        category.innerText = `Category: ${capitalize(data[0].category)}`;
    }
        )
        .catch(err => console.error(err));
})

function capitalize(str){
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}