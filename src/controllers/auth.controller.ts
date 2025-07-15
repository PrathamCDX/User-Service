import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { LoginUserDto, RegisterUserDto } from '../dtos/user.dto';
import UserRepository from '../repository/user.repository';
import UserProfileRepository from '../repository/userProfile.repository';
import UserService from '../services/user.service';
const userRepository = new UserRepository();
const userProfileRepository = new UserProfileRepository();

const userService = new UserService(userRepository, userProfileRepository);

async function registerHandler(req: Request, res: Response, next: NextFunction) {

    try {
        const requestBody: RegisterUserDto = req.body;
        const response = await userService.createService(requestBody);
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'User Creeated Successfully',
            data : response,
            error: {}
        });
    } catch (error) {
        next(error);
    }
}
async function loginHandler(req: Request, res: Response, next: NextFunction) {
    try{
        const requestBody: LoginUserDto = req.body ;
        const response = await userService.loginService(requestBody);
        res.status(StatusCodes.ACCEPTED).json({
            success : true ,
            message : 'Login successfull' ,
            data : response ,
            error : {}

        });
    }catch(error){
        next(error);
    }
}

export default {
    registerHandler,
    loginHandler
};