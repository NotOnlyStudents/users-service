import { SNSClient, PublishCommand, ServiceOutputTypes } from '@aws-sdk/client-sns';

const dispatchSnsTopic = async (username: string): Promise<ServiceOutputTypes> => {
  const sns = new SNSClient({ region: process.env.REGION });

  return sns.send(new PublishCommand({
    TopicArn: process.env.NEW_USER_TOPIC,
    Message: JSON.stringify({ username }),
    MessageStructure: 'json',
  }));
};

export default dispatchSnsTopic;
