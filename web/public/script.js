function sinclick() {
    myfrom.mytxtshow.value = Math.sin(toRadians(myfrom.mytxt.value));
}
function cosclick() {
    myfrom.mytxtshow.value = Math.cos(toRadians(myfrom.mytxt.value));
}
function tanclick() {
    myfrom.mytxtshow.value = Math.tan(toRadians(myfrom.mytxt.value));
}
function cscclick() {
    myfrom.mytxtshow.value = 1/Math.sin(toRadians(myfrom.mytxt.value));
}
function secclick() {
    myfrom.mytxtshow.value = 1/Math.cos(toRadians(myfrom.mytxt.value));
}
function cotclick() {
    myfrom.mytxtshow.value = 1/Math.tan(toRadians(myfrom.mytxt.value));
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
// JavaScript to automatically focus the input field on page load
window.onload = function() {
    document.getElementById('display').focus();
};
function clearDisplay() {
    document.getElementById('degreeInput').value = '';
    document.getElementById('display').innerText = '';
    myfrom.mytxt.value = '';
    myfrom.mytxtshow.value = '';
    document.getElementById('display').focus();
}

