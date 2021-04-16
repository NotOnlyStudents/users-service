import {
    PostConfirmationConfirmSignUpTriggerEvent,
    PostConfirmationTriggerHandler,
    Callback,
    Context
} from 'aws-lambda';
import postSignUpTrigger from "../lambdas/postSignUpTrigger";

const handler: PostConfirmationTriggerHandler = async (
    event: PostConfirmationConfirmSignUpTriggerEvent,
    _context: Context,
    callback: Callback
): Promise<void> => {
    try {
        const result = postSignUpTrigger(event);
        callback(null, result);
    } catch (error) {
        callback(error, event);
    }
}

export default handler;
