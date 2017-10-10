getJson();

function getJson() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.response);
        }
    };
    xhttp.open("GET", "http://localhost/API/hardware_list.json", true);
    xhttp.send();

};
