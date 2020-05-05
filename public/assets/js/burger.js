

    $(".devourBtn").on("click", function(){

        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type : "PUT"

        }).then(function(response){
          
            location.reload();
        });
        
    });

    $(".deleteBtn").on("click", function(){

        const id = $(this).data("id");
        
        $.ajax("/api/burgers/" + id, {

            type : "DELETE"
            
        }).then(function(response){
           
            location.reload();
        });

    });

    $("#submit").on("click", function(event){
        event.preventDefault();

        const burger = $("#burgerName").val().trim();
        const burgerName = { burger };
        
        $.ajax("/api/burgers", {

            type : "POST",
            data : burgerName

        }).then(function(response){
           
            location.reload();

        });
    });




