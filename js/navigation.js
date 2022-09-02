let menuButton = document.querySelector(".navigation__menu-button");
let navigation = document.querySelector(".navigation");

function navigationToggle() {
	menuButton.addEventListener('click', function() {
		menuButton.classList.toggle('button__pressed');
		navigation.classList.toggle('navigation--opened');
    // body.classList.toggle('noscroll');
		console.log('click');

    if (navigation.classList.contains('navigation--opened') == true) {
      document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(navigation);
        if ( ! withinBoundaries ) {
          menuButton.classList.remove('button__pressed');
          navigation.classList.remove('navigation--opened');
          // body.classList.remove('noscroll');
        }
      })
    }
	})
}

navigationToggle();

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 80;

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });

      navigationClose();
  });
});
