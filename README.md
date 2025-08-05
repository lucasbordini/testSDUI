# Ready Remit BFF - Simple API

[![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)

## Main Technologies
- **NestJS**: Modular backend framework
- **TypeScript**: Static typing and better maintainability

## Prerequisites

### Node.js
Ensure you have Node.js installed (version 16 or higher recommended).

## Endpoints

### GET /
Returns a simple hello message:
```
Hello world from ReadyRemit SDUI
```

### GET /home
Returns JSON data from `src/data/home.json`:
```json
{
  "message": "Welcome to ReadyRemit Home",
  "status": "success",
  "data": {
    "features": ["transfers", "recipients", "history"],
    "version": "1.0.0",
    "timestamp": "2024-01-01T00:00:00Z"
  },
  "metadata": {
    "api_version": "v1",
    "environment": "development"
  }
}
```

## JSON Data Location
The JSON data for the `/home` endpoint is stored in:
```
src/data/home.json
```
You can modify this file to change the response data.

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
- `npm run start:prod` - Start in production mode

## Usage

1. Install dependencies: `npm install`
2. Start the application: `npm run start:dev`
3. Access the endpoints:
   - http://localhost:3000/ (Hello message)
   - http://localhost:3000/home (JSON data)

### Port Configuration
If port 3000 is already in use, you can change it by setting the `PORT` environment variable:
```bash
PORT=3001 npm run start:dev
```
