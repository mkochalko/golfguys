


export const getTournamentInfo = () => (
    $.ajax({
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/http://samsandberg.com/themasters/',
        headers: { 'Access-Control-Allow-Origin': '*' },
    })
)