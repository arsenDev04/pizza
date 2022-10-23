let span = document .querySelector(".meny--navbar--block--atl span")
span.addEventListener("click", () => {
    document.querySelector(".meny--navbar--block--block").style.display = 'block'
})
let close = document .querySelector(".meny--navbar--block--block2")
close.addEventListener("click", () => {
    document.querySelector(".meny--navbar--block--block1").style.display = 'none'
})

