var logo = document.getElementById("logo");
var navigation = document.getElementById("navigation");

function navigationToggle() {
    navigation.classList.toggle("navigation__opened");
    logo.classList.toggle("logo-fixed")
}

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.scrollto').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      navigation.classList.remove("navigation__opened");
      logo.classList.remove("logo-fixed")

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
