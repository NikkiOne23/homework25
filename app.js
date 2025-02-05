'use strict'

// 1
function createDomElement(tagName, textContent, container) {
const newElement = document.createElement(tagName);
newElement.textContent = textContent;
container.appendChild(newElement);
return newElement;
}

const container = document.body 
console.log(createDomElement('p', 'This paragraph has been added to the specified container.' , container))


// 2 

function setUserInfoCookie(key, value) {
    const encodedValue = encodeURIComponent(`${key}=${value}`);

    const coocs = new Date(Date.now() + 10 * 1000).toUTCString();

    document.cookie = `${encodedValue}  = ${coocs} `; 
    console.log(`Cookie 'userInfo' встановлено: ${key}=${value} (діє 10 секунд)`);
  }



   setUserInfoCookie('language', 'en');


   // 3
   function saveUserInfo(key, value) {
    sessionStorage.setItem(key , value);
  }


  function getUserInfo(key) {
    const value = sessionStorage.getItem(key);
    return value;
  }

   saveUserInfo('username', 'JohnDoe');
   console.log(getUserInfo('username'));


   // 4
function tableOfPif(){
  let newTable = document.querySelector('.tableOfPif')
  for(let i = 0;i <= 10;i++){
    let newRow = document.createElement('th');
    for(let y = 0; y <= 10;y++){
      let cell;

       if(i === 0 ){
          cell = document.createElement('th');
          cell.textContent = y;
      }else if(y === 0){
        cell = document.createElement('th');
      } else {
        cell = document.createElement("td");
        cell.textContent = i * y;
    }
    newRow.appendChild(cell);
    }
    newTable.appendChild(newRow);

  }
}

tableOfPif();




   
   //5
const myText = document.querySelector('.colored-text');
const myBtn = document.querySelector('.btn');

let isColored = false;

myBtn.addEventListener('click', function(){
    if(isColored){
        myText.style.color = 'black'
    }else{
          myText.style.color = "red"
    }
    isColored = !isColored;
});

// 6
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];


document.getElementById("randomImage").src = `images/${randomImage}`;

