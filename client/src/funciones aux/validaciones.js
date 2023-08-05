function validate(input){
    let errors = {}
    if (!input.name){
        errors.name = ("Pokemon's name required")
    } else if (input.name.length >= 15){
        errors.name = ("Pokemon's name is too long!")
    } else if (input.name.length < 3){
        errors.name = ("Pokemon's name is too short!")
    } else{
        errors.name = null
    }
    if (!input.health){
        errors.health = ("Pokemon's health required")
    }else if (input.health >255){
        errors.health = ("the pokemon's health is too much!")
    }else if(input.health < 0){
        errors.health = ("the pokemon's health is too little!")
    }
    else{
        errors.health = null
    }
    if (!input.speed){
        errors.speed = ("Pokemon's speed required")
    }else if (input.speed > 200){
        errors.speed = ("the pokemon's speed is too much!")
    }else if(input.speed < 0){
        errors.speed = ("the pokemon's speed is too little!")
    }else{
        errors.speed = null
    }
    if (!input.attack){
        errors.attack = ("Pokemon's attack required")
    }else if (input.attack > 220){
        errors.attack = ("the pokemon's attack is too much!")
    }else if(input.attack < 0){
        errors.attack = ("the pokemon's attack is too little!")
    }else{
        errors.attack = null
    }
    if (!input.defense){
        errors.defense = ("Pokemon's defense required")
    }else if (input.defense > 220){
        errors.defense = ("the pokemon's defense is too much!")
    }else if(input.defense < 0){
        errors.defense= ("the pokemon's defense is too little!")
    }else{
        errors.defense = null
    }
    if (!input.height){
        errors.height = ("Pokemon's height required")
    }else if (input.height > 30){
        errors.height = ("this pokemon is too big!")
    }else if(input.height < 0){
        errors.height = ("the pokemon's height is too tiny!")
    }else{
        errors.height = null
    }
    if(!input.weight){
        errors.weight = ("Pokemon's weight required")
    }else if (input.weight > 1000){
        errors.weight = ("this pokemon is too heavy!")       
    }else if(input.weight < 0){
        errors.weight = ("the pokemon's weight is too lightweight!")
    }
    else{
        errors.weight = null
    }
    return errors
}

export default validate