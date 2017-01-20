//Nav Document
$(document).ready(function(){
"use strict";
//Nav Document
$('#nav').localScroll(800);	
	//Bx Slider Document
	$('.bxslider, .gallery_slider').bxSlider();

	//Fancy Box Document
	//$("a.lightbox").fancybox({
	$("a[rel=group]").fancybox({					   
	'transitionIn'		: 'none',
	'transitionOut'		: 'none',
	'titlePosition'		:'over',
	'titleFormat'		: function(title, currentArray, currentIndex) {
	return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
	}
	});
	
	//Responsive Menu Document
	jQuery("<select  class='mobile-menu' name='dropdpown' onChange='scrollTo(this.value)' />").appendTo("#nav");
	
	jQuery("<option />", {
	"selected": "selected",
	"value"   : "",
	"text"    : "Go to..."
	}).appendTo("nav select");
	
	jQuery("ul#nav li a").each(function() {
	var el = jQuery(this);
	
	if(jQuery(this).parents("ul#nav").length > 0)
	{
	jQuery("<option />", {
	"value"   : el.attr("href"),
	//"text"    : '\xa0'+ '\xa0'+ '\xa0'+ el.text()
	"text"    : " -- "+ el.text()
	}).appendTo("#nav select");
	
	} else {
	jQuery("<option />", {
	"value"   : el.attr("href"),
	"text"    : " - "+ el.text()
	}).appendTo("#nav select");
	}
	});
	
	jQuery("#nav select").change(function() {													 
	window.location = jQuery(this).find("option:selected").val();				
	
	});
	
	//Active link code Document
	jQuery("ul#nav li a").live('click', function() {
	sessionStorage.gblHash = jQuery(this).attr("href"); 
	
	jQuery("ul#nav li a").removeClass("active"); 
	jQuery(this).addClass("active");  
	
	});
	
	function WIN_LOAD()
	{
	if(typeof sessionStorage.gblHash === "undefined") {
	sessionStorage.gblHash = "#home";
	}
	jQuery("ul#nav li a").removeClass("active");   
	jQuery("a[href='"+sessionStorage.gblHash+"']").addClass("active"); 
	}
	
	function listen(evnt, elem, func) {
	if (elem.addEventListener)  
	elem.addEventListener(evnt,func,false);
	else if (elem.attachEvent) { 
	var r = elem.attachEvent("on"+evnt, func);
	return r;
	}
	}
	
	listen("load", window, WIN_LOAD);
	
	//Image Hover Effect Document
	$(function() {
	$(".roll").css("opacity","0");
	$(".roll").hover(function () {
	$(this).stop().animate({
	opacity: 0.7
	}, "slow");
	},
	function () {
	
	$(this).stop().animate({
	opacity: 0
	}, "slow");
	});
	});
});