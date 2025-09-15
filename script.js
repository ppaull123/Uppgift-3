const myH1 = document.querySelector("#myH1");
const myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click",
    function() {
        myH1.textContent = "Goodbye World!";
    }
);