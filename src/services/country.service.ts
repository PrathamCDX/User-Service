import CountryRepository from '../repository/country.repository';

class CountryService {
    private countryRepository: CountryRepository;

    constructor(countryRepository: CountryRepository){
        this.countryRepository= countryRepository;
    }

    async getCountryService(country : string){
        return this.countryRepository.getCountry(country);
    }
}

export default CountryService;