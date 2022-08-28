let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/library.png') {
      myImage.setAttribute('src','images/library2.png');
    } else {
      myImage.setAttribute('src','images/library.png');
    }
}
/*
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName=prompt('あなたの名前は？');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent = '来てくれてありがとう'+myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStrage.getItem('name');
    myHeading.innerHTML = '来てくれてありがとう'+storedName;
}

myButton.onclick=function(){
    setUserName();
}
*/