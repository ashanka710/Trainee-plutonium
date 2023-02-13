const express = require("express");
const customerModel = require("../model/customerModel.js");

const { v4: uuidv4 } = require("uuid")
let id = uuidv4();

//console.log("uuid ==> ", id);



//===============================Validation for User==============================
const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};

//=========================== Create Customer ============================
const createCustomer = async function (req, res) {
    try {
        let data = req.body;

        let {
            firstName,
            lastName,
            mobileNumber,
            DOB,
            emailID,
            address,
            customerID,
            status,
        } = data;
          data.customerID = id



        // ================================== FistName And LastName =================================
        if (!firstName) {
            return res
                .status(400)
                .send({ status: false, message: "Please enter your fistName" });
        }
        if (!/^[a-z ,.'-]+$/i.test(firstName)) {
            return res
                .status(400)
                .send({ status: false, message: "fname should be in Alphabet" });
        }
        if (!lastName) {
            return res
                .status(400)
                .send({ status: false, message: "Please enter your lastName" });
        }
        if (!/^[a-z ,.'-]+$/i.test(lastName)) {
            return res
                .status(400)
                .send({ status: false, message: "lname should be in Alphabet" });
        }

        // ================================== Email  ===============================
        if (!emailID) {
            return res
                .status(400)
                .send({ status: false, message: "Please enter emailID" });
        }
        if (!isValid(emailID)) {
            return res
                .status(400)
                .send({ status: false, message: "emailID entered is of Invalid Type" });
        }
        if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(emailID.trim())) {
            return res
                .status(400)
                .send({ status: false, message: "emailID is invalid format" });
        }

        // Check unique EmailID
        const duplicateEmail = await customerModel.findOne({ emailID: emailID });
        if (duplicateEmail) {
            return res
                .status(400)
                .send({ status: false, message: ` EmailID ${duplicateEmail.emailID} Already  Exist` });
        }

        // ==================================  Phone Number ===============================
        if (!mobileNumber) {
            return res
                .status(400)
                .send({ status: false, message: "Please enter mobileNumber" });
        }
        if (!isValid(mobileNumber)) {
            return res.status(400).send({ status: false, message: "mobileNumber is Empty" });
        }
        if (!/^[789]\d{9}$/.test(mobileNumber.trim())) {
            return res
                .status(400)
                .send({
                    status: false,
                    message:
                        "mobile Number should be valid number. Should atrt with   7 or 8 or 9 and total of 10 digits",
                });
        }

        //   // check duplicate CustomerId
        //   const duplicateCustomerID = await customerModel.findOne({ customerID: customerID });
        //   if (duplicateCustomerID) {
        //       return res.status(400).send({ status: false, message: `customerID  ${duplicateCustomerID.customerID} Already Exist` })
        //   }

        // Create Customer Documents
        const customerData = await customerModel.create(data);
        res
            .status(201)
            .send({ status: true, message: "Create Successful", data: customerData });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ status: false, message: error.message });
    }
};



//================================== fetch customer data ========================

const getCustData = async function (req, res) {
    try {
        let data = req.query;

        let getCus = await customerModel.find({ status: "ACTIVE" });
        return res.status(200).send({ status: true, message: "success", data: getCus });


    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ status: false, message: error.message });
    }
};

//================================ delete customer data ============================

const deleteCustomer = async function (req, res) {
    try {
        let customerId = req.params.customerId;

        let deleteCustData = await customerModel.findByIdAndDelete({
            _id: customerId,
        });
        res
            .status(200)
            .send({
                status: true,
                message: "successfully deleted customer",
                data: deleteCustData,
            });

        // let deleteCustData = await customerModel.findByIdAndUpdate({ _id: customerId },{$set:{isDeleted:true}}, {new:true})
        // res.status(200).send({ status: true, message: "successfully deleted customer", data: deleteCustData })
    } catch (error) {
        console.log(error.message);
        return res.send({ status: false, message: error.message });
    }
};

module.exports = { createCustomer, getCustData, deleteCustomer };
