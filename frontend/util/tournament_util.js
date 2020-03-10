


export const getTournamentInfo = () => (
    $.ajax({
        method: 'GET',
        url: 'http://samsandberg.com/themasters/',
        headers: { 'Access-Control-Allow-Origin': 'http://samsandberg.com/themasters/' },
    })
)