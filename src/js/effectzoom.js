const box = document.querySelector(".content-product");
const img = document.getElementById("product-main");

box.addEventListener("mousemove", (e)=>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2.0)";
});

box.addEventListener("mouseleave", ()=> {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
    
});