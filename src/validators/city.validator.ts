import { z } from 'zod';

export const GetCitySchema = z.object( {
    city : z.string(), 
});