
export const getPlayers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/players'
    })
)

