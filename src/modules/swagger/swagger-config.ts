
import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Discord Awards API',
      version: '1.0.0',
      description: 'API para el proyecto Discord Awards',
    },
    servers: [{
      url: 'http://localhost:3000',
    }],
  },
  apis: ['**/*.route.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
