import * as userActions from './user'
import * as postActions from './post'

export const allActions = {
    ...userActions,
    ...postActions
}