

$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//This function will remove an element.In the UI we will be clicking the 'X' mark, which is nothing but a Span
$("ul").on("click","span",function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500,function(){
        $(this).remove()
    });
});


//Check if the event is 'Enter'
//Capture the value
//Create a new li and add it
$("input[type='text']").keypress(function(event){
    if(event.which == 13){
        var todoList = $(this).val();
        $(this).val = " ";
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoList + " </li>");

    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();

});