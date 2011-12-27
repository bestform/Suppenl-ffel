var bound = false;

function initFlipmode(){
    $("#barcontainer").hide();
    $("#sidebar").hide();
    $("#head").hide();
    $("#header").hide();
    $("#logo").hide();
    $(".date").hide();
    $first = $(".post").first();
    $first.addClass("lastOne");
    $first.addClass("firstEver");
    $(".post").css("visibility", "hidden");
    $first.css("visibility", "visible");

    if(!bound){
        document.addEventListener("keypress", function(event){
            //console.log("keydown!" + event.keyCode);
            var event = event || window.event;
            if(event.keyCode === 110){
                next(false);
            }
            if(event.keyCode === 98){
                next(true);
            }
        });
        bound = true;
    }
}

function next(back) {
    $(".date").hide();
    var $last = $(".lastOne");
    var $next;
    if(!back){
        $next = $last.nextAll(".post").first();
        if($next.size() === 0){
            $next = $last.parent().next().find(".post").first();
        }
    } else {
        $next = $last.prevAll(".post").first();
        if($next.size() === 0){
            $next = $last.parent().prev().find(".post").last();
        }
    }
    if($next.size() > 0){
        $last.removeClass("lastOne");
        $next.addClass("lastOne");
        $(".post").css("visibility", "hidden");
        $next.css("visibility", "visible");
        $(window).scrollTop($next.position().top);
        var $image = $next.find(".content").find("img");
        if($image.size() > 0){
            var src = $image.attr("src");
            if(src.match("gif$")){
                $image.attr("src", src);
            }
        }
    }
}
