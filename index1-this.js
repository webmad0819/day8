let Game = {
    version: "1.0",
    author: "Esther",
    getScore: function () {
        console.log(this.score.points + "⭐️")
    },
    setScore: function (scoreParam) {
        if (scoreParam < 1000) {
            this.score.points = scoreParam
        }   else {
            this.score.points = 1000
        }
    },
    score: {
        goalsAchieved: 5,
        points: 100
    },
    player: {
        name: "dani",
        level: 5,
        levels: [

        ]

    }
}


// var name = "pepe"

// function testThis() {
//     // var name = "dani"

//     // console.log(this);
//     console.log(`the name is ${this.name}`)
// }

// testThis();