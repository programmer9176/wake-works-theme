


      $('.btn-click').on('click', function() {
        alert('clicking');
    });

    $(document).ready(function() {
      $('.card-header').click(function(){
          if($(this).find("span").hasClass("fa-angle-up")){
              $(this).find("span").removeClass("fa-angle-up").addClass("fa-angle-down");
              $(this).next(".card-content").removeClass("show");
          } else if($(this).find("span").hasClass("fa-angle-down")){
              $(this).find("span").removeClass("fa-angle-down").addClass("fa-angle-up");
              $(this).next(".card-content").addClass("show");
          }
      });

      $('.filter_btn').click(function(){
          $('.new_768').addClass('new_one');
      });

      $(".close_cross").click(function(){
          $('.new_768').removeClass('new_one');
      });

      if($(window).width() < 991) {
          $('.left_tabs').addClass('new_768');
      } else {
          $('.left_tabs').removeClass('new_768');
      }

      $(window).on('resize', function() {
          if($(window).width() < 991) {
              $('.left_tabs').addClass('new_768');
          } else {
              $('.left_tabs').removeClass('new_768');
          }
      });

      $('.desk_clear').on('click', function () {
          $('.new_768').removeClass('new_one');
      });

      $(".opeN_clik").on("click", function(){
          var my_title = $(this).attr('title');
          var card_id= "#"+ my_title;
          $('.new_768').addClass('new_one');
          $("#faq").find("i.fa").removeClass("rotate180deg");
          $("#faq").find(".mobile_change").removeClass("content-show");
          $(card_id).find("i.fa").addClass("rotate180deg");
          $(card_id).find(".mobile_change").addClass("content-show");
      });
  });
