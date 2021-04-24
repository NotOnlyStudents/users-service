import {
  PostConfirmationConfirmSignUpTriggerEvent,
  PostConfirmationTriggerHandler
} from 'aws-lambda';
import postSignUpTrigger from '../lambdas/postSignUpTrigger';
import dispatchSnsTopic from '../lambdas/dispatchSnsTopic';
import { ServiceOutputTypes } from '@aws-sdk/client-sns';

const handler: PostConfirmationTriggerHandler = async (
  event: PostConfirmationConfirmSignUpTriggerEvent
): Promise<ServiceOutputTypes> => {
  const username = await postSignUpTrigger(event);
  return dispatchSnsTopic(username);
};

export default handler;
