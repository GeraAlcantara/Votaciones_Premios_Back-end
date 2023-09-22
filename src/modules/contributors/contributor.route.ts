import express from 'express';
import { getAll } from '@app/modules/contributors/contributor.controller';

export const ContributorRouter = express.Router();

ContributorRouter.route('/contributors').get(getAll);
