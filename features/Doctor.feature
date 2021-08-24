# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar aqueles que não estiverem saudáveis
    Para que possamos seguir a viagem.

    Contexto:
        Dado um Doctor de nome "Klaiton"
        E ele sempre começa a sua viagem com 1 refeição
        E ele sempre começa a sua viagem saudável

    Cenário: Cura alguém doente
        Quando o Doctor curar um Traveler doente
        Então o Traveler deverá ficar saudável

    Cenário: Cura alguém já saudável
        Quando o Doctor tenta curar um Traveler já saudável
        Então o Traveler deverá continuar saudável