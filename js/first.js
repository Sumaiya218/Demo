var myImgs = Array.from(document.querySelectorAll(".item img"));
var box =  document.querySelector(".box");
var close = document.getElementById("close");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var currentImgIndex= 0;

for(var i = 0; i< myImgs.length ; i++){
    myImgs[i].addEventListener("click", showImgs )
}
function showImgs(e){

    box.style.display = "flex";
    var imgSrc = e.target.src;
    var currentImgIndex = myImgs.indexOf(e.target);
    box.firstElementChild.style.backgroundImage = "url("+imgSrc+")";
}

close.addEventListener("click" ,hideBox )
function hideBox(){
    box.style.display = "none";
}
next.addEventListener("click" , nextItem )
function nextItem(){
    currentImgIndex++;
    if(currentImgIndex == myImgs.length){
        currentImgIndex =0;
    }
    box.firstElementChild.style.backgroundImage = "url("+myImgs[currentImgIndex].src+")";
}
prev.addEventListener("click", prevItem)
function prevItem(){
    currentImgIndex--;
    if(currentImgIndex < 0){
        currentImgIndex = myImgs.length;
    }    
    box.firstElementChild.style.backgroundImage = "url("+myImgs[currentImgIndex].src+")";
}

document.addEventListener("keydown" , function(e){
    if(e.keyCode == 39){
        nextItem();
    }else if(e.keyCode == 37){
        prevItem();
    }else if(e.keyCode == 27){
        hideBox();
    }
})