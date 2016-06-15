$(document).ready(function(){
   
   $('.animate-1').animate3d({});
   
   run();
   
   
$('.nav-pills li').click(function(){
   
   $('.active').removeClass('active');
   $(this).addClass('active'); 
   run();
})

function run () {
   var data = $('.active').children('a').data('option');
   $('.animate-2').animate3d(data);
   $('#code').text("$('element').animate3d("+ JSON.stringify(data) +")");
};
   
});