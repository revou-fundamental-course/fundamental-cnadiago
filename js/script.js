// ini javascript
function replaceUser(){
    let User = prompt("Isi nama kamu di sini","Seseorang");
    document.getElementById("User").innerHTML = User
    
}

document.getElementById('tombol').addEventListener("click", function() {replaceUser();})