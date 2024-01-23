//nav traversing
$("aside a").on("click",function(){
    let offset=$($(this).attr("href")).offset().top;
    $("html , body").animate({
        scrollTop:offset
    },1000)
})
// open aside
$("#openSide").on("click", function(){
    $(this).animate({
        left:`${$("aside").css("width")}`
   },500)
    $("aside").animate({
    left:"0"
   },500);
   
})
//close aside
$("aside i").on("click",function(){
   
    $("aside").animate({
        left:`-${$("aside").css("width")}`
       },500);
       $("#openSide").animate({
        left:`0`
   },500)
})
/////////////////////////
//singer slideup and down 
$(".singer").on("click", function(){
    $(this).next().slideToggle(1000);
    $("#details").find("p").not($(this).next()).slideUp(1000);
})
//counter
let today=new Date();
let specificDate=new Date("1-30-2024 10:00:00"); //must be bigger
let difference=specificDate - today;
let days=Math.floor(difference/1000/60/60/24);
let hours=Math.abs(Math.ceil(difference/1000/60/60%24));
let mins=Math.floor(difference/1000/60%60);
let seconds=Math.floor(difference/1000%60);
setInterval(function(){
     today=new Date();
     difference=specificDate - today;
     days=Math.floor(difference/1000/60/60/24);
     hours=Math.abs(Math.ceil(difference/1000/60/60%24));
     mins=Math.floor(difference/1000/60%60);
     seconds=Math.floor(difference/1000%60);
     $("#day").html(`${days} D`);
     $("#hour").html(`${hours} H`);
     $("#minute").html(`${mins} M`);
     $("#seconds").html(`${seconds} S`)
},1000);
//form textarea
$("textarea").on("input", function(){
   
    if($(this).val().length > 100){
        $("form label").html(`<span>your available character finished</span> Character Reamining`);
    }else{
        $("label span").html(`${100 - $(this).val().length  }`);
    }
})

