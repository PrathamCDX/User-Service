import { GetCityDto } from '../dtos/city.dto';
import CityRepository from '../repository/city.repository';

class CityService {
    private cityRepository : CityRepository ;

    constructor(cityRepository : CityRepository){
        this.cityRepository = cityRepository ;
    }

    async getCityService(data : GetCityDto ){

        return await this.cityRepository.getCity(data.city);
    }    
}

export default CityService;