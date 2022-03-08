let getCube = document.querySelectorAll('p')

getCube.forEach(input => input.addEventListener('click', (e) => e.target.classList.toggle('active')))