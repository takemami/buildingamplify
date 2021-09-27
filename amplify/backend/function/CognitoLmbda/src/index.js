/* Amplify Params - DO NOT EDIT
	API_AMPLIFYAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYAPP_GRAPHQLAPIIDOUTPUT
	API_AMPLIFYAPP_GRAPHQLAPIKEYOUTPUT
	AUTH_AMPLIFYAPPC2A9EA47_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */



var AWS = require('aws-sdk');
AWS.config.update({
  region: "ap-northeast-1",
  maxRetries: 2,
  httpOptions: {
      timeout: 30000,
      connectTimeout: 2000
  }
});

exports.handler = (event, context, callback) => {
    var docClient = new AWS.DynamoDB.DocumentClient();
    var table = "UserData-hiccpmfmpzbvzldxtktvovmate-dev";
    var username = event.userName;

    var params = {
        TableName:table,
        Item:{
            "username": username,
            "order": 1,
        }
    };
    // console.log("Adding a new item...");
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
        }
    });
    console.log(event)
    callback(null, event);
};
 

 