/* jquery script */


$(function() {
  
  $( ".see3" ).dialog({
    autoOpen: false
  });


  /* make it pop: onClick in see1 block, open dialogue for see2 */
  $(".see1").on( "click", function() {
    console.log( $( this ).text() );
    //$(".see3").css("display","block");
    //$( this ).children(".see3").css('display','block');
    console.log( $( this ).children(".see3").text() );
		$(".see3").css("display: none;");	
		$( this ).children(".see3").css("display: block;");
    //$( this ).children(".see3").dialog("open");
  });



  $(".see1XX").bind( "click", function() {
    console.log( $( this ).children("see3").html );
    $( this ).children("see3").dialog(); 
    // modal = set to true?
  });

});