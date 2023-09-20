# Votaciones_Premios_Back-end

Sistema de votaciones backend

## Como contribuir

Siempre tomar un issue y crear la branch con el número de issue para que sea más facil de identificar.

# Deploy

FL0 https://www.fl0.com/

## TECH stack

El proyecto se realizará con las siguientes tecnologías:

- Express
- nodejs
- Base de datos: MongoDB (huyd credenciales)
- ORM: Mongoose
- Autenticación Github App: (huyd credenciales)
- eslint

### Team Lead de Back-end

Ch14k1

## Deploy en local
Duplicar y renombrar el archivo `.env.example` a `.env`

Instalar dependencias:
```bash
$ npm i
```

Para generar tokens secret `ACCESS_TOKEN_SECRET` y `REFRESH_TOKEN_SECRET` puedes usar:
```bash
$ openssl rand -base64 32
```

### Tasks:

- [ ] Endpoint para refresh tokens
- [ ] Endpoint para OAuth
- [ ] Revocación de tokens con redis usando [upstash](https://upstash.com/)
- [ ] Definir lo futuros modulos
- [ ] Crear middleware para proteger rutas
- [ ] Agregar unit tests y tests de integración
