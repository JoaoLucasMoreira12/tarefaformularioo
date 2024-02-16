function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage');
  
    if (name === '' || email === '' || phone === '') {
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
    } else {
      errorMessage.style.display = 'none';
      successMessage.style.display = 'block';
      // Aqui você pode adicionar lógica para enviar o formulário para o servidor, se necessário.
    }
  }
  