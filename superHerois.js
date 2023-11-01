let heroic = "Mars People "
let xp = 25000

switch(true){
    case xp <= 1000:
    console.log("O herói: " + heroic + "está no nível de Ferro" )
    break 

    case xp <= 2000:
        console.log("O herói: " + heroic + "está no nível de Bronze")
        break 

    case xp <= 5000:
        console.log("O herói: " + heroic + "está no nível de Prata ")
        break
    
    case xp <= 6000:
        console.log("O herói : " + heroic + "está no nível de Ouro")
        break 

    case xp <= 8000:
        console.log("O herói : " + heroic + "está no nível de Platina Diamante ")
        break 

    case xp <=9000:
        console.log("O herói : " + heroic + "está no nível de Ascendente ")
        break

    case xp <= 10000:
        console.log("O herói : " + heroic + "está no nível de Imortal")
        break
    
    case xp >= 10001:
        console.log("O herói : " + heroic + "está no nível de Radiante ")
        break




}
