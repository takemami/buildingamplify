/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiGraphqlapiGraphQLAPIIdOutput = process.env.API_BOYAKIGQL_GRAPHQLAPIIDOUTPUT
var apiGraphqlapiGraphQLAPIEndpointOutput = process.env.API_BOYAKIGQL_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');
global.fetch = require('node-fetch');

let graphqlClient;

exports.handler = async (event, context, callback) => {
    let env;
    let graphql_auth;

    if ('AWS_EXECUTION_ENV' in process.env && process.env.AWS_EXECUTION_ENV.startsWith('AWS_Lambda_')) {
        //for cloud env
        env = process.env;
        graphql_auth = {
            type: "AWS_IAM",
            credentials: {
                accessKeyId: env.AWS_ACCESS_KEY_ID,
                secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
                sessionToken: env.AWS_SESSION_TOKEN,
            }
        };
    } else {
        // for local mock
        env = {
            API_AMPLIFYAPP_GRAPHQLAPIENDPOINTOUTPUT: 'http://localhost:20002/graphql',
            REGION: 'ap-northeast-1',
        }
        graphql_auth = {
            type: "AWS_IAM",
            credentials: {
                accessKeyId: 'mock',
                secretAccessKey: 'mock',
                sessionToken: 'mock',
            }
        };
    }

    if (!graphqlClient) {
        graphqlClient = new AWSAppSyncClient({
            url: env.API_AMPLIFYAPP_GRAPHQLAPIENDPOINTOUTPUT,
            region: env.REGION,
            auth: graphql_auth,
            disableOffline: false, 
        });
    }
    

    //容量の計算
    var liqdegee = event.arguments.liqdegree;
    var cockdegree = event.arguments.cockdegree;
    var cupcapa = event.arguments.cupcapa;
    var liqmxa  = cupcapa * cockdegree / liqdegee;
    var mixmla = cupcapa - liqmx;
    var liqmx  = parseInt(liqmxa, 10);
    var mixml = parseInt(mixmla, 10);
    // console.log(liqmx);


    const DegreeHistoryDataInput = {
        mutation: gql(createDegreeHistoryData),
        variables: {
            input: {
                unixtime: event.arguments.unixtime,
                cockdegree: cockdegree,
                liqml: liqmx,
                mixml: mixml,
            },
        },
    };
    // const UserHistoryDataUpdate = {
    //     mutation: gql(createUserHistoryData),
    //     variables: {
    //         input: {
    //             username: event.arguments.username,
    //             unixtime: event.arguments.unixtime,
    //             liqml: liqmx,
    //             mixml: mixml,
    //         },
    //     },
    // }
    //await API.graphql(graphqlOperation(gqlQueries.listCupData)
    //const res = await graphqlClient.mutate(DegreeHistoryDataInput);
    // const post = res.data.createDegreeHistoryData;
    const post = DegreeHistoryDataInput.variables.input;
    // const post2 = UserHistoryDataUpdate.variables.input;
    return post;
};

const createDegreeHistoryData = /* GraphQL */ `
  mutation CreateDegreeHistoryData(
    $input: CreateDegreeHistoryDataInput!
    $condition: ModelDegreeHistoryDataConditionInput
  ) {
    createDegreeHistoryData(input: $input, condition: $condition) {
      unixtime
      cockdegree
      liqml
      mixml
      createdAt
      updatedAt
    }
  }
`;
// const createUserHistoryData = /* GraphQL */ `
//   mutation CreateUserHistoryData(
//     $input: CreateUserHistoryDataInput!
//     $condition: ModelUserHistoryDataConditionInput
//   ) {
//     createUserHistoryData(input: $input, condition: $condition) {
//       username
//       unixtime
//       cocktailname
//       cocktaildegree
//       cupcapacity
//       liqml
//       mixml
//       createdAt
//       updatedAt
//     }
//   }
// `;




// /* Amplify Params - DO NOT EDIT
// You can access the following resource attributes as environment variables from your Lambda function
// var environment = process.env.ENV
// var region = process.env.REGION
// var apiGraphqlapiGraphQLAPIIdOutput = process.env.API_BOYAKIGQL_GRAPHQLAPIIDOUTPUT
// var apiGraphqlapiGraphQLAPIEndpointOutput = process.env.API_BOYAKIGQL_GRAPHQLAPIENDPOINTOUTPUT

// Amplify Params - DO NOT EDIT */

// const AWSAppSyncClient = require('aws-appsync').default;
// const gql = require('graphql-tag');
// global.fetch = require('node-fetch');
// const aws_exports = require('./../../../../../src/aws-exports').default;
// const AUTH_TYPE = require('./node_modules/aws-appsync-auth-link/lib/auth-link').AUTH_TYPE;

// let graphqlClient;

// exports.handler = async (event, context, callback) => {
//     console.log(event)
//     let env;
//     let graphql_auth;
//     const url = aws_exports.aws_appsync_graphqlEndpoint;
//     const region = aws_exports.aws_appsync_region;
//     const type = AUTH_TYPE.AWS_IAM;

//     //If you want to use AWS...
//     const AWS = require('aws-sdk');
//     AWS.config.update({
//         region: aws_exports.aws_appsync_region,
//         credentials: new AWS.Credentials({
//             accessKeyId: aws_exports.aws_appsync_apiKey,
//         })
//     });
//     const credentials = AWS.config.credentials;


//     //容量の計算
//     var liqdegee = event.liqdegree;
//     var cockdegree = event.cockdegree;
//     var cupcapa = event.cupcapa;
//     var liqmx  = cupcapa * cockdegree / liqdegee;
//     var mixml = cupcapa - liqmx;

//     // if ('AWS_EXECUTION_ENV' in process.env && process.env.AWS_EXECUTION_ENV.startsWith('AWS_Lambda_')) {
//     //     //for cloud env
//     //     env = process.env;
//     //     graphql_auth = {
//     //         type: "AWS_IAM",
//     //         credentials: {
//     //             accessKeyId: env.AWS_ACCESS_KEY_ID,
//     //             secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
//     //             sessionToken: env.AWS_SESSION_TOKEN,
//     //         }
//     //     };
//     // } else {
//     //     // for local mock
//     //     env = {
//     //         API_BOYAKIGQL_GRAPHQLAPIENDPOINTOUTPUT: 'http://192.168.0.100:20002/graphql',
//     //         REGION: 'ap-northeast-1',
//     //     }
//     //     graphql_auth = {
//     //         type: "AWS_IAM",
//     //         credentials: {
//     //             accessKeyId: 'mock',
//     //             secretAccessKey: 'mock',
//     //             sessionToken: 'mock',
//     //         }
//     //     };
//     // }
    

//     const graphqlClient = new AWSAppSyncClient({
//         url: url,
//         region: region,
//         auth: {
//             type: type,
//             credentials: credentials,
//         }
//     });

//     //post to the origin
//     const DegreeHistoryDataInput = {
//         mutation: gql(createDegreeHistoryData),
//         variables: {
//             input: {
//                 unixtime: Math.floor(Date.now() / 1000),
//                 cockdegree: cockdegree,
//                 liqml: liqmx,
//                 mixml: mixml,
//                 timestamp: Math.floor(Date.now() / 1000),
//             },
//         },
//     };
//     //await API.graphql(graphqlOperation(gqlQueries.listCupData)
//     const res = await graphqlClient.mutation(DegreeHistoryDataInput);
//     console.log(res);
//     const post = res.data.createDegreeHistoryData;

//     return post;
// };


// const createDegreeHistoryData = /* GraphQL */ `
//   mutation CreateDegreeHistoryData(
//     $input: CreateDegreeHistoryDataInput!
//     $condition: ModelDegreeHistoryDataConditionInput
//   ) {
//     createDegreeHistoryData(input: $input, condition: $condition) {
//       unixtime
//       cockdegree
//       liqml
//       mixml
//       createdAt
//       updatedAt
//     }
//   }
// `;


