'use strict';
const comments = document.querySelector('.feed__comments');
const newCommentForm = document.querySelector('.feed__addComment');
const newCommentInput = document.querySelector('.feed__addComment__input');
const commentBtn = document.querySelector('.feed__addComment__button');

commentBtn.disabled = true;

// Activate post button
newCommentInput.addEventListener('keyup',() => {
    const newComment= newCommentInput.value;
    if(newComment){
        commentBtn.classList.add('activate');
        commentBtn.disabled = false;
    }else{
        commentBtn.classList.remove('activate');
        commentBtn.disabled = true;
    }
})

// Add New Comment
let datanum = 2;
newCommentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const comment = document.createElement('div');
    comment.className = "feed__comment__item"
    comment.setAttribute('data-num', datanum);
    comment.innerHTML = 
        `<a href="#" class="avatar__id">new_id</a>
            <span>${newCommentInput.value}</span>
        <span class="feed__comment__reactions">
            <i class="fa-solid fa-x" data-num=${datanum}></i>
            <i class="fa-regular fa-heart" data-like=${datanum}></i>
        </span>`;
    comments.appendChild(comment);
    newCommentInput.value="";
    datanum++;
});

// Mission 6 :delete Comment with the 'x' button
comments.addEventListener('click', (event) => {
    const datanum = event.target.dataset.num;
    if(datanum){
        const deletedComment = document.querySelector(`.feed__comment__item[data-num="${datanum}"]`)
        deletedComment.remove();
    }
})

// Mission 6 : make the heart full-red when clicked
comments.addEventListener('click', (event) => {
    const likenum = event.target.dataset.like;
    if(likenum){
        const clickedHeartNum = document.querySelector(`.fa-heart[data-like="${likenum}"]`);
        clickedHeartNum.classList.toggle(`red`);
        clickedHeartNum.classList.toggle(`fa-solid`)
    }
})

// Mission 7 : id search bar
const users = [
    {
        id: "wecode_bootcamp",
        description: ">wecode | ?????????",
        src: "../IMG/wecode.png"
      },
      {
        id: "wecode_founder",
        description: "????????? (Eun Woo Song)",
        src: "../IMG/wecodeFounder.png"
      },
      {
        id: "wecode_git",
        description: "",
        src: "../IMG/wecodegit.png"
      },
      {
        id: "wecode_korea",
        description: "????????? ???????????? 427, ??????",
        src: "../IMG/noimage.jpeg"
      },
      {
        id: "mjuuu.k",
        description: "Front-end developer",
        src: "../IMG/wecode.png"
      },
      {
        id: "mjuu.b",
        description: "love cooking",
        src: "../IMG/wecode.png"
      },
      {
        id: "nyangwe",
        description: "nyangnyang We",
        src: "../IMG/wecode.png"
      },
      {
        id: "dangdang_we",
        description: "DangDang We",
        src: "../IMG/wecode.png"
      },
]

const searchBar = document.querySelector('.navbar__searchBar');
const closeSearchBtn = document.querySelector('.navbar__search .fa-circle-xmark');
const searchResultContainer = document.querySelector('.searchToggle');
const searchResultBox = document.querySelector('.searched__items');

searchBar.addEventListener('keyup', (event) => {
    showResultBox();
    if(event.key === 'Escape' || searchBar.value === ''){
        hideResultBox();
    }else{
        searchKeyword();
}});

function showResultBox(){
    searchResultContainer.classList.add('visible');
    closeSearchBtn.classList.add('visible');
}

function hideResultBox(){
    searchResultBox.innerHTML='';
    searchResultContainer.classList.remove('visible');
    closeSearchBtn.classList.remove('visible');
    searchBar.value = '';
}

function searchKeyword(){
    let keyword = event.target.value;
    searchResultBox.innerHTML = "";
    const filteredArr = users.filter(user => user.id.includes(keyword));
    filteredArr.length > 0 ? showSearchResult(filteredArr) : showNoResult();
}

function showSearchResult(filteredArr){
    filteredArr.forEach(user => {
        const avatar = document.createElement('div');
        avatar.setAttribute('class', 'searched__items__item');
        avatar.innerHTML =` 
            <div class="img__container">
                <img class="avatar__img" src=${user.src} alt="">
            </div>   
            <div class="id__container">
                <div class="avatar__id">${user.id}</div>
                <div class="avatar__description">${user.description}</div>
            </div>`;
        searchResultBox.appendChild(avatar);
    });
}

function showNoResult(){
    const noResult = document.createElement('div');
    noResult.innerHTML = "?????? ????????? ????????????.";
    noResult.setAttribute('class', 'searched__noResult');
    searchResultBox.appendChild(noResult);
}

closeSearchBtn.addEventListener('click', () => {
    hideResultBox();
})

// Mission 8 : show profile options when navbar's profile picture is clicked
const profileBtn = document.querySelector('.navbar__moreFunctions .fa-user-large');
const profileOptions = document.querySelector('.profileOptions');
const overlay = document.querySelector('.overlay');

profileBtn.addEventListener('click', () => {
    overlay.classList.add('visible');
    profileOptions.classList.add('visible');
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('visible');
    profileOptions.classList.remove('visible');
})