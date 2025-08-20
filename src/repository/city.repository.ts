import { CreationAttributes, Op, Transaction } from 'sequelize';

import City from '../db/models/city.model';
import State from '../db/models/state.model';
import BaseRepository from './base.repository';

class CityRepository extends BaseRepository<City> {
    constructor() {
        super(City);
    }

    async findByName(name: string) {
        return await this.model.findOne({ where: { name } });
    }

    async create(data: CreationAttributes<City>, transaction?: Transaction) {
        const record = await this.model.create(data, { transaction });
        return record;
    }

    async getCity(city: string) {
        const record = await this.model.findAll({
            where: {
                name: {
                    [Op.like]: city + '%',
                },
            },
        });

        return record;
    }

    async getLocation(cityId: number) {
        const record = await this.model.findOne({
            attributes: ['name'],
            include: [
                {
                    association: City.associations.state,
                    attributes: ['name'],
                    include: [
                        {
                            association: State.associations.country,
                            attributes: ['name'],
                        },
                    ],
                },
            ],
            where: { id: cityId },
        });
        return record;
    }
}

export default CityRepository;
