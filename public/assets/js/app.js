$(function () {
    $(".change-eat").on("click", function (event) {
        var id = $(this).data("id")
        var newEat = $(this).data("neweat")

        var newEatState = {
            eaten: newEat
        }
        console.log("newEat: ", newEat)
        console.log("newEatState: ", newEatState)

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(function () {
            console.log("changed eaten status to ", newEat)
            location.reload()
        })
    })
    $(".create-form").on("submit", function (event) {
        event.preventDefault()

        var newBurger = {
            name: $("#newBurger").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        }
        console.log(newBurger)
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("created new burger")   
            location.reload()
        })
    })
    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id")
        console.log(id) 
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function () {
            console.log("deleted burger")
            location.reload()
        })
    })
})