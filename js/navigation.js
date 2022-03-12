function navigationToggle() {
  var logo = document.getElementById("logo");
  var navigation = document.getElementById("navigation");
  var buttonOpen = document.getElementById("navigation-button-open");
  var buttonClose = document.getElementById("navigation-button-close");
  var navigatioList = document.querySelector(".navigation__list");
  var navigationIsClose = navigation.classList.contains("navigation-closed");

  if (navigationIsClose == true) {
    navigation.classList.remove("navigation-closed")
    navigation.classList.add("navigation__opened")
    buttonOpen.classList.add("navigation-button-hide")
    buttonClose.classList.remove("navigation-button-hide")
    navigatioList.classList.remove("navigation-button-hide")
    logo.classList.add("logo-fixed")
  }

  if (navigationIsClose == false) {
    navigation.classList.add("navigation-closed")
    navigation.classList.remove("navigation__opened")
    buttonOpen.classList.remove("navigation-button-hide")
    buttonClose.classList.add("navigation-button-hide")
    navigatioList.classList.add("navigation-button-hide")
    logo.classList.remove("logo-fixed")
  }
}
