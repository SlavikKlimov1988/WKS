// let animItems = document.querySelectorAll(".anim-items");

// if( animate < 0 ){
//     function animOnScrol(){
//         for(let i = 0; i < animItems.length; i++){
//             const animItem = animItems[i];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = 
//         }
//     }
//     function offset(el){
//         const rect = el.getBounding
//     }
// }
let popup = document.getElementById('mypopup')
let popupTogle = document.getElementById('myBtn')
let popupClose = document.getElementById('close')

popupTogle.onclick = function(){
    popup.style.display = "block";
};

popupClose.onclick =function (){
    popup.style.display = "none"
};
window.onclick = function(e){
    if(e.target == popup){
        popup.style.display = "none"
    }
}