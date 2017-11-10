//strike through the li by adding the click event handler
/*
var styles={
    color:"gray",
 textDecoration:"line-through"
}
var styles1={
    color:"black",
    textDecoration:"none"
}

$("li").on("click",function(){
    if($(this).css("color")==="rgb(128, 128, 128)")
        {
      $(this).css(styles1);      
        }
    else{
        $(this).css(styles);
    }
    
    
})
*/
//alternative for the toggling of the ss properties based on the evenets
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
$("ul").on("click","span",function(e){
//alert("hii");
    $(this).parent().fadeOut(500,function(){ //here this refers to the span tag 
        $(this).remove(); //here this refers to the parent that is the li element
    });
    e.stopPropagation();//this is built in jquery method to stop the evnet bubbling so that all the layers masked aboove the span doesnot fires up
    
});

$("input[type='text']").keypress(function(e){
    if(e.which===13){
        //here which is used for extracting the keycode
        //grab new todo text from the input tag
        var newtext=$(this).val();
        $(this).val("");//this act as a setter and clears the input tag
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+newtext+"</li>");
        
    }
    //console.log("key pressed!");
    
});
$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle(); 
});