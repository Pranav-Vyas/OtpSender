const express = require("express");
const Message = require("../models/messageSchema");
const client = require('twilio')('AC3df786961ee4aa651caaabf293590921', 'e4cd2d22af9473aaf6546e221a2a09eb');

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const messages = await Message.find().sort({ "createdAt": -1 });
        return res.status(200).json({ messages: messages });
    } catch (error) {
        console.log("in get catch");
        console.log(error);
        return res.status(400).json({ messages: [] });
    }
})

router.post("/send", async (req, res) => {
    console.log(req.body);
    try {
        const data = req.body;
        const newMessage = await client.messages
            .create({
                to: data.phone,
                from: process.env.FROM,
                body: data.message,
            })
        await Message.create(data);
        res.sendStatus(200);
    } catch (error) {
        console.log("in catch");
        console.log(error);
        res.sendStatus(500);
    }
})

module.exports = router;