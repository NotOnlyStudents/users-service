import { SNSClient, PublishCommand, ServiceOutputTypes } from '@aws-sdk/client-sns';
import { v4 as uuid } from 'uuid';

const dispatchSnsTopic = async (username: string): Promise<ServiceOutputTypes> => {
  const sns = new SNSClient({ region: process.env.REGION });

  return sns.send(new PublishCommand({
    TopicArn: process.env.NEW_USER_TOPIC,
    Message: JSON.stringify({ username }),
    MessageGroupId: 'new-user',
    MessageDeduplicationId: uuid(),
  }));
};

export default dispatchSnsTopic;
