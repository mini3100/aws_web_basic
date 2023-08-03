window.onload = () => {
    const cupImg = document.querySelector(".img-border img");
    cupImg.src = "./images/cup1.jpg";
    //cupImg.onclick = cupImgOnClickHandle;
}

const cupImgOnClickHandle = (e) => {
    if(e.target.src.includes("cup1")){
        e.target.src = "./images/cup2.jpg"
    } else {
        e.target.src = "./images/cup1.jpg"
    }
}