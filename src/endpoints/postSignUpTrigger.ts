import {
  PostConfirmationConfirmSignUpTriggerEvent,
  PostConfirmationTriggerHandler,
  Callback,
  Context,
} from 'aws-lambda';
import postSignUpTrigger from '../lambdas/postSignUpTrigger';
import dispatchSnsTopic from '../lambdas/dispatchSnsTopic';

const handler: PostConfirmationTriggerHandler = async (
  event: PostConfirmationConfirmSignUpTriggerEvent,
  _context: Context,
  callback: Callback,
): Promise<void> => {
  try {
    const username = await postSignUpTrigger(event);
    const msg = await dispatchSnsTopic(username);

    callback(null, msg);
  } catch (error) {
    callback(error, event);
  }
};

export default handler;
