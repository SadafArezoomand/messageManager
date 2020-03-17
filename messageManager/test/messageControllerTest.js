process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const Message = require('../models/messageModel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();


chai.use(chaiHttp);

/*
  * Test the /GET messages
  */
describe('/GET messages', () => {
    it('GET all the messages', (done) => {
        chai.request(app)
            .get('/messages')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});




/*
  * Test the /POST route
  */
describe('/POST message', () => {
    it('It should not POST a message without an author', (done) => {
        let msg = {
            messageContent: "refer"
        }
        chai.request(app)
            .post('/messages')
            .send(msg)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('Object');
                res.body.should.have.property('errors');
                res.body.errors.messageAuthor.should.have.property('kind').eql('required');
                done();
            });
    });

});

/*
  * Test the /POST route
  */
describe('/POST message', () => {
    it('It should not POST a message without a content', (done) => {
        let msg = {
            messageAuthor: "Author"
        }
        chai.request(app)
            .post('/messages')
            .send(msg)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('Object');
                res.body.errors.messageContent.should.have.property('kind').eql('required');
                done();
            });
    });

});

/*
  * Test the /POST route
  */
describe('/POST message', () => {
    it('It should not POST a message without a content', (done) => {
        let msg = {
            messageAuthor: "Author"
        }
        chai.request(app)
            .post('/messages')
            .send(msg)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('Object');
                res.body.errors.messageContent.should.have.property('kind').eql('required');
                done();
            });
    });

});


/*
  * Test the /PUT route
  */
describe('/PUT message', () => {
    it('It should not PUT a message to change messagePalindrome', (done) => {
        let msg = {
            messagePalindrome: true
        }
        chai.request(app)
            .put('/messages/1')
            .send(msg)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('Object');
                res.body.should.have.property('message');

                done();
            });
    });

});


/*
  * Test the /DEL route
  */
 describe('/DELETE message', () => {
    it('It should DELETE an id (not existing)', (done) => {        
        chai.request(app)
            .delete('/messages/5e6e514022e9992488a190ce')            
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Object');
                res.body.should.have.property('message');

                done();
            });
    });

});