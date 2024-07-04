document.addEventListener("DOMContentLoaded", function() {
    let NameInput = document.getElementById('Name');
    document.getElementById('Submit').addEventListener("click", function () {
        const Nama = NameInput.value;
        document.getElementById('User').innerHTML = Nama;
    });
});