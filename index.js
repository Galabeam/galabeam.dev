window.addEventListener("DOMContentLoaded", (event) => {
    $ (function() {
        $ ("#naviframe").load("/navigation.html");
    })

    window.addEventListener('load', function() {
        document.getElementById("nav" + document.body.id).style.color = "white"
    })

    var url = window.location.href
    function UrlExists(url) {
        var http = new XMLHttpRequest()
        http.open('HEAD', url, false)
        http.send()
        if (http.status == 404) {
            console.log("is thy 404")
            location.href == (url + ".html")
        }
    }

    UrlExists(url)
})