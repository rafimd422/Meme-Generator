const generatebutton = document.querySelector("#generateMeme");
const titleOfMeme = document.querySelector("#meme-title");
const imgofMeme = document.querySelector("#image");
const authorName = document.querySelector("#author");
titleOfMeme.style.width = "calc(100% - 80px)";
titleOfMeme.style.textAlign = "center";

const detailsUpdate = (title, url, author) => {
    titleOfMeme.innerHTML = title;
    imgofMeme.src = url;
    authorName.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
fetch('https://meme-api.com/gimme/wholesomememes')
.then(res => res.json())
.then(data => {
    detailsUpdate(data.title, data.url, data.author)
})
};

generatebutton.addEventListener("click", generateMeme);


