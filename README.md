# Ready Remit BFF - Server-Driven UI

[![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)

## Main Technologies
- **NestJS**: Modular backend framework
- **Redis**: UI configuration and frequent data caching
- **TypeScript**: Static typing and better maintainability
- **Axios**: External service communication

## Prerequisites

### Redis Installation (macOS)
Install Redis using Homebrew:
```bash
brew install redis
```

Start Redis service:
```bash
redis-server
```

Verify Redis is running:
```bash
redis-cli ping
# Should return: PONG
```

### Node.js
Ensure you have Node.js installed (version 16 or higher recommended).

## Environment Variables
Create a `.env` file in the root directory:
```bash
touch .env
```

Add the following variables:
```env
# Server base URL - used when the server needs to reference itself
# (e.g., when passing endpoints or URLs to fetch other layouts)
SERVER_BASE_URL=http://localhost:3000

# Redis connection URL
REDIS_URL=redis://localhost:6379
```

## Installation
```bash
# Install project dependencies
npm install

# Build the project
npm run build
```

## Running the Application

### Development Mode
```bash
# Start in development mode with hot reload
npm run start:dev
```

### Production Mode
```bash
# Build and start in production mode
npm run build
npm run start:prod
```

### Debug Mode
```bash
# Start in debug mode
npm run start:debug
```

## Available Scripts
- `npm run build` - Build the application
- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with watch
- `npm run start:debug` - Start in debug mode
- `npm run start:prod` - Start in production mode
- `npm run lint` - Run ESLint
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests

## Troubleshooting

### Redis Connection Issues
If you see `ECONNREFUSED 127.0.0.1:6379` errors:
1. Make sure Redis is installed and running
2. Check if Redis is listening on the correct port: `redis-cli ping`
3. Verify your `REDIS_URL` environment variable is correct

### Port Already in Use
If port 3000 is already in use, you can change it by setting the `PORT` environment variable:
```bash
PORT=3001 npm run start:dev
```
