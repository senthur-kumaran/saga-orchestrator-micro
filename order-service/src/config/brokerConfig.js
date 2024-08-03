const brokerConfig = {
    vhosts: {
        '/': {
            connection: {
                hostname: 'localhost',
                port: 5672,
            },
            exchanges: ['orderExchange'],
            queues: ['orderCreateQueue',  'orderDeleteQueue', 'orderUpdateQueue'],
            bindings: [
                'orderExchange[order.created] -> orderCreateQueue',
            ],
            publications: {
                "orderCreated": {
                    "exchange": "orderExchange",
                    "routingKey": "order.created"
                },
            },
            subscriptions: {
                "orderCompensate": {
                    "queue": "orderDeleteQueue"
                },
                "orderStatusUpdate": {
                    "queue": "orderUpdateQueue"
                },
            },
        },
    },
};

export default brokerConfig;
