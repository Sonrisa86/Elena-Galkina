$(document).ready(function(){
	
$('.owl-carousel').owlCarousel({
	items: 1,
	nav: true,
  navText: ["",""],
	loop: true,
	autoplay: true,
	autoplayHoverPause: true,

});

});



function addField () {
  var telnum = parseInt($("#add_field_area").find("div.add:last").attr("id").slice(3)) 1;
 
  $("div#add_field_area").append("<div id="add" telnum "" class="add"><label> Поле №" telnum "</label><input type="text" width="120" name="val[]" id="val"  value=""/></div>");
}