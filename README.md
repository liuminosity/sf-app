# sf-app

#Getting started
1. Clone repo into your local machine
2. In the root folder, run `npm install` in terminal
3. To start server, run `nodemon server/server.js` from the root folder (may require "sudo")
4. To start client, run `gulp` to compile the files
5. Create a "salesforceAuth.js" file in the root folder, see details below
6. Go to "https://127.0.0.1" or "https://127.0.0.1:443"

#salesforceAuth.js
This file is necessary as it stores your salesforce key and secret. The format of the file is:
`
module.exports = {
  consumerKey : 'your key',
  consumerSecret: 'your secret',
  callbackURL: 'https://127.0.0.1'
};
`
