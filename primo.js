function nump (npr){
    for(var i = 2; i < npr; i++){
        if(npr % i == 0){
            console.log('NÃO É PRIMO: ' + npr)
            return false
        }
    }
    console.log('É PRIMO: ' + npr)
    return true
    }



