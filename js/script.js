$(document).ready(function() {
  console.log('jQuery ready'); //debug jQuery
  // executes when HTML-Document is loaded and DOM is ready

  //load project into nav list
  $.each(project,function(index, element){
    var str = '<li id="'+element.id+'">'+element.title+'</li>';
    $('#nav').append(str);
  });


  $('#nav li').click(function() {
    var id = $(this).attr("id");
    var detial;
    $.each(project,function(index, element){
      if(id == element.id){
        detail = {
          title: element.title,
          description: element.description,
          content: element.content
        }
      }
    });
    console.log(detail);

    $('#detail').empty();
    $('#detail').css('visibility','visible');
    var str = '<h1>'+ detail.title + '</h1><br><h3>'+detail.description.slice(1,-1)+'</h3><br><p>'+detail.content+'</p>';
    $('#detail').append(str);
  });

  $('#nav li').hover(function() {
  $('#detail').append();


    });

    $(document).ready(function(e) {
      $('#myfellowprincesses').hover(function(){
      $main_text=$(this).text();
      $(this).text("我的公主朋友");
    },function(){
      $(this).text($main_text);
      });

      $('#chineselogo').hover(function(){
      $main_text=$(this).text();
      $(this).text("中国商标");
    },function(){
      $(this).text($main_text);
      });

      $('#acharmingstory').hover(function(){
      $main_text=$(this).text();
      $(this).text("童话故事");
    },function(){
      $(this).text($main_text);
      });

      $('#slm').hover(function(){
      $main_text=$(this).text();
      $(this).text("爱情魔药");
    },function(){
      $(this).text($main_text);
      });

      $('#bhutan_tourism').hover(function(){
      $main_text=$(this).text();
      $(this).text("不丹陆游");
    },function(){
      $(this).text($main_text);
      });

      $('#museum_of_design').hover(function(){
      $main_text=$(this).text();
      $(this).text("设计博物馆");
    },function(){
      $(this).text($main_text);
      });

      $('#zhu_bamboo').hover(function(){
      $main_text=$(this).text();
      $(this).text("竹住家用");
    },function(){
      $(this).text($main_text);
      });

      $('#bumblebee').hover(function(){
      $main_text=$(this).text();
      $(this).text("小蜜蜂");
    },function(){
      $(this).text($main_text);
      });

      $('#title').hover(function(){
      $main_text=$(this).text();
      $(this).text("姚洁茜");
    },function(){
      $(this).text($main_text);
      });

      $('#contact').hover(function(){
      $main_text=$(this).text();
      $(this).text("联系");
    },function(){
      $(this).text($main_text);
      });

      $('#resume').hover(function(){
      $main_text=$(this).text();
      $(this).text("简历");
    },function(){
      $(this).text($main_text);
      });


  });


  function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
  }

});
