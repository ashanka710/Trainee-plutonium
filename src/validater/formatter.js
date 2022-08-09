function trim() {
    let name = "ashanka"
    console.log("trim name is", name.trim())
}

function changetoLowerCase() {
    let name = "ASHANKA"
    console.log(" name is lowercase", name.toLowerCase())
}

function changetoUpperCase() {
    let name = "ashanka"
    console.log(" name is uppercase", name.toUpperCase())
}
trim()
changetoLowerCase()
changetoUpperCase()
module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase