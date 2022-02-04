import * as UserActions from './users'
import * as CounterActions from './counter'
import * as ThemeChangeActions from './themeChange'
import * as TodoActions from './todo'

export default {
    ...UserActions,
    ...CounterActions,
    ...ThemeChangeActions,
    ...TodoActions
}