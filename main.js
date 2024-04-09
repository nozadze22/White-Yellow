
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const body = document.querySelector("#body");
const down = document.querySelector("#down");
const up = document.querySelector("#up");
const choose = document.querySelector(".choose");
const guestselected = document.querySelector("#selected");
const guestList = document.querySelectorAll(".guestList");
const select = document.querySelector(".select");
//date
const timing = document.querySelector(".timing");

//რომ გამოვაჩიოთ book
const show = document.querySelector(".show");
const book = document.querySelector(".book");
const  Close = document.querySelector("#Close");

//follow us
const followUs = document.querySelector(".followUs");


moon.addEventListener("click", () => {

    sun.style.display = "block";
    moon.style.display = "none";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    guestselected.style.backgroundColor = 'black';
    choose.style.backgroundColor = 'black';

});

sun.addEventListener("click", () => {
    moon.style.display = "block";
    sun.style.display = "none";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    choose.style.backgroundColor = 'white';
    guestselected.style.backgroundColor = 'white';

});


    down.addEventListener("click",() => {
        down.style.display = "none";
        up.style.display = 'block';
        choose.style.display = "block";
        timing.style.display = "none";
  
    });

    up.addEventListener("click",() => {
        down.style.display = "block";
        up.style.display = "none";
        choose.style.display = "none";
        timing.style.display = "block";
       
       
    });



for(let i = 0; i < select.length; i++) {
  
    select[i].addEventListener("click", () => {
        choose.style.display = 'none';
        up.style.display = "none";
        down.style.display = "block";
    }) ;
}


for(let i = 0; i< guestList.length; i++) {

    guestList[i].addEventListener("click", () => {
        guestselected.innerHTML = guestList[i].innerHTML;
        choose.style.display= 'none';
        up.style.display = 'none';
        down.style.display = 'block';
        timing.style.display = "block";

    });
}

show.addEventListener("click", () => {
book.style.display = 'block';
});

Close.addEventListener("click", () => {
    book.style.display = 'none';
})