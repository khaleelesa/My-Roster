const express = require('express')
const router = express.Router()
const urllib = require('urllib')

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

const json = {
    data: {}
}

urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function(err, response_1) {
    json.data = JSON.parse(response_1)
})

router.get('/teams/:teamName', function(request, response) {
    let params = request.params.teamName
    let players = []

    players.push(json.data.league.standard.filter(i => i.teamId == teamToIDs[params] && i.isActive))
    response.send(players[0])
})
module.exports = router