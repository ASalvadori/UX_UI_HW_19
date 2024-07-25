$(document).ready(function () {
    const toggleSwitch = $("#dark-mode-toggle");
  
    toggleSwitch.on("change", function () {
      if (this.checked) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  
    function enableDarkMode() {
      $("body").addClass("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    }
  
    function disableDarkMode() {
      $("body").removeClass("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  
    // Check localStorage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
      toggleSwitch.prop("checked", true);
      enableDarkMode();
    }
  
    // Scroll Up Button
    const scrollUpBtn = $("#scrollUpBtn");
  
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        scrollUpBtn.show();
      } else {
        scrollUpBtn.hide();
      }
    });
  
    scrollUpBtn.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  
    // Smooth scrolling for all anchor links
    $('a[href*="#"]').on("click", function (e) {
      e.preventDefault();
  
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },
        800,
        "linear"
      );
    });
  });
  $(document).ready(function () {
    const toggleSwitch = $("#dark-mode-toggle");
  
    toggleSwitch.on("change", function () {
      if (this.checked) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  
    function enableDarkMode() {
      $("body").addClass("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    }
  
    function disableDarkMode() {
      $("body").removeClass("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  
    // Check localStorage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
      toggleSwitch.prop("checked", true);
      enableDarkMode();
    }
  
    // Scroll Up Button
    const scrollUpBtn = $("#scrollUpBtn");
  
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        scrollUpBtn.show();
      } else {
        scrollUpBtn.hide();
      }
    });
  
    scrollUpBtn.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  
    // Smooth scrolling for all anchor links
    $('a[href*="#"]').on("click", function (e) {
      e.preventDefault();
  
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },
        800,
        "linear"
      );
    });
  
    // Slide in testimonial section when it comes into view
    $(window).on("scroll", function () {
      const testimonialSection = $(".testimonial");
      const windowBottom = $(this).scrollTop() + $(this).innerHeight();
  
      if (testimonialSection.length) {
        const testimonialTop = testimonialSection.offset().top;
  
        if (testimonialTop < windowBottom) {
          testimonialSection.addClass("slide-in");
          testimonialSection.removeClass("hidden");
        }
      }
    });
  $(document).ready(function () {
    let currentIndex = 0;
    const items = $('.testimonial-item');
    const itemCount = items.length;
  
    $('.next').click(function () {
      if (currentIndex < itemCount - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      items.hide().eq(currentIndex).show();
    });
  
    $('.prev').click(function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = itemCount - 1;
      }
      items.hide().eq(currentIndex).show();
    });
  
    items.hide().eq(currentIndex).show();
  });
  });
  
  $(document).ready(function() {
    var animatedText = $('.animated-text');
  
    animatedText.on('animationend', function() {
      $(this).removeClass('animated-text').addClass('static-text');
    });
  });
  
  
  
  
  
  
  
  