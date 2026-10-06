/**
 * Opened from the home-screen icon, go straight on to the portal. Opened in a
 * browser tab, stay put: that is the page somebody adds to their home screen
 * from, and leaving it at once would take the icons with it.
 *
 * The address is read from the button rather than written here as well, so
 * there is one place to change when the deployment does. Nothing is ever read
 * from this page's own URL, so it cannot be made to send anybody elsewhere.
 */
(function () {
  var portal = document.getElementById('open').href;
  var fromHomeScreen = window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;
  if (!fromHomeScreen) return;

  document.documentElement.classList.add('from-home-screen');
  window.location.replace(portal);
})();
