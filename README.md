# Ready Remit BFF - Server-Driven UI

[![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)

## Server-Driven UI Architecture
Backend system for dynamic mobile interface management through server-side configurations. Enables:
- Real-time layout updates
- Centralized UI flow management
- Dynamic customization for different devices/users

## Main Technologies
- **NestJS**: Modular backend framework
- **Redis**: UI configuration and frequent data caching
- **TypeScript**: Static typing and better maintainability
- **Axios**: External service communication

## Environment Variables
Create `.env`:
```
SERVER_BASE_URL=http://localhost:3000
REDIS_UTL=redis://localhost:6379
```

## Instalation
```bash
npm install
npm run build
```

## Exectuin
```bash
# Dev
npm run start:dev

# Prod
npm run build
npm run start:prod
```
