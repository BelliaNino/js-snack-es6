console.log('ok');


/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const bike = [
    {
        type: 'Lightweight Road Bike',
        weight: 6.5
    },
    {
        type: 'Endurance',
        weight: 7
    },
    {
        type: 'Gravel Bike',
        weight: 9.5
    },
    {
        type: 'Cross-Country',
        weight: 1.12
    },
    {
        type: 'Enduro MTB',
        weight: 13
    },
    {
        type: 'Urban Bike',
        weight: 17
    },
    {
        type: 'Fitness Bike',
        weight: 13
    },
    {
        type: 'Folding Bike',
        weight: 12.5
    },
    {
        type: 'Gravel E-Bike',
        weight: 15.5
    },
    {
        type: 'E-MTB',
        weight: 25
    },
]
console.log(bike);






/*Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


//creare un array con all'interno degli objects 
const ucl = [
    {
        club: 'Inter',
        pt: 0,
        fc: 0
    },
    {
        club: 'Milan',
        pt: 0,
        fc: 0
    },
    {
        club: 'Juventus',
        pt: 0,
        fc: 0
    },
    {
        club: 'Arsenal',
        pt: 0,
        fc: 0
    },
    {
        club: 'Chelsea',
        pt: 0,
        fc: 0
    },
    {
        club: 'Manchester City',
        pt: 0,
        fc: 0
    },
    {
        club: 'Liverpool',
        pt: 0,
        fc: 0
    },
    {
        club: 'Tottenham',
        pt: 0,
        fc: 0
    },
    {
        club: 'Real Madrid',
        pt: 0,
        fc: 0
    },
    {
        club: 'Atletico Madrid',
        pt: 0,
        fc: 0
    },
    {
        club: 'Barcelona',
        pt: 0,
        fc: 0
    },
    {
        club: 'Bayern Munich',
        pt: 0,
        fc: 0
    },
    {
        club: 'Borussia Dortmund',
        pt: 0,
        fc: 0
    },
    {
        club: 'PSG',
        pt: 0,
        fc: 0
    },
    {
        club: 'Fluminense',
        pt: 0,
        fc: 0
    },
    {
        club: 'Flamengo',
        pt: 0,
        fc: 0
    },
    {
        club: 'River Plate',
        pt: 0,
        fc: 0
    },
    {
        club: 'Boca Juniors',
        pt: 0,
        fc: 0
    },
    {
        club: 'Colo Colo',
        pt: 0,
        fc: 0
    },
    {
        club: 'Ajax',
        pt: 0,
        fc: 0
    },
];


//formulare dei numeri casuali per i punti e per i falli commessi 
for (let i = 0; i < ucl.length; i++) {
    ucl[i].pt = Math.floor(Math.random() * 90) + 1;
    ucl[i].fc = Math.floor(Math.random() * 50) + 1;
    console.log(ucl[i])
}

//creare un array vuota per inserire la squadra e i falli commessi 
let teamFaul = []

//grazie al ciclo for inserire nella nuova array solo i club con i rispettivi falli commessi
for (let i = 0; i < ucl.length; i++) {
    teamFaul.push({
        club: ucl[i].club,
        falli: ucl[i].fc
    })

}

//stampo l'array in console
console.log(teamFaul);
