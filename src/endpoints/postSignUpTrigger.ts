import {
  PostConfirmationConfirmSignUpTriggerEvent,
  PostConfirmationTriggerHandler
} from 'aws-lambda';
import postSignUpTrigger from '../lambdas/postSignUpTrigger';
import dispatchSnsTopic from '../lambdas/dispatchSnsTopic';

const handler: PostConfirmationTriggerHandler = async (
  event: PostConfirmationConfirmSignUpTriggerEvent
) => {
  console.log(event);

  try {
    const username = await postSignUpTrigger(event);
    await dispatchSnsTopic(username);
  } catch (error) {
    console.error(error);
  }
};

export default handler;
