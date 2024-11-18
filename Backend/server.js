const express = require("express");
const app = express();
const cors = require("cors")
require("dotenv").config()
const connectdb = require ('./config/db');
const PORT = process.env.PORT || 5052;
const Form = require('./Models/userSchema'); // Adjust path as needed




connectdb();
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json({success:true,message:"Welcome to the Express",status:200});
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


app.post('/submit', async (req, res) => {
    const { name,contact, email,cnic,startupName,startupCategory, noofteammembers, teamMembersNames,instituteName, departmentName,reason } = req.body;

    try {
        // Create a new document in the collection
        const newFormEntry = new Form({ name, contact, email, cnic, startupName, startupCategory, noofteammembers,teamMembersNames,instituteName,departmentName, reason});
        await newFormEntry.save();

        // Send success response
        res.status(201).json({ message: 'Form submitted successfully!' });
    } catch (err) {
        console.error('Error saving form data:', err);
        res.status(500).json({ error: 'Failed to submit form' });
    }
})
