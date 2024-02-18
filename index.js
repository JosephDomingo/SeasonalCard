$(document).ready(function(){
    var envelope = $("#envelope");
    var button_open = $("#open");
    var button_reset = $("#reset");

    envelope.click(function(){
        open();
    });

    button_open.click(function(){
        open();
    });

    button_reset.click(function(){
        close();
    });

    function open(){
        envelope.addClass("open")
            .removeClass("close");
    }

    function close(){
        envelope.addClass("close")
            .removeClass("open");
    }

})



