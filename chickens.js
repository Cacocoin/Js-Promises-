// chained promises

let hasEggs = true;

const chickenHasEggs = new Promise ((resolve, reject)=> {

if (hasEggs){
    let boxOfEggs = {
        egg1: 1,
        egg2: 2,
        egg3: 3,
        egg4: 4,
        egg5: 5,
        egg6: 6, 
    };
    resolve(boxOfEggs)   
}
else{ 
    let noEggs = new Error('Our hens need more time...')
    reject(noEggs)
}

})

function eggsHaveChicks (boxOfEggs) { 
    let randomizedEgg = Math.floor(Math.random()*6+1)


    return new Promise(
        function (resolve, reject) {
            let eggCondition 
             eggChecker = () => { for(i in boxOfEggs){
             boxOfEggs[i] === randomizedEgg? eggCondition =  randomizedEgg : eggCondition
            } 
            return eggCondition
        }

    let eggsAlive = `Egg ${eggChecker()} has a chick! It's alive! `
    resolve(eggsAlive) } )

}


chickenHasEggs.then(eggsHaveChicks).then(complete => console.log(complete)).catch(error => (console.log(error.message))) 
