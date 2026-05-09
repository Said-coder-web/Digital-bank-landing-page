let bar = document.querySelector(".bar"),
  headerNav = document.querySelector("header nav")

console.log(headerNav)

let close = true;


bar.addEventListener("click", () => {
  close = !close
  if (close) {
    bar.src = "images/icon-hamburger.svg"
    headerNav.style.cssText = "opacity: 0; visibility: hidden; top: 80px"

    document.querySelector(".overlay").remove()
  } else {
    bar.src = "images/icon-close.svg"
    headerNav.style.cssText = "opacity: 1; visibility: visible; top: 90px"

    let overLay = document.createElement("div")
    overLay.className = "overlay"

    document.body.append(overLay)

    document.querySelector(".overlay").addEventListener("click", () => {
      bar.click()
    })
  }
})

headerNav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    headerNav.querySelectorAll("a").forEach(a => {
      a.classList.remove("active")
    })
    a.classList.add("active")
    // bar.click()
  })
})