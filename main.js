/*change icon with back-ground by jquery*/
$(function(){
    $(".label .checkbox").click(function(){
        if($(this).prop("checked")){
            $("body").removeClass("sun")
            $("body").addClass("daybackground")
        }else{
            $("body").removeClass("daybackground")
            $("body").addClass("sun")
        }
    })
})