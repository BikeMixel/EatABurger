$(function () {
    $(".change-eat").on("click", function (event) {
        var id = $(this).data("id")
        var newEat = $(this).data("neweat")

        var newEatState = {
            uneaten: newEat
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(function () {
            location.reload()
        })
    })
    $("#submit").on("click", function (event) {
        event.preventDefault()

        var newBurger = {
            name: $("#newBurger").val().trim(),
            uneaten: true
        }

        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function () {  
            location.reload()
        })
    })
    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id")
        console.log(id) 
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function () {
            location.reload()
        })
    })
})