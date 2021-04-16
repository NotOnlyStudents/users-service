import { PostConfirmationConfirmSignUpTriggerEvent } from "aws-lambda";
import { CognitoIdentityServiceProvider } from "aws-sdk";

const postSignUpTrigger = async (
    event: PostConfirmationConfirmSignUpTriggerEvent
): Promise<unknown> => {
    const cognitoISP = new CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
    const userGroupParams = {
        GroupName: 'buyers',
        UserPoolId: event.userPoolId,
        Username: event.userName
    };

    return await cognitoISP
        .adminAddUserToGroup(userGroupParams)
        .promise();
}

export default postSignUpTrigger;
