const INITIAL_STATE = {
    description: 'Ler livro',
    list: [
        {
            _id: 1,
            description: 'Teste',
            done: true
        },
        {
            _id: 2,
            description: 'Teste 2',
            done: false
        },
        {
            _id: 3,
            description: 'Teste 3',
            done: true
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}