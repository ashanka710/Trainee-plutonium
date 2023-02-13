const express = require("express")
const cardModel = require("../model/cardModel.js")

//============================== Create Card =======================
const createCard = async function (req, res) {
    try {

       let data = req.body
        

        // cardNumber  Auto_increment e.g: C001

        const cardData = await cardModel.create(data)
        if (cardData) {
            console.log("cardNumber ==> ", cardData.cardNumber)
            let savedata = {
                cardData, 
                
                
            }
            
        }
        res.status(201).send({ status: true, message: "Create Successful", data: cardData})
        
        

    }catch (error) {
        console.log(error.message)
        res.status(500).send({status: false, message: error.message})
    }

}

//========================== Fetch Card data ======================

const getCardData = async function (req, res) {

    try {

        let data = req.query;

        let getCard = await cardModel.find()
        res.status(200).send({ status: true, message: "success", data: getCard })







    } catch (error) {
        console.log(error.message)
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = { createCard, getCardData };