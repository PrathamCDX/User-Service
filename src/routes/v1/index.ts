import express from 'express';

import authRouter from './auth.route';
import cityRouter from './city.route';
import countryRouter from './country.route';
import locationRouter from './location.route';
import pingRouter from './ping.route';
import roleRouter from './role.route';
import skillRouter from './skill.route';
import stateRouter from './state.route';
import userRouter from './user.route';
import userSkillRouter from './userSkill.route';

const v1Router = express.Router();

v1Router.use('/ping', pingRouter);

v1Router.use('/auth', authRouter);

v1Router.use('/users', userRouter);

v1Router.use('/user-skills', userSkillRouter);

v1Router.use('/skills', skillRouter);

v1Router.use('/role', roleRouter);

v1Router.use('/locations', locationRouter);

v1Router.use('/city', cityRouter);

v1Router.use('/state', stateRouter);

v1Router.use('/country', countryRouter);

export default v1Router;