window.addEventListener("DOMContentLoaded", (event) => {
    $ (function() {
        $ ("#naviframe").load("/navigation.html");
    })

    window.addEventListener('load', function() {
        if (document.getElementById("nav" + document.body.id) != null) {
            document.getElementById("nav" + document.body.id).style.color = "white"
        }
    })

    if (document.body.id == "404") {
        if (location.href.endsWith(".html") != true) {
            location.href = (location.href + ".html")
        }
    }
})