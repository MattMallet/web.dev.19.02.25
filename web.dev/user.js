import { rg, nomeFake , sobreFake , }from "./faker.js"

function createUser() {
    let obj = {
        firstName: nomeFake(),
        lastName: sobreFake(),
        rg: rg(),
        email: "afiapacaboucomaminhavida"
    }
    return obj 
}