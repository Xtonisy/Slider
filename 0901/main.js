//Груданов Сергей
let playSlider = ()=>{
    let portfolioItem = document.querySelectorAll(".portfolio-item"),
    dot = document.querySelectorAll(".dot"),
    portfolio = document.getElementById("portfolio");
    
    let addClass = (item, index, classStyle) => {
    item[index].classList.add(classStyle);
    };
    let removeClass = (item, index, classStyle) => {
    item[index].classList.remove(classStyle);
    };
    
    let count = 0;
    
    function animateSlide(){
    removeClass(portfolioItem,count, "portfolio-item-active");
    removeClass(dot,count, "dot-active");
    count++;
    if (count === portfolioItem.length) count = 0;
    addClass(portfolioItem,count, "portfolio-item-active");
    addClass(dot,count, "dot-active");
    
    };
    portfolio.addEventListener("click", (event) =>{
    event.preventDefault();
    let target = event.target;
    if (!target.matches(".portfolio-btn, .dot")) return;

    removeClass(portfolioItem,count, "portfolio-item-active");
    removeClass(dot,count, "dot-active");

    if(target.matches(".prev")){
        count--;
        if (count==-1)count= portfolioItem.length-1;
    }else if(target.matches(".next")){
        count++;
        if (count===portfolioItem.length) count=0;
    }
    addClass(portfolioItem,count, "portfolio-item-active");
    addClass(dot,count, "dot-active");
    });
        
    let idAnimate = setInterval(animateSlide, 3000);
    
    }
    
    playSlider();