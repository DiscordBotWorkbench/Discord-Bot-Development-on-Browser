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

  client.on("message", message => {//This will start when a the bot recieve an Message!
    if(message.content === "!ping"){//This will start if the message is !ping
      return message.channel.send(`:ping_pong: Your Ping is ${client.ws.ping}`)//This will return the message its written inside the `` these do the same as "" but you can easylier add variables... This in an variable
    }
  })

client.login("NzM5NTE5Njk4NDcwOTYxMjc4.XybpYw.MIGE8MRLcmcWjRGoVeL9bJ7ln4c")//This login the Token! I will show you how to become an Token! first go to https://discord.com/developers/applications! I will put the link in desciption! Please follow me!


//So, yet we have an Token! But please be careful with your token! When anybody had your token! He can change the code! I will reset my token after recording!





// Lets click on Tools and Logs to check if he is ready

//Perfect ! Yet we can invite the bot to server! Follow me to https://discord.com/developers/applications again! So your Bot is in your Server! Lets test!

