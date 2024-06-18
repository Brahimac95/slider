let items = document.querySelectorAll(".slider .list .item");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item")

//********* Config Param *********//
let countItem = items.length;
let itemActive = 0;

//********* Next click ********//
nextBtn.addEventListener("click", handleNext)
function handleNext(){
    itemActive = itemActive + 1
    if(itemActive >= countItem){
        itemActive = 0
    }
    showSlider()
}
//******** Prev click ********//
prevBtn.addEventListener("click", handlePrev)
function handlePrev(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider()
}

//******** Auto slider ********/
let refreshInterval = setInterval(() => {
    nextBtn.click()
}, 4000); 

function showSlider(){

    //***** Remove item active old ********//
    let itemActiveOld = document.querySelector(".slider .item.active");
    let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
    itemActiveOld.classList.remove('active')
    thumbnailActiveOld.classList.remove('active')

    // ******** Active new item ****//
    items[itemActive].classList.add('active')
    thumbnails[itemActive].classList.add('active');
    
    //******** Clear auto time silder ********//
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 4000)
}

//**************** Click thumbnail *************//
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        itemActive = index;
        showSlider()
    })
})



