const welcome = function() {
    console.log(" Welcome to my application.I am Ashanka Dongare and a part of FunctionUp Plutonium cohort.")

}
const problem1 = function() {
    console.log("problem - 1 ")
}
const empty = function() {
    console.log(" ")
}
welcome()
problem1()
empty()
module.exports.welcome = welcome
module.exports.problem1 = problem1
module.exports.empty = empty