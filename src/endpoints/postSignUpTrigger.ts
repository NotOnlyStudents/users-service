import {
  PostConfirmationConfirmSignUpTriggerEvent,
  PostConfirmationTriggerHandler,
  Context,
  Callback
} from 'aws-lambda';
import postSignUpTrigger from '../lambdas/postSignUpTrigger';
import dispatchSnsTopic from '../lambdas/dispatchSnsTopic';

const handler: PostConfirmationTriggerHandler = async (
  event: PostConfirmationConfirmSignUpTriggerEvent,
  _context: Context,
  callback: Callback
) => {
  try {
    const username = await postSignUpTrigger(event);
    await dispatchSnsTopic(username);

    callback(null, event);
  } catch (error) {
    console.error(event, error);
    callback(error, event);
  }
};

export default handler;
