const express = require ('express');
const bodyParser = require('body-parser');
const messageController = require('./controllers/messageController')

require('./config/db')


const app =  express();


const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app
  .route("/messages")
  .get(messageController.getMessages)
  .post(messageController.createNewMessage);

app
  .route("/messages/:messageid")
  .get(messageController.getMessage)
  .put(messageController.updateMessage)
  .delete(messageController.deleteMessage);


app.listen(port, () => {
    console.log(`Server started running at http://localhost:${port}`);
});

module.exports = app;