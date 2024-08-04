# Saga Orchestrator RabbitMQ Microservice Application

- Order Service handles order-related operations and events.
- Payment Service manages payment processing.
- Saga Orchestrator ensures data consistency by coordinating distributed transactions.

## Setup

### Prerequisites

- Node.js
- Docker [MongoDB, RabbitMQ]

### Installation

###### Clone the repository:

```
git clone https://github.com/senthur-kumaran/saga-orchestrator-micro
```

###### Run the MongoDB and RabbitMQ:

```
docker compose up -d
```

##### Order Service

1. Navigate to the service:

   ```
   cd order-service
   ```

2. Install dependencies:

   ```
   npm ci
   ```

3. Start the service:
   ```
   npm start
   ```

##### Payment Service

1. Navigate to the service:

   ```
   cd payment-service
   ```

2. Install dependencies:

   ```
   npm ci
   ```

3. Start the service:
   ```
   npm start
   ```

##### Saga orchestrator

1. Navigate to the service:

   ```
   cd saga-orchestrator
   ```

2. Install dependencies:

   ```
   npm ci
   ```

3. Start the service:
   ```
   npm start
   ```

### API Endpoints

- [POST] `/orders`: Endpoint to create a new order.
  _Request body:_

  ```
  {
      "product": "Orange",
      "quantity": 5
  }
  ```
