let printdate = function() {
    let today = new Date()
    console.log(today.getDate())
}
let printmonth = function() {
    let today = new Date()
    console.log(today.getMonth() + 1)
}
let printBatchinfo = function() {
    console.log("plutonium, W3D3, the topic for today is Nodejs module system ")

}
printBatchinfo()
printmonth()
printdate()

module.exports.printBatchinfo = printBatchinfo
module.exports.printmonth = printmonth
module.exports.printdate = printdate