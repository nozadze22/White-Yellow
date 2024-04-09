
const next = document.querySelector(".next");
const pervous = document.querySelector(".pervous")
const fordisapear = document.querySelector(".fordisapear");
const seconddisapear = document.querySelector(".seconddisapear");


next.addEventListener("click", () => {
    next.style.display = "none";
    pervous.style.display = "block";
    fordisapear.style.display = "none";
    seconddisapear.style.display = 'block';
});

pervous.addEventListener("click",()=> {
    next.style.display = "block";
    pervous.style.display = "none";
    fordisapear.style.display = "block";
    seconddisapear.style.display = 'none';
})