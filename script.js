


document.getElementById("haa").addEventListener("click", e => {
    document.querySelector(".yes img").style.top = 105 + "px"
    document.querySelector(".container h2").innerHTML = "BHAGWAN AAPKA BHALA KARE 🥂🥂"
    document.querySelector(".btn").style.display = "none";
    document.querySelector(".container").style.justifyContent = "center";
})

document.getElementById("naa").addEventListener("mouseover", e => {
    let a = Math.random()
    let b = Math.random()
    if(a>0.5){
        p=-1;
    }
    if(a<0.5){
        p=1;
    }
    if(b>0.5){
        q=-1;
    }
    if(b<0.5){
        q=1;
    }
    var t = p * a * 400;
    var r = q * b * 400;
    e.target.style.top = (t) + "px";
    e.target.style.left = (r) + "px";

})
