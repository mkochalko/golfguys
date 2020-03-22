
export const getUsers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/users'
    })
)