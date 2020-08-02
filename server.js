//Clear everything in this file! I am uploading the code aswell on Github! Delete aswell the other things like .env, public, views
//Yet we add the package that we need!
//Lets start coding!

const Discord = require('discord.js');//We say that we need this module!
const client = new Discord.Client();//We creating a new Client!

client.once('ready', () => {//We are testing if the client is ready, when he is ready the code inside the {} is starting!
          console.log("I'm ready...")//With this Command we can see in Console if he is ready! You can customize the text inside the ""
          client.user.setActivity("I'm in development!")//This is the status of the Bot! You can customize the status inside the "", maybe i will show you later another method!
          });

//Let us start with an easy Command

  client.on("message", message => {
    if()
  })

