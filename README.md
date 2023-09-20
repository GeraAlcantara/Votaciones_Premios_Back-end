# Votaciones_Premios_Back-end
Sistema de votaciones backend 

## Como contribuir
Siempre tomar un issue y crear la branch con el numero de issue para que sea mas facil de identificar.

# Deploy
 [FL0](https://www.fl0.com/)

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

### Requerimentos

#### Objetivo
![excalidraw example](https://media.discordapp.net/attachments/1087369567652806696/1153911288104230972/premiosDiscord.png?width=1025&height=394)
- Se va a crear una REST API en donde un usuario pueda registrarse a traves de OAUTH (github)
- Todo usuario registrado es posible candidato de todas las categorias definidas
- Los usuarios registrados seran capaz de votar a los posibles candidatos de cada categoria definida. 
- El usuario solamente podra crear un registro de voto para cada categoria.
- Los votos se podran realizar a traves de una fecha inicial.
- Al finalizar la votacion se registrara el ganador de la categoria.
- Confetti and Enjoy!.

#### Progreso
- [ ] Autenticacion Oauth con GitHub.
   - [ ] Configuracion de Passport.
- [ ] Creacion de modelos de mongoose.
   - [Diagrama de la base de datos](https://dbdiagram.io/d/650af9ae02bd1c4a5ef0d60a)
    _Se aceptan propuestas por cualquier cambio mientra sea justificado_
   - [ ] Creacion de users.
   - [ ] Creacion de categorias.
   - [ ] Creacion de votos.
- [ ] Creacion de routes.
   - [ ] Creacion de users.
   - [ ] Creacion de categorias.
   - [ ] Creacion de votos.
- [ ] Creacion de controladores.
   - [ ] Creacion de users.
   - [ ] Creacion de categorias.
   - [ ] Creacion de votos.
- [ ] Creacion de services.
   - [ ] Creacion de users.
   - [ ] Creacion de categorias.
   - [ ] Creacion de votos.
