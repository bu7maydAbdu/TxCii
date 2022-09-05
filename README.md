# TxCii
TxCii is a simple text to binary converter , you can put any sentence and it wil convert it immediately to machine language <br>
**Live Demo** : https://txcii.herokuapp.com/ 

<img src="https://i.ibb.co/6bpH65r/Screenshot-2022-09-05-011823.jpg" alt="Screenshot-2022-09-05-011823" border="0">

## How It's Made:

**Tech Used:**

- **Backend:** Node.js , Express.js , Mongoose and MongoDB for data storage
- **Frontend:** used templating language (EJS) and CSS for stying 

the journey starts with the front end sending a post request through a form to "/converttobinary" path.
In the backend we get that request and route it to it's suitable controller and run the functin that goes and find the desired binary data in the database 
process it and pass it into a converterPage.ejs template and render it with the binary data displayed on it
