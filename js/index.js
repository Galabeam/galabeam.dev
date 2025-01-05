document.addEventListener("DOMContentLoaded", (event) => {
    $(function() {
        $("#naviframe").load("/html/navigation.html");
    });

    const meta = document.createElement("meta");
    meta.name = "google";
    meta.content = "notranslate";
    document.getElementsByTagName("head")[0].appendChild(meta);

    document.addEventListener("load", function() {
        if (document.getElementById("nav" + document.body.id) != null) {
            document.getElementById("nav" + document.body.id).style.color = "white"
        }
    });

    if (document.body.id == "404") {
        if (location.href.endsWith(".html") != true) {
            location.href = (location.href + ".html");
        };
    };
})
