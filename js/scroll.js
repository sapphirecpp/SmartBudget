document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
  
    for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener("click", smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
      var targetId = this.getAttribute("href");
      var targetElement = document.querySelector(targetId);
      var startPosition = window.pageYOffset;
      var targetPosition = targetElement.getBoundingClientRect().top + startPosition;
      var startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var progress = timeElapsed / 1000; // 1000 milliseconds (1 second) for the entire animation
        var run = easeInOut(progress, startPosition, targetPosition, 1);
        window.scrollTo(0, run);
        if (progress < 1) requestAnimationFrame(animation);
      }
  
      function easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  });