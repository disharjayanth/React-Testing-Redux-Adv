import commentReducers from 'reducers/comment'
import { SAVE_COMMENT } from 'actions/types'

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }

    const newState = commentReducers([], action)

    expect(newState).toEqual(['New Comment'])
})

it('handles action with unknown type', () => {
    const newState = commentReducers([],{ type: 'gfhhgf' })

    expect(newState).toEqual([])
})