# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo racionar meus mantimentos
    E dividi-los com outros Travelers
    Para possamos seguir a viagem saudáveis.

    Contexto:
        Dado um Hunter de nome "Anderson"
        E ele sempre começa a sua viagem com 2 refeições
        E ele sempre começa a sua viagem saudável

    Cenário: Foi a caça para conseguir refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a sua quantidade de refeições deve ser igual a 7

    Cenário: Comeu e continuou saudável
        Quando o Hunter parar para comer 1 vezes
        Então a sua quantidade de refeições deve ser igual a 0
        E o Hunter não ficará doente

    Cenário: Compartilhou comida com um Traveler
        Quando o Hunter compartilhar 1 refeições com um Traveler
        Então a quantidade de refeições do Hunter deve ser igual a 1
        E o Traveler deverá receber mais 1 refeições

    Cenário: Tentou compartilhar comida e não conseguiu
        Quando o Hunter compartilhar 6 refeições com um Traveler
        Então a quantidade de refeições do Hunter deve se manter como 2
        E o Traveler não receberá refeições

    Cenário: Comeu e adoeceu
        Quando o Hunter parar para comer 2 vezes
        Então a sua quantidade de refeições deve ser igual a 0
        E o Hunter ficará doente