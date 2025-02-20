$(".btn-click").on("click", function () {
  alert("clicking");
});

$(document).ready(function () {
  // boats page filter accordion

  $(document).ready(function () {
    $(".custom-card-header").click(function () {
      if (
        $(this).find("span.fa").hasClass("fa-plus") ||
        $(this).find("i.fa").hasClass("fa-angle-down")
      ) {
        $(".custom-boat-accordion")
          .find(".content-show")
          .removeClass("content-show");
        $(".custom-boat-accordion")
          .find(".fa-minus")
          .removeClass("fa-minus")
          .addClass("fa-plus");
        $(".custom-accordion")
          .find(".fa-angle-up")
          .removeClass("fa-angle-up")
          .addClass("fa-angle-down");

        $(this).find("span.fa").removeClass("fa-plus").addClass("fa-minus");
        $(this)
          .find("i.fa")
          .removeClass("fa-angle-down")
          .addClass("fa-angle-up");
        $(this).next(".card-content").addClass("content-show");
      } else if (
        $(this).find("span.fa").hasClass("fa-minus") ||
        $(this).find("i.fa").hasClass("fa-angle-up")
      ) {
        $(this).find("span.fa").removeClass("fa-minus").addClass("fa-plus");
        $(this)
          .find("i.fa")
          .removeClass("fa-angle-up")
          .addClass("fa-angle-down");
        $(this).next(".card-content").removeClass("content-show");
      }
    });
  });

  $(".filter_btn").click(function () {
    $(".new_768").addClass("new_one");
  });

  $(".close_cross").click(function () {
    $(".new_768").removeClass("new_one");
  });

  if ($(window).width() < 991) {
    $(".left_tabs").addClass("new_768");
  } else {
    $(".left_tabs").removeClass("new_768");
  }

  $(window).on("resize", function () {
    if ($(window).width() < 991) {
      $(".left_tabs").addClass("new_768");
    } else {
      $(".left_tabs").removeClass("new_768");
    }
  });

  $(".desk_clear").on("click", function () {
    $(".new_768").removeClass("new_one");
  });

  $(".opeN_clik").on("click", function () {
    var my_title = $(this).attr("title");
    var card_id = "#" + my_title;
    $(".new_768").addClass("new_one");
    $("#faq").find("i.fa").removeClass("rotate180deg");
    $("#faq").find(".mobile_change").removeClass("content-show");
    $(card_id).find("i.fa").addClass("rotate180deg");
    $(card_id).find(".mobile_change").addClass("content-show");
  });
});

$(document).ready(function () {
  $.ajax({
    url: "https://buywakeworks.com/get-products-db",
    method: "GET",
    dataType: "json",
    success: function (data) {
      var ProductReuslt = data;
      console.log("Abdullah", Product.Reuslt);
    },
    error: function (error) {
      console.log("Error fetching products:", error);
    },
  });
});
