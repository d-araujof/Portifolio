const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});



const textElements = [
    { element: document.getElementById('saudacao'), text: 'HELLO WORLD' },
    { element: document.getElementById('nome'), text: 'Sou a Maria Eduarda,' },
    { element: document.getElementById('cargo'), text: 'Desenvolvedora Front-End.' }
];

let delay = 0;

textElements.forEach(({ element, text }) => {
    let index = 0; // Para controlar a posição do caractere
    element.textContent = ''; // Limpa o conteúdo do elemento
    const cursor = document.querySelector('.cursor');

    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index); // Adiciona o caractere
            index++;
            setTimeout(type, 100); // Tempo entre cada caractere
        } else {
            // Oculta o cursor após a digitação
            cursor.style.display = 'none'; 
            // Adiciona a classe fade-in apenas uma vez, após a digitação
            element.classList.add('fade-in');
        }
    };

    setTimeout(type, delay); // Inicia a digitação após um atraso
    delay += text.length * 100 + 1000; // Aumenta o atraso baseado no tamanho do texto
});
