console.log("O JavaScript está funcionando!");

document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.getElementById('cards-container');

    const cardData = [
        { nome: 'Max', raca: 'Golden', idade: '2 anos', imagem: '/img/1.png' },
        { nome: 'Buddy', raca: 'Labrador', idade: '3 anos', imagem: '/img/1.png' },
        { nome: 'Luna', raca: 'Husky', idade: '1 ano', imagem: '/img/1.png' },
        { nome: 'Luna', raca: 'Husky', idade: '1 ano', imagem: '/img/1.png' },
        { nome: 'Luna', raca: 'Husky', idade: '1 ano', imagem: '/img/1.png' },
        { nome: 'Luna', raca: 'Husky', idade: '1 ano', imagem: '/img/1.png' },
        { nome: 'Luna', raca: 'Husky', idade: '1 ano', imagem: '/img/1.png' },
        { nome: 'Luna', raca: 'Husky', idade: '1 ano', imagem: '/img/1.png' },
        { nome: 'Luna', raca: 'Husky', idade: '1 ano', imagem: '/img/1.png' },
        { nome: 'Luna', raca: 'Husky', idade: '1 ano', imagem: '/img/1.png' },
        { nome: 'Luna', raca: 'Husky', idade: '1 ano', imagem: '/img/1.png' },
        { nome: 'Luna', raca: 'Husky', idade: '1 ano', imagem: '/img/1.png' },
        { nome: 'Luna', raca: 'Husky', idade: '1 ano', imagem: '/img/1.png' },
        { nome: 'Luna', raca: 'Husky', idade: '1 ano', imagem: '/img/1.png' },
        





        
    ];

    function createCard(cardData, container) {
        cardData.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');

            cardElement.innerHTML = `
                <img src="${card.imagem}" alt="Descrição da Imagem">
                <div class="column">
                    <div class="info">
                        <h2>Nome:</h2>
                        <p>${card.nome}</p>
                    </div>
                    <div class="info">
                        <h2>Raça:</h2>
                        <p>${card.raca}</p>
                    </div>
                    <div class="info">
                        <h2>Idade:</h2>
                        <p>${card.idade}</p>
                    </div>
                </div>
            `;

            container.appendChild(cardElement);
        });
    }

    createCard(cardData, cardsContainer);
});







document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.getElementById('cards-container');
    const optionsMenu = document.querySelector('.options-menu');
    const menuButton = document.querySelector('.menu-button');

    // Inicialmente, esconde o menu de opções
    optionsMenu.style.display = 'none';

    // Adiciona um evento de clique ao botão de três pontos
    menuButton.addEventListener('click', function () {
        // Alterna a visibilidade do menu de opções ao clicar no botão de três pontos
        if (optionsMenu.style.display === 'none' || optionsMenu.style.display === '') {
            optionsMenu.style.display = 'block';
        } else {
            optionsMenu.style.display = 'none';
        }
    })})