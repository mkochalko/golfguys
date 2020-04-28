


export const getTournamentInfo = () => (
    $.ajax({
        method: 'GET',
        headers: { 'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true' },
        url: 'https://cors-anywhere.herokuapp.com/http://samsandberg.com/themasters/'
    })
)


// url: 'https://cors-anywhere.herokuapp.com/http://samsandberg.com/themasters/'
