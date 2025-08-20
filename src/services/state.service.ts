import StateRepository from '../repository/state.repository';

class StateService {
    private stateRepository : StateRepository;

    constructor(stateRepository : StateRepository){
        this.stateRepository = stateRepository;
    }

    async getStateService(state: string){   
        return this.stateRepository.getState(state);

    }
}

export default StateService ;