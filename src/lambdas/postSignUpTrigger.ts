import { PostConfirmationConfirmSignUpTriggerEvent } from 'aws-lambda';
import { CognitoIdentityServiceProvider } from 'aws-sdk';

const postSignUpTrigger = async (
  event: PostConfirmationConfirmSignUpTriggerEvent
): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    const cognitoISP = new CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
    const { userName, userPoolId } = event;

    const userGroupParams = {
      GroupName: 'buyers',
      UserPoolId: userPoolId,
      Username: userName,
    };

    try {
      await cognitoISP
        .adminAddUserToGroup(userGroupParams)
        .promise();

      // if all is good return the username else return the error from the cognitoISP.promise()
      resolve(userName);
    } catch (error) {
      reject(error);
    }    
  });
};

export default postSignUpTrigger;
