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


