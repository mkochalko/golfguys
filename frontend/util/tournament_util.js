


export const getTournamentInfo = () => (
    $.ajax({
        method: 'GET',
        url: 'http://samsandberg.com/themasters/'
    })
)