let NameInput = document.getElementById('Name-Input');
document.getElementById('Tombol').addEventListener("click", function () {
    const Nama = NameInput.value;
    document.getElementById('User').innerHTML = Nama;

});

