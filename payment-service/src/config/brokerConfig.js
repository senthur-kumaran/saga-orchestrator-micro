const brokerConfig = {
    vhosts: {
        '/': {
            connection: {
                hostname: 'localhost',
                port: 5672,
            },
            exchanges: ['paymentExchange'],
            queues: ['paymentProcessQueue', 'paymentSuccessQueue', 'paymentFailureQueue'],
            bindings: [
                'paymentExchange[payment.succeed] -> paymentSuccessQueue',
                'paymentExchange[payment.failed] -> paymentFailureQueue',
            ],
            publications: {
                "paymentSuccess": {
                    "exchange": "paymentExchange",
                    "routingKey": "payment.succeed"
                },
                "paymentFailure": {
                    "exchange": "paymentExchange",
                    "routingKey": "payment.failed"
                },
            },
            subscriptions: {
                "paymentProcess": {
                    "queue": "paymentProcessQueue"
                },
            },
        },
    },
};

export default brokerConfig;