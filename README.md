# CLI Assignment for CS-E5220 - User Interface Construction

Student: Federico Macchi  
Topic: Announce the death or the birth of a person  


![alt text](https://github.com/FedeMITIC/cli-assignment/blob/master/images/Welcome%20screen-final.png "Welcome screen")
*Welcome screen.*

## How to use the CLI  
The CLI has two different modes that can be used:
- Guided mode
- Advanced mode

In the guided mode, the CLI will be interactive: it will ask the user a set of questions and give constant feedback.
In the advanced mode, only one command is necessary to complete the whole task.

## Instructions for installation and usage
To run the CLI, first install node.js from the [Node JS website](https://nodejs.org/en/).  
Download (or clone) this repository in your pc.  
Using the terminal, navigate inside the downloaded folder and run `npm i`  
Finally, run    

`node index.js` to start the CLI in the guided mode  

`node index.js help` to display the help screen  

`node index.js <parameters>` to use the CLI in the advanced mode  

The list of parameters is included in the help screen.  

For example:  

`node index.js d -a 72 -n "A" -r Father -y "B"`  

Will results in the announcement of the death of a person named *A*, that died today at 72 years old. The announcement was made by *B*, the father of *A*.

## Screenshots
![alt text](https://github.com/FedeMITIC/cli-assignment/blob/master/images/Welcome%20screen-final.png "Welcome screen")
*Welcome screen.*  

![alt text](https://github.com/FedeMITIC/cli-assignment/blob/master/images/Initial%20status-final.png "Initial status")
*Initial status of the CLI.*  

![alt text](https://github.com/FedeMITIC/cli-assignment/blob/master/images/Feedback%201-final.png "First feedback")
*First feedback.*  

![alt text](https://github.com/FedeMITIC/cli-assignment/blob/master/images/Feedback%202-final.png "Second feedback")
*Second feedback with more data.*  

![alt text](https://github.com/FedeMITIC/cli-assignment/blob/master/images/Final%20screen-final.png "Final screen")
*Final screen.*