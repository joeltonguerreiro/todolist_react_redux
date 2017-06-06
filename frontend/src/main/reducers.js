import { combineReducer } from 'redux'

const rootReducer = combineReducer({
    todo: () => ({
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
    })
})

export default rootReducer