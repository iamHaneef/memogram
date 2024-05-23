const memeBtn = document.querySelector(".meme-btn");
const memeTitle = document.querySelector('.meme-title');
const memeImage1 = document.querySelector(".meme-image1");
const memeImage2 = document.querySelector(".meme-image2");
const memeImage3 = document.querySelector(".meme-image3") 

const memeAuthor = document.querySelector(".meme-author");

const memeGenerate1 = () =>
{
      fetch("https://meme-api.com/gimme/wholesomememes")
      .then((serverResponse) => serverResponse.json())
      .then((meme) =>
      {
        memeDetails1(meme.url,meme.title,meme.author)
      })
}

const memeGenerate2 = () =>
{
      fetch("https://meme-api.com/gimme")
      .then((serverResponse) => serverResponse.json())
      .then((meme) =>
      {
        memeDetails2(meme.url,meme.title,meme.author)
      })
}

const memeGenerate3 = () =>
{
      fetch("https://meme-api.com/gimme/wholesomememes")
      .then((serverResponse) => serverResponse.json())
      .then((meme) =>
      {
            memeDetails3(meme.url,meme.title,meme.author)
      })
}


const memeDetails1 = (url,title,author) =>
{
    
      memeImage1.setAttribute("src",url)
      memeTitle.innerHTML=title;
      memeAuthor.innerHTML=author;
}

const memeDetails2 = (url,title,author) =>
{
    
      memeImage2.setAttribute("src",url)
      memeTitle.innerHTML=title;
      memeAuthor.innerHTML=author;
}

const memeDetails3 = (url,title,author) =>
{
      memeImage3.setAttribute("src",url);
      memeTitle.innerHTML=title;
      memeAuthor.innerHTML=author;
}

memeBtn.addEventListener("click",memeGenerate1)
memeBtn.addEventListener("click",memeGenerate2)
memeBtn.addEventListener('click',memeGenerate3)


memeGenerate1();
memeGenerate2();
memeGenerate3();
