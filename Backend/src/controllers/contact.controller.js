const Contact = require("../models/contact.model");

const createContact = async (req,res) => {
    try{
        const{
            name,
            email,
            mobile,
            subject,
            message
        } = req.body;

        const contact = await Contact.create({
            name,
            email,
            mobile,
            subject,
            message
        });

        res.status(201).json({
            success:true,
            message:"Contact created successfully",
            data:contact
        });
    }catch(error){
        console.error("Contact creation error:",error.message);

        res.status(500).json({
            success:false,
            message:"Something went wrong while creating contact",
        });
    }
};

module.exports = {
    createContact
}