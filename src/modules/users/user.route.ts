import express from 'express';
import { isAuthenticated } from '@app/modules/auth/middlewares';
import {
  getCurrentUser,
  getUserProfile,
} from '@app/modules/users/user.controller';

export const UserRouter = express.Router();

/**
 * @swagger
 * /users/me:
 *   get:
 *     description: Obtiene el usuario actual
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Información del usuario actual
 */
UserRouter.route('/me').get(isAuthenticated, getCurrentUser);

/**
 * @swagger
 * /users/{displayName}:
 *   get:
 *     description: Obtiene el perfil del usuario por su displayName
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: displayName
 *         required: true
 *         description: Nombre del usuario a buscar
 *     responses:
 *       200:
 *         description: Información del perfil del usuario
 */
UserRouter.route('/:displayName').get(getUserProfile);
