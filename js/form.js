function handleFormSubmit(event) {
    event.preventDefault();
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var purpose = document.getElementById('Purpose').value;
    var note = document.getElementById('Note').value;

    var resultHTML = `
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Tujuan:</strong> ${purpose}</p>
    <p><strong>Pesan:</strong> ${note}</p>
    `;

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = resultHTML;

    resultDiv.classList.remove('no-border');
    resultDiv.classList.add('with-border');
     }