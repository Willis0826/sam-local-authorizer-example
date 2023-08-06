// invoke locally, run
// sam build Authorizer && sam local invoke Authorizer -e src/authorizer/events/event.json
import { APIGatewayTokenAuthorizerHandler, APIGatewayAuthorizerResult, PolicyDocument, APIGatewayAuthorizerResultContext } from 'aws-lambda';

export const lambdaHandler: APIGatewayTokenAuthorizerHandler = async (event, context) => {
  return generateAdminPolicy();
};

const generateAdminPolicy = () => {
  const authResponse: APIGatewayAuthorizerResult = {
    principalId: `systemadmin`, // you can assign principalId if you want
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
          Resource: 'arn:aws:execute-api:*:*:*/*/GET/ping', // allow access GET/ping
        },
      ],
    },
  };
  return authResponse;
}
