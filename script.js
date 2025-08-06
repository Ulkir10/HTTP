function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

document.querySelector('.add-btn').addEventListener('click', function () {
  let name = document.getElementById('name').value.trim();
  let number = document.getElementById('number').value.trim();

  if (name === '' || number === '') {
    alert('Заполни оба поля');
    return;
  }

  if (!/^\d+$/.test(number)) {
    alert('В поле "Number" можно писать только цифры');
    return;
  }

  let contact = document.createElement('div');
  contact.className = 'contact';

  contact.innerHTML = `
    <div class="info">
      <img src="3f5cf4289cf8483ebbc58307f41ae1a8.jpg" alt="">
      <div>
        <strong>${name}</strong><br>
        <small>${number}</small>
      </div>
    </div>
    <div class="icons">
      <i class="edit">✏️</i>
      <i class="trash">🗑️</i>
    </div>
  `;

  contact.querySelector('.trash').onclick = function () {
    contact.remove();
  };

  contact.querySelector('.edit').onclick = function () {
    let currentName = contact.querySelector('strong').textContent;
    let currentNumber = contact.querySelector('small').textContent;

    let newName = prompt('Введите новое имя:', currentName);
    if (newName === null || newName.trim() === '') return;

    let newNumber = prompt('Введите новый номер (только цифры):', currentNumber);
    if (newNumber === null || newNumber.trim() === '') return;

    if (!/^\d+$/.test(newNumber)) {
      alert('В номере можно писать только цифры');
      return;
    }

    contact.querySelector('strong').textContent = newName.trim();
    contact.querySelector('small').textContent = newNumber.trim();
  };

  document.querySelector('.contact-list').appendChild(contact);
  document.getElementById('name').value = '';
  document.getElementById('number').value = '';
});
