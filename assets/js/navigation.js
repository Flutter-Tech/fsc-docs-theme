document.addEventListener("DOMContentLoaded", function () {
  // Lazy load images
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }

  // Navigation control
  // Adds toggle to parent menus
  const menuIconToggleEls = document.getElementsByClassName("parent-icon");
  for (let toggleEl of menuIconToggleEls) {
    toggleEl.addEventListener("click", function () {
      toggleVerticalMenu(toggleEl);
    });
  }
  // Adds marking class to current page menu
  const linkMenusEl = document.getElementsByClassName("menu-link");
  markMenu(linkMenusEl);
  // Opens parent menus
  const menuElements = findElementByClassUrl("menu-link", window.location.href);
  openMenus(menuElements);
  
  //Hides search box when document body width below 539px
  var scrollY = 0;
  var width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const scrollLimit = 28;
  const widthLimit = 540;
  var el = document.querySelector(".search-container");
  if (width < widthLimit) {
    window.addEventListener("scroll", function () {
      onScroll(scrollY, el, scrollLimit);
    });
  }
});
//Adds css class to open element
function toggleVerticalMenu(el) {
  var parentEl = el.parentNode;
  parentEl.classList.toggle("nav-open");
}
//Marks the menu that points to the current URL
function markMenu(menuElements) {
  for (let linkMenu of menuElements) {
    linkMenuHref = linkMenu.getAttribute("href");
    if (linkMenuHref === window.location.pathname) {
      linkMenuParent = linkMenu.parentNode;
    }
  }
}
//Checks if is child menu and opens parents
function openMenus(menuElements) {
  for (var i = 0; i < menuElements.length; i++) {
    while (!menuElements[i].classList.contains("root-menu")) {
      menuElements[i] = menuElements[i].parentNode;
      // Check if the element has to be marked and mark it
      if (menuElements[i].classList.contains("nav-parent")) {
        menuElements[i].classList.add("nav-open");
      }
    }
  }
}

// Finds element by class that match and URL
function findElementByClassUrl(cssclass, url) {
  var elements = document.getElementsByClassName(cssclass);
  var found = [];
  for (var i = 0; i < elements.length; i++) {
    // Check if element is the one that points to the passed url
    if (elements[i].href === url && elements[i].classList.contains(cssclass)) {
      found.push(elements[i]);
    }
  }
  return found;
}
// hides element when scroll Y is above a defined value
function onScroll(scrollY, el, scrollLimit) {
  var doc = document.documentElement;
  if (doc.scrollTop !== scrollY && doc.scrollTop > scrollLimit) {
    scrollY = doc.scrollTop;
    el.hidden = true;
  } else {
    el.hidden = false;
  }
}
