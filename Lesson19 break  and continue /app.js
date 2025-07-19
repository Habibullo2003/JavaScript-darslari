let talabalar = ['Habibullo', 'Azamat', 'Anvar', 'Islom', 'Nurbek', 'Doston']

for(let i=0; i<talabalar.length; i++){
    if(talabalar[i] === 'Anvar'){
        continue
    }
    
    console.log('Talaba: ', talabalar[i])
    
    if(talabalar[i] === 'Islom') {
        console.log('Talabalar muvaffaqiyatli universitetni bitirishdi!')
        break
    }
}