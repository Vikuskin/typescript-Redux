import { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { useActions } from '../hooks/useActions'

export const Users: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Загрузка...</h1>
    }
    if (error) {
        return <h1>Ошибка...</h1>
    }

    return (
        <>
            <h1>Users</h1>
            {users.map((user, i) => <div key={i}>{user.name}</div>)}
        </>
    )
}