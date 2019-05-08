function copyFunction() {
    var copyText = document.getElementById("code");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}