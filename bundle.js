import "./assets/js/bootstrap.js";

import "./assets/js/vanilla-cookieconsent/dist/cookieconsent.umd.js";

// import "./cookie.js";
// import "./checkEU.js";

$(document).ready(function () {
  $("#menubutton").click(function () {
    $(".mainmenu").toggle(function () {});
    $("#menubutton").toggleClass("close");
    $(".toplinks").toggleClass("open");
  });

  $("body").hide().fadeIn(800);

  var previousActiveTabIndex = 0;

  $(".wrapperfavorite .tab-switcher").on("click keypress", function (event) {
    // event.which === 13 means the "Enter" key is pressed

    if (
      (event.type === "keypress" && event.which === 13) ||
      event.type === "click"
    ) {
      var tabClicked = $(this).data("tab-index");

      if (tabClicked != previousActiveTabIndex) {
        $("#allTabsContainer .tab-container").each(function () {
          if ($(this).data("tab-index") == tabClicked) {
            $(".tab-container").hide();
            $(this).fadeIn();
            previousActiveTabIndex = $(this).data("tab-index");
            return;
          }
        });
      }
    }
  });

  $(".wrapperfavorite .toplinks li").click(function () {
    var tabid = $(this).attr("rel");
    $(this).parents(".toplinks").find(".active").removeClass("active");
    $(this).addClass("active");
    return false;
  });

  // Show the first tab and hide the rest
  // $("#tradesmart li:first-child").addClass("active");
  // $(".tab-content").hide();
  // $(".tab-content:first").show();

  // // Click function
  // $("#tradesmart li").click(function () {
  //   $("#tradesmart li").removeClass("active");
  //   $(this).addClass("active");
  //   $(".tab-content").hide();

  //   var activeTab = $(this).find("a").attr("href");
  //   $(activeTab).fadeIn();
  //   return false;
  // });
});

const menuItem = document.querySelectorAll(
  "#header .mainmenu .menu-item-has-children"
);

menuItem.forEach((item) => {
  item.addEventListener("click", function () {
    const subMenu = this.querySelector(".sub-menu");
    if (
      window.matchMedia("(max-width: 768px)").matches ||
      window.matchMedia("(max-width: 1200px)").matches
    ) {
      if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
      } else {
        subMenu.style.display = "block";
        subMenu.style.position = "relative";
        subMenu.style.width = "100%";
      }
    }
  });
});

// new WOW().init();
