const brokerConfig = {
    vhosts: {
        '/': {
            connection: {
                hostname: 'localhost',
                port: 5672,
            },
            exchanges: ['orderExchange', 'paymentExchange'],
            queues: [
                'orderCreateQueue',
                'orderDeleteQueue',
                'orderUpdateQueue',
                'paymentProcessQueue',
                'paymentSuccessQueue',
                'paymentFailureQueue',
            ],
            bindings: [
                'paymentExchange[payment.process] -> paymentProcessQueue',
                'orderExchange[order.compensate] -> orderDeleteQueue',
                'orderExchange[order.status.update] -> orderUpdateQueue',
            ],
            publications: {
                paymentProcess: {
                    exchange: 'paymentExchange',
                    routingKey: 'payment.process',
                },
                orderCompensate: {
                    exchange: 'orderExchange',
                    routingKey: 'order.compensate',
                },
                orderStatusUpdate: {
                    exchange: 'orderExchange',
                    routingKey: 'order.status.update',
                },
            },
            subscriptions: {
                orderCreated: {
                    queue: 'orderCreateQueue',
                },
                paymentSuccess: {
                    queue: 'paymentSuccessQueue',
                },
                paymentFailure: {
                    queue: 'paymentFailureQueue',
                },
            },
        },
    },
};

export default brokerConfig;
