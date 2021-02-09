var embed = document.getElementById("world-map");
embed.addEventListener('load', function () {
    var svg = embed.getSVGDocument();
    var labelIndia = svg.getElementById("label-india");
    var labelSriLanka = svg.getElementById("label-srilanka");
    var labelPakistan = svg.getElementById("label-pakistan");
    var labelMyanmar = svg.getElementById("label-myanmar");
    var labelIndonesia = svg.getElementById("label-indonesia");
    var labelCambodia = svg.getElementById("label-cambodia");
    var labelBangladesh = svg.getElementById("label-bangladesh");
    var countries = [labelIndonesia, labelIndia, labelBangladesh, labelCambodia, labelMyanmar, labelPakistan, labelSriLanka]
    labelIndia.setAttribute("display", "none");
    labelSriLanka.setAttribute("display", "none");
    labelPakistan.setAttribute("display", "none");
    labelMyanmar.setAttribute("display", "none");
    labelIndonesia.setAttribute("display", "none");
    labelCambodia.setAttribute("display", "none");
    labelBangladesh.setAttribute("display", "none");

    $(svg.getElementsByClassName("country-click")).click(function () {
        console.log(this.id);
        switch (this.id) {

            case "cluster-india":
                countries.forEach(function (item) {
                    item.setAttribute("display", "none")
                });
                labelIndia.setAttribute("display", "block");
                break;
            case "cluster-srilanka":
                countries.forEach(function (item) {
                    item.setAttribute("display", "none")
                });
                labelSriLanka.setAttribute("display", "block");
                break;
            case "cluster-pakistan":
                countries.forEach(function (item) {
                    item.setAttribute("display", "none")
                });
                labelPakistan.setAttribute("display", "block");
                break;
            case "cluster-myanmar":
                countries.forEach(function (item) {
                    item.setAttribute("display", "none")
                });
                labelMyanmar.setAttribute("display", "block");
                break;
            case "cluster-indonesia":
                countries.forEach(function (item) {
                    item.setAttribute("display", "none")
                });
                labelIndonesia.setAttribute("display", "block");
                break;
            case "cluster-cambodia":
                countries.forEach(function (item) {
                    item.setAttribute("display", "none")
                });
                labelCambodia.setAttribute("display", "block");
                break;
            case "cluster-bangladesh":
                countries.forEach(function (item) {
                    item.setAttribute("display", "none")
                });
                labelBangladesh.setAttribute("display", "block");
                break;

        }

    })

    $(svg.getElementById("background")).click(function () {
        countries.forEach(function (item) {
            item.setAttribute("display", "none")
        });
    });
});

