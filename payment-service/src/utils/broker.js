import rascal from 'rascal';

import brokerConfig from '../config/brokerConfig.js';

const { createBrokerAsPromised } = rascal;

let brokerInstance;

const createBroker = async () => {
    if (brokerInstance) return brokerInstance;
    try {
        brokerInstance = await createBrokerAsPromised(brokerConfig);
        brokerInstance.on('Broker error:', console.error);
        console.log('RabbitMQ is connected successfully!');
        return brokerInstance;
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export default createBroker;