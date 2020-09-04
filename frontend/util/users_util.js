
export const getUsers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/users'
    })
)

export const createLineup = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
)