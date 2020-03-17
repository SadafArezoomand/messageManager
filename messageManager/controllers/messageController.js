//messageController

//require model
const Message = require('../models/messageModel');

//returns the list of all messages in db
exports.getMessages = (req, res) => {
    try {
        Message.find(
            {},
            (err, msg) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.status(200).json(msg);

            });
    } catch (ex) {
        res.status(400).send(ex);
    }
}

//returns message by id
exports.getMessage = (req, res) => {
    try {
        Message.findById(
            { _id: req.params.messageid },
            (err, msg) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.status(200).json(msg);

            });
    } catch (ex) {
        res.status(400).send(ex);
    }
}

//deletes a message by id
exports.deleteMessage = (req, res) => {
    try {
        Message.remove(
            { _id: req.params.messageid },
            (err, msg) => {
                if (err) {
                    res.status(404).send(err);
                }
                res.status(200).json({ message: "Message was deleted successfully" });
            });
    } catch (ex) {
        res.status(400).send(ex);
    }
}

//updates a message
//since messagePalindrome is dependent on messageContent, it cannot be updated directly
//Also date is an immutable property
exports.updateMessage = (req, res) => {
    try {
        if (req.body.messagePalindrome !== undefined) {
            res.status(400).send({ message: "This property cannot be updated directly" });
        }
        else {
            let newMsg = { ...req.body };
            if (req.body.messageContent) {
                let msgContent = req.body.messageContent.toLowerCase();
                newMsg.messagePalindrome = (msgContent === msgContent.split("").reverse().join(""));
            }
            Message.findOneAndUpdate(
                { _id: req.params.messageid },
                newMsg,
                { new: true, useFindAndModify: false },
                (err, msg) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.status(200).json(msg);
                }
            );
        }
    } catch (ex) {
        res.status(400).send(ex);
    }
}

//creates a new message
exports.createNewMessage = (req, res) => {
    try {
        let newMsgObj = { ...req.body };
        if (req.body.messageContent !== undefined) {
            let msgContent = req.body.messageContent.toLowerCase();
            newMsgObj.messagePalindrome = (msgContent === msgContent.split("").reverse().join(""));
        }
        let newMsg = new Message(newMsgObj);
        newMsg.save((err, msg) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(201).json(msg);
        });
    } catch (ex) {
        res.status(400).send(ex);
    }
};

