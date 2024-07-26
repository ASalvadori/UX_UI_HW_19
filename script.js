$(document).ready(function () {
  const toggleSwitch = $("#dark-mode-toggle");
  const hamburger = $('#hamburger');
  const navLinks = $('.nav-links');
  const scrollUpBtn = $("#scrollUpBtn");
  let currentIndex = 0;
  const items = $('.testimonial-item');
  const itemCount = items.length;

  // Dark mode toggle
  toggleSwitch.on("change", function () {
    this.checked ? enableDarkMode() : disableDarkMode();
  });

  function enableDarkMode() {
    $("body").addClass("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  }

  function disableDarkMode() {
    $("body").removeClass("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }

  if (localStorage.getItem("darkMode") === "enabled") {
    toggleSwitch.prop("checked", true);
    enableDarkMode();
  }

  // Scroll Up Button
  $(window).on("scroll", function () {
    $(this).scrollTop() > 20 ? scrollUpBtn.show() : scrollUpBtn.hide();
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
    if (testimonialSection.length && testimonialSection.offset().top < windowBottom) {
      testimonialSection.addClass("slide-in").removeClass("hidden");
    }
  });

  // Testimonial carousel
  $('.next').click(function () {
    currentIndex = (currentIndex < itemCount - 1) ? currentIndex + 1 : 0;
    items.hide().eq(currentIndex).show();
  });

  $('.prev').click(function () {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : itemCount - 1;
    items.hide().eq(currentIndex).show();
  });

  items.hide().eq(currentIndex).show();

  // Animate the text
  $('.animated-text').on('animationend', function () {
    $(this).removeClass('animated-text').addClass('static-text');
  });

  // Hamburger menu toggle
  hamburger.on('click', function () {
    navLinks.toggleClass('active');
  });

  // Handle touch events for image hover effect
  $('.image-hover').on('click', function () {
    $('.image-hover').not(this).removeClass('active'); // Remove active class from other elements
    $(this).toggleClass('active'); // Toggle active class on the clicked element
  });
});
