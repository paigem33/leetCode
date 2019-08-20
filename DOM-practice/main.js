document.getElementsByTagName('h1')[0].innerHTML = "Hey bro this is a website"
let divBox = document.getElementsByClassName('info-box sad')[0]
let newList = document.createElement('ol')
newList.innerHTML = "<li>I am a list item</li><li>So am I, man</li><li>No you ain't, my friend</li><li>MAN you don't know me!</li>"
divBox.appendChild(newList)
let makeHappy = document.getElementsByClassName('sad')
//noMoreSad = () => {
//    console.log(makeHappy[0])
//    makeHappy[0].classList.remove('sad')
//    makeHappy[0].classList.add('happy')
//    if(makeHappy[0]){
//        noMoreSad()
//    }
//}
//if(makeHappy[0]){
//    noMoreSad()
//}
//why wont it add class to first element, and why is there an error?
let popupLink = document.querySelector('#annoying-popup a')
popupLink.setAttribute('href', 'http://www.cashcats.biz')
let popup = document.getElementById('annoying-popup')
popup.setAttribute('style', 'top:40px; right:20px')
let item = document.querySelector('ul').children[6]
item.innerHTML = "bro what are you even doinnnnnnggggggg"
let changeType = document.getElementsByTagName('input')[0]
let newArea = document.createElement('textarea')
changeType.parentNode.replaceChild(newArea, changeType)