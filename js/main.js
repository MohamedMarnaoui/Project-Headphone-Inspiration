//Side navigation menu

const allItems = document.querySelectorAll('.navmenu ul li a');
allItems.forEach(item => {
    item.addEventListener("click", function (e) {
        //Here we will write loop remove all prevois classes active
        for (var i = 0; i < allItems.length; i++) {
            allItems[i].classList.remove("active");
        }
        this.classList.add("active");
    });
});