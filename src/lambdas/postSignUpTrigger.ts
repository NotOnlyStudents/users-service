import { PostConfirmationConfirmSignUpTriggerEvent } from "aws-lambda";
import { CognitoIdentityServiceProvider } from "aws-sdk";

const lambda = async (event: PostConfirmationConfirmSignUpTriggerEvent): Promise<any> => {

    const cognitoISP = new CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' })
    const userGroupParams = {
        GroupName: 'buyers',
        UserPoolId: event.userPoolId,
        Username: event.userName
    }
    return cognitoISP
        .adminAddUserToGroup(userGroupParams)
        .promise()
}

export default lambda;
