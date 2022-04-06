// navbar
const menuBtn1 = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar ul");
const searchList = document.querySelector("#searchBarList");
const menuBtn2 = document.querySelector(".navbar .container .menu-btn");

menuBtn1.addEventListener("click", () => {
  navbar.classList.add("slide");
  searchList.classList.add("slide");
  menuBtn1.classList.add("open");
  menuBtn2.classList.add("open");
});

menuBtn2.addEventListener("click", () => {
  navbar.classList.remove("slide");
  searchList.classList.remove("slide");
  menuBtn1.classList.remove("open");
  menuBtn2.classList.remove("open");
});

function searchBar() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchBarInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("searchBarList");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
