const quotes = [
    {
        day: 1,
        quote: `December és a tél első napja.<br>
        "Ha nem lenne tél, nem élveznénk annyira a tavaszt."<br>(Anne Bradstreet)`,
    },
    {
        day: 2,
        quote: "Békességet, boldogságot, csengőszót és gyertyalángot. Ajándékot, szeretetet, s mindent, ami fontos neked. Ajtód elé fehér bársonyt, adjon Isten szép karácsonyt!"
    },
    {
        day: 3,
        quote: "Útra kélt az erdő ezer fenyőfája örömet szerezni szerte a világba. Meghittség, boldogság, szeretet és béke legyen a családod örökös vendége! Boldog karácsonyt!",
    },
    {
        day: 4,
        quote: `Fehér porcukorral hinti a tél most a szemhatárt
        <br>jégcsappal cifrázott tetőn
        <br>tánclépésben lép a szél,
        <br>a völgyekben köd zenél.
        <br>Álomport szór hunyt szememre
        <br>majd kacsintva tovafut,
        <br>a karácsony siklik erre,
        <br>nyugalmat hoz nyűtt szívekre,
        <br>messze űz minden borút.
        <br>(Havas Éva: Karácsony felé)`,
    },
    {
        day: 5,
        quote: "Szálljatok le betlehemi angyalok! Zörgessetek ma este meg minden piciny ablakot, s házikókba, palotákba egy örömet vigyetek: boldog, békés ünnepeket!",
    },
    {
        day: 6,
        quote: "Kiskarácsony, nagykarácsony, angyal csókja rátok szálljon. Hozzon nektek minden jót, ne csak almát, mogyorót. Boldogságot, békességet, szép jövőt, melegséget, békés karácsonyt kívánva néked!",
    },
    {
        day: 7,
        quote: "Hópihécske száll az égen, kis csengettyű szólal szépen. Az angyalok ma táncra kelnek, gyertyafénynél énekelnek. Mosolyogva mondják néked: békés boldog ünnepeket!",
    },
    {
        day: 8,
        quote: `A fehér hó most is megmarad,
        <br>Díszes az egész táj.
        <br>Büszke fenyő sír a hó alatt,
        <br>"De nehéz, jaj, de fáj!"
        <br>Sötét van. Gyertyák égnek,
        <br>Fénylenek a zöld fán,
        <br>S álmodra angyalok vigyáznak,
        <br>Karácsony éjszakáján.
        <br>(Rummel József: Karácsony)`,
    },
    {
        day: 9,
        quote: "Odakint hó hull, idebent csend ül. Az áhítatban pici harang csendül. Egy angyal csendben a fa mellé repül, a szeretetet hozta nekünk ünnepül. Békés karácsonyt!",
    },
    {
        day: 10,
        quote: "Mikor kigyúlnak a fények, pajkos koboldok zenélnek. Huncut mosollyal egy rád kacsint, és közben csillámport hint. Így adja át az üzenetet: kellemes ünnepeket!",
    },
    {
        day: 11,
        quote: "Kívánd, hogy mindaz, amit ma éjjel gondoltál, ugyanúgy igaz legyen holnap, s holnapután. Kívánj igazi ünnepet, kívánj igazabb életet. Én pedig békés karácsonyt kívánok neked!",
    },
    {
        day: 12,
        quote: `Szobában a kis fenyő
        <br>oly vidámnak látszik,
        <br>ajándékkal telt ágán
        <br>csillagszóró játszik.
        <br>Maradjon a szeretet
        <br>ne csak vendégségbe,
        <br>költözzön a szívekbe
        <br>legyen mindig béke.
        <br>(Lupsánné Kovács Eta: Karácsony)`,
    },
    {
        day: 13,
        quote: `Karácsony ünnepére
        <br>Az a kívánságom,
        <br>E háznak népére
        <br>Béke, öröm várjon.`,
    },
    {
        day: 14,
        quote: `Kiskarácsony, nagykarácsony,
        <br>kisült-e már a kalácsom?
        <br>Ha kisült már, ide véle,
        <br>Hadd egyem meg melegébe!`,
    },
    {
        day: 15,
        quote: `
        Éj-mélyből fölzengő
        <br>- csing-ling-ling - száncsengő.
        <br>Száncsengő - csing-ling-ling -
        <br>tél öblén halkan ring.
        <br>(Weöres Sándor: Száncsengő - részlet)`,
    },
    {
        day: 16,
        quote: `Béke szálljon minden házra,
        Kis családra, nagy családra!
        Karácsonyfa fenyőága,
        Hintsél békét a világra! `,
    },
    {
        day: 17,
        quote: `Eljött a karácsony,
        <br>Minden gyermek vágya,
        <br>A karácsonyfa díszesen
        <br>Áll a szobába.
        <br>Mesekönyv és babaház
        <br>Vár a gazdájára,
        <br>Az arcocskák virulnak
        <br>Ajándékot látva.
        <br>(Nagy Hajni: Kis karácsonyi vers)`,
    },
    {
        day: 18,
        quote: "Itt volt egy angyalka, s azt súgta nékem: gondolj ma azokra, kik szívedbe férnek! Eszembe jutottál te és a családod, ezúton kívánok boldog karácsonyt!", 
    },
    {
        day: 19,
        quote: "Ha olykor mégis gyötör az élet, azért most örülj a jónak, a szépnek. S szívedben csendüljön mind az ének, hogy vannak, akik szeretnek téged!<br>Boldog karácsonyi ünnepeket!",
    },
    {
        day: 20,
        quote: "Csillagfényes álmaid váljanak valóra, legyen ünnep lelkednek minden nap és óra. Kerülje a bánat örökre el házad, érjen annyi boldogság, mit ember csak kívánhat! Boldog karácsonyi ünnepeket!",
    },
    {
        day: 21,
        quote: `Harang csendül,
        <br>Ének zendül,
        <br>Messze zsong a hálaének,
        <br>Az én kedves kis falumban
        <br>Karácsonykor
        <br>Magába száll minden lélek.
        <br>(Ady Endre: Karácsonyi rege - részlet)
        <br>(<a href="https://www.youtube.com/watch?v=BH5hINK2nPU" target="_blank">Szabó Gyula előadásában itt</a>)`,
    },
    {
        day: 22,
        quote: "Csillag száll az esti égen, utat mutat sötét éjben. A szeretet ma újraéled, halkan szól most minden ének. Körülölel, mint egy bársony, legyen boldog a karácsony!",
    },
    {
        day: 23,
        quote: "Áldott estén, karácsony éjen angyalok szállnak fenn az égen. Mindenkihez be-benéznek, mindenhová odaérnek. Áldást hoznak minden házra, csillagot a fenyőfára, varázslatos karácsonyt kívánva!",
    },
    {
        day: 24,
        quote: "Eljött hát a Szenteste, díszítik a fákat, békesség lengi be az egész házat. Hozzon a Jézuska sok-sok ajándékot, járja át boldogság az egész családot! Békés boldog karácsonyt!",
    },
]

const body = document.getElementById('body');
const boxContainer = document.getElementById('boxContainer');
const boxes = document.getElementsByClassName('btn');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');
const box10 = document.getElementById('box10');
const box11 = document.getElementById('box11');
const box12 = document.getElementById('box12');
const box13 = document.getElementById('box13');
const box14 = document.getElementById('box14');
const box15 = document.getElementById('box15');
const box16 = document.getElementById('box16');
const box17 = document.getElementById('box17');
const box18 = document.getElementById('box18');
const box19 = document.getElementById('box19');
const box20 = document.getElementById('box20');
const box21 = document.getElementById('box21');
const box22 = document.getElementById('box22');
const box23 = document.getElementById('box23');
const box24 = document.getElementById('box24');
const xmasMusic = new Audio('./sound/christmasmusic.mp3');

var playSound;
var message;

body.onclick = () => {
    playSound = !playSound;
    if (playSound) {
        xmasMusic.play();
        xmasMusic.loop = true;
    } else { 
    xmasMusic.pause();
    }
}

/*
boxContainer.onclick = (e) => {
    const selectedButton = e.target;
        if (selectedButton.innerHTML == quotes.day) {
            message = !message;
            if(message) {
                innerHTML = quotes.quote;
            } else {
                selectedButton.innerHTML = quotes.day;
            }
        }
}
*/

const now = new Date();
const date1 = new Date('Dec 01 2022 18:00:00 GMT+0100');
const date2 = new Date('Dec 02 2022 18:00:00 GMT+0100');
const date3 = new Date('Dec 03 2022 18:00:00 GMT+0100');
const date4 = new Date('Dec 04 2022 18:00:00 GMT+0100');
const date5 = new Date('Dec 05 2022 18:00:00 GMT+0100');
const date6 = new Date('Dec 06 2022 18:00:00 GMT+0100');
const date7 = new Date('Dec 07 2022 18:00:00 GMT+0100');
const date8 = new Date('Dec 08 2022 18:00:00 GMT+0100');
const date9 = new Date('Dec 09 2022 18:00:00 GMT+0100');
const date10 = new Date('Dec 10 2022 18:00:00 GMT+0100');
const date11 = new Date('Dec 11 2022 18:00:00 GMT+0100');
const date12 = new Date('Dec 12 2022 18:00:00 GMT+0100');
const date13 = new Date('Dec 13 2022 18:00:00 GMT+0100');
const date14 = new Date('Dec 14 2022 18:00:00 GMT+0100');
const date15 = new Date('Dec 15 2022 18:00:00 GMT+0100');
const date16 = new Date('Dec 16 2022 18:00:00 GMT+0100');
const date17 = new Date('Dec 17 2022 18:00:00 GMT+0100');
const date18 = new Date('Dec 18 2022 18:00:00 GMT+0100');
const date19 = new Date('Dec 19 2022 18:00:00 GMT+0100');
const date20 = new Date('Dec 20 2022 18:00:00 GMT+0100');
const date21 = new Date('Dec 21 2022 18:00:00 GMT+0100');
const date22 = new Date('Dec 22 2022 18:00:00 GMT+0100');
const date23 = new Date('Dec 23 2022 18:00:00 GMT+0100');
const date24 = new Date('Dec 24 2022 18:00:00 GMT+0100');

/*
box1.onclick = () => {
    message = !message;
    if(message) {
        box1.innerHTML = quotes[0].quote;
    } else {
        box1.innerHTML = quotes[0].day;
    }
}
*/

box1.onclick = () => {
    if(now > date1) {
        message = !message;
        if(message) {
            box1.innerHTML = quotes[0].quote;
        } else {
            box1.innerHTML = quotes[0].day;
        }
    }       
}

box2.onclick = () => {
    if(now > date2) {
        message = !message;
        if(message) {
            box2.innerHTML = quotes[1].quote;
        } else {
            box2.innerHTML = quotes[1].day;
        }
    }
}

box3.onclick = () => {
    if(now > date3) {
        message = !message;
        if(message) {
            box3.innerHTML = quotes[2].quote;
        } else {
            box3.innerHTML = quotes[2].day;
        }
    }
}

box4.onclick = () => {
    if(now > date4) {
        message = !message;
        if(message) {
            box4.innerHTML = quotes[3].quote;
        } else {
            box4.innerHTML = quotes[3].day;
        }
    }
}

box5.onclick = () => {
    if(now > date5) {
        message = !message;
        if(message) {
            box5.innerHTML = quotes[4].quote;
        } else {
            box5.innerHTML = quotes[4].day;
        }
    }
}

box6.onclick = () => {
    if(now > date6) {
        message = !message;
        if(message) {
            box6.innerHTML = quotes[5].quote;
        } else {
            box6.innerHTML = quotes[5].day;
        }
    }
}

box7.onclick = () => {
    if(now > date7) {
        message = !message;
        if(message) {
            box7.innerHTML = quotes[6].quote;
        } else {
            box7.innerHTML = quotes[6].day;
        }
    }
}

box8.onclick = () => {
    if(now > date8) {
        message = !message;
        if(message) {
            box8.innerHTML = quotes[7].quote;
        } else {
            box8.innerHTML = quotes[7].day;
        }
    }
}

box9.onclick = () => {
    if(now > date9) {
        message = !message;
        if(message) {
            box9.innerHTML = quotes[8].quote;
        } else {
            box9.innerHTML = quotes[8].day;
        }
    }
}

box10.onclick = () => {
    if(now > date10) {
        message = !message;
        if(message) {
            box10.innerHTML = quotes[9].quote;
        } else {
            box10.innerHTML = quotes[9].day;
        }
    }
}

box11.onclick = () => {
    if(now > date11) {
        message = !message;
        if(message) {
            box11.innerHTML = quotes[10].quote;
        } else {
            box11.innerHTML = quotes[10].day;
        }
    }
}

box12.onclick = () => {
    if(now > date12) {
        message = !message;
        if(message) {
            box12.innerHTML = quotes[11].quote;
        } else {
            box12.innerHTML = quotes[11].day;
        }
    }
}

box13.onclick = () => {
    if(now > date13) {
        message = !message;
        if(message) {
            box13.innerHTML = quotes[12].quote;
        } else {
            box13.innerHTML = quotes[12].day;
        }
    }
}

box14.onclick = () => {
    if(now > date14) {
        message = !message;
        if(message) {
            box14.innerHTML = quotes[13].quote;
        } else {
            box14.innerHTML = quotes[13].day;
        }
    }
}

box15.onclick = () => {
    if(now > date15) {
        message = !message;
        if(message) {
            box15.innerHTML = quotes[14].quote;
        } else {
            box15.innerHTML = quotes[14].day;
        }
    }
}

box16.onclick = () => {
    if(now > date16) {
        message = !message;
        if(message) {
            box16.innerHTML = quotes[15].quote;
        } else {
            box16.innerHTML = quotes[15].day;
        }
    }
}

box17.onclick = () => {
    if(now > date17) {
        message = !message;
        if(message) {
            box17.innerHTML = quotes[16].quote;
        } else {
            box17.innerHTML = quotes[16].day;
        }
    }
}

box18.onclick = () => {
    if(now > date18) {
        message = !message;
        if(message) {
            box18.innerHTML = quotes[17].quote;
        } else {
            box18.innerHTML = quotes[17].day;
        }
    }
}

box19.onclick = () => {
    if(now > date19) {
        message = !message;
        if(message) {
            box19.innerHTML = quotes[18].quote;
        } else {
            box19.innerHTML = quotes[18].day;
        }
    }
}

box20.onclick = () => {
    if(now > date20) {
        message = !message;
        if(message) {
            box20.innerHTML = quotes[19].quote;
        } else {
            box20.innerHTML = quotes[19].day;
        }
    }
}

box21.onclick = () => {
    if(now > date21) {
        message = !message;
        if(message) {
            box21.innerHTML = quotes[20].quote;
        } else {
            box21.innerHTML = quotes[20].day;
        }
    }
}

box22.onclick = () => {
    if(now > date22) {
        message = !message;
        if(message) {
            box22.innerHTML = quotes[21].quote;
        } else {
            box22.innerHTML = quotes[21].day;
        }
    }
}

box23.onclick = () => {
    if(now > date23) {
        message = !message;
        if(message) {
            box23.innerHTML = quotes[22].quote;
        } else {
            box23.innerHTML = quotes[22].day;
        }
    }
}

box24.onclick = () => {
    if(now > date24) {
        message = !message;
        if(message) {
            box24.innerHTML = quotes[23].quote;
        } else {
            box24.innerHTML = quotes[23].day;
        }
    }
}