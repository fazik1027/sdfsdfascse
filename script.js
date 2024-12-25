document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const icon = document.querySelector('.icon');
    const dropdownImage = dropdownButton.querySelector('img');
    const dropdownText = dropdownButton.querySelector('span');
  
    
    dropdownButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('active');
      icon.classList.toggle('active');
    });
  

    dropdownItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img').src;
        const text = item.querySelector('span').textContent;
  
       
        dropdownImage.src = img;
        dropdownText.textContent = text;
  
       
        dropdownItems.forEach(i => {
          i.classList.remove('selected');
        });
  
       
        item.classList.add('selected');
  
        dropdownMenu.classList.remove('active');
        icon.classList.remove('active');
      });
    });
  
  
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.dropdown')) {
        dropdownMenu.classList.remove('active');
        icon.classList.remove('active');
      }
    });
  });
  