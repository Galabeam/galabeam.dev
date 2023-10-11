window.addEventListener("DOMContentLoaded", (event) => {
    $ (function() {
        $ ("#naviframe").load("navigation.html");
    })

    window.addEventListener('load', function() {
        document.getElementById("nav" + document.body.id).style.color = "white"
    })
})