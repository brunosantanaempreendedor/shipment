# Project Title

## Microservice for Melhor Envio API Integration

This microservice is designed to facilitate integration with the Melhor Envio API for shipping calculation. It is implemented using Node.js and Express.js, following best practices for project organization.

### Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
  - [.env File](#env-file)
- [Running the Application](#running-the-application)
- [API Routes](#api-routes)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running the microservice, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-microservice.git
   ```

2. Change to the project directory:

   ```bash
   cd your-microservice
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Project Structure

The project follows a modular structure to enhance maintainability and readability. Key directories include:

- `src/controllers`: Contains the route handlers.
- `src/services`: Implements business logic and interacts with external services.
- `src/routes`: Defines application routes.
- `config.js`: Centralized configuration file.
- `app.js`: Main application file.
- `.env`: Configuration file for environment variables.

## Configuration

### .env File

Create a `.env` file in the root of the project and add the following configuration:

```env
MELHOR_ENVIO_API_URL=https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate
MELHOR_ENVIO_API_TOKEN=your_api_token_here
```

Replace `your_api_token_here` with your Melhor Envio API token.

## Running the Application

Start the microservice with the following command:

```bash
npm start
```

The server will be running at `http://localhost:3000`.

## API Routes

- **POST /api/shipment/calculate-shipping**: Calculate shipping costs based on the provided payload.

  Example payload:

  ```json
  {
    "from": {
      "postal_code": "96020360"
    },
    "to": {
      "postal_code": "01018020"
    },
    "products": [
      {
        "id": "x",
        "width": 11,
        "height": 17,
        "length": 11,
        "weight": 0.3,
        "insurance_value": 10.1,
        "quantity": 1
      },
      {
        "id": "y",
        "width": 16,
        "height": 25,
        "length": 11,
        "weight": 0.3,
        "insurance_value": 55.05,
        "quantity": 2
      },
      {
        "id": "z",
        "width": 22,
        "height": 30,
        "length": 11,
        "weight": 1,
        "insurance_value": 30,
        "quantity": 1
      }
    ]
  }
  ```

## Dependencies

- [Express.js](https://expressjs.com/): Web application framework for Node.js.
- [Axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js.
- [Body-parser](https://www.npmjs.com/package/body-parser): Node.js body parsing middleware.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Follow the [Contribution Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.