# messageManager
Source Code:This is an MVC app and contains the following folders and files:

-config folder: db.js : I am using Mongodb Atlas to store my data on cloud and mongoose for ORM.
		 This file includes all configs for connection to the mongodb atlas and setting up the ORM
		 
-controllers: messageController.js: this file includes REST Api		
	
-models: messageModel: includes the model(schema) of Message entity		
	
-test includes unit tests
-routes are set in app.js

Extra:
I dockerized and deployed the app to Google cloud and Kubernetes Engine using this document:
https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app
	
IP address http://104.197.141.37/
	
Development:
I used postman to debug application and included the collection as well.
(For debugging the API locally please replace the IP address with http://localhost:3000 for each request in the collection)
