function load() {
    var loadTimeout;
    loadTimeout = setTimeout(showPage, 3516);
}

function showPage() {
    document.getElementById('loaderwrapper').style.display = "none";
    document.getElementById('bodywrapper').style.display = "block";
}