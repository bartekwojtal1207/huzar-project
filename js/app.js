// move in list in help section
$(document).ready(function(){

  var li = $(".content_help li").first();
  var all_li = $(".content_help li");
  new_list = $(".new_list");
  var counter = 1;
  li.on("click",function(){
    li.css("list-style-image","url('../huzar_projekt/img/arrow.png')");
    li.css("color","black");
    $(this).css("color","green");
    $(this).css("list-style-image","url('../huzar_projekt/img/arrow_green.png')");
    counter ++;
    if (counter%2==0) {
      $(this).css("margin-bottom","8em");
      new_list.slideToggle(1000);
    }else {
        $(this).css("margin-bottom","0em");
        new_list.slideToggle(0);
    }
  })
  all_li.on("click",function(){
    all_li.css("list-style-image","url('../huzar_projekt/img/arrow.png')");
    all_li.css("color","black");
    $(this).css("color","green");
    $(this).css("list-style-image","url('../huzar_projekt/img/arrow_green.png')");
  })
});
