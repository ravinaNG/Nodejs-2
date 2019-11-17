const jeffBuysCake = cakeType => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(cakeType === 'black forest'){
                resolve('black forest cake!')
            }
            else{
                reject('No cake ;)')
            }
        }, 10000)
    })
}

const promiss = jeffBuysCake('black forest')
.then(cake => console.log(cake))
.catch(nocake => console.log(nocake))