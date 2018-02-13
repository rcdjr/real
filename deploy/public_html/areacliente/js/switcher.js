/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	
		// Color Changer
		$(".green" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=7cb600" );
			return false;
		});
		
		$(".blue" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=169FE6" );
			return false;
		});
		
		$(".orange" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=fa5b0f" );
			return false;
		});
		
		$(".navy" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=495d7f" );
			return false;
		});
		
		$(".yellow" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=ffb400" );
			return false;
		});
		
		$(".peach" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=fcab55" );
			return false;
		});
		
		$(".beige" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=c62020" );
			return false;
		});

		$(".purple" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=6957af" );
			return false;
		});

		$(".red" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=169FE6" );
			return false;
		});

		$(".pink" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=c71c77" );
			return false;
		});
		
		$(".celadon" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=74aea1" );
			return false;
		});
		
		$(".brown" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=784e3d" );
			return false;
		});
		
		$(".cherry" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=911938" );
			return false;
		});
		
		$(".gray" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=707070" );
			return false;
		});
		
		$(".dark" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=404040" );
			return false;
		});
		
		$(".cyan" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=37b6bd" );
			return false;
		});
		
		$(".olive" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=b3c211" );
			return false;
		});
		
		$(".dirty-green" ).click(function(){
			$("#colors" ).attr("href", "css/color/color.php?color=3b6e40" );
			return false;
		});

		$("#style-switcher h2 a").click(function(e){
			e.preventDefault();
			var div = $("#style-switcher");
			console.log(div.css("left"));
			if (div.css("left") === "-195px") {
				$("#style-switcher").animate({
					left: "0px"
				}); 
			} else {
				$("#style-switcher").animate({
					left: "-195px"
				});
			}
		})
		
		// Menu Style Switcher
	   $("#menu-style").change(function(e){
			if( $(this).val() == 1){
				$("#quick-info").css('display','none');
				$("#site-menu").css('display','none');
				$("#news-slide").css('display','block');
				$("#full-menu").css('display','block');
				$("#header-widget").css('display','block');         
			} else{
				$("#quick-info").css('display','block');
				$("#site-menu").css('display','block');
				$("#news-slide").css('display','none');
				$("#full-menu").css('display','none');
				$("#header-widget").css('display','none');        
			}
		})

	   $("#layout-style").change(function(e){
			if( $(this).val() == 1){
				$("#layout").addClass("container");
				$("#layout").removeClass("fullwidth"); 
				$('#layout-bg').css("display",'block');       
			} else{
				$("#layout").removeClass("container").addClass("fullwidth");
				$('#layout-bg').css("display",'none');        
			}
		})

		$(".colors li a").click(function(e){
			e.preventDefault();
			$(this).parent().parent().find("a").removeClass("active");
			$(this).addClass("active");
		})
		
		$(".bg li a").click(function(e){
			e.preventDefault();
			$(this).parent().parent().find("a").removeClass("active");
			$(this).addClass("active");
			var bg = $(this).css("backgroundImage");
			$("body").css("backgroundImage",bg)
		})

		$("#reset a").click(function(e){
			var bg = $(this).css("backgroundImage");
			$("body").css("backgroundImage","url(./images/bg/bright_squares.png)");
			$("#layout" ).addClass("container")
		})

	});