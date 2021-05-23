class Renderer {
    constructor() {}

    renderPlayersInfo = function(players) {
        const source = $('#players-template').html();
        const template = Handlebars.compile(source);
        $(".playersInfo").empty()
        let newHTML = template({ players });
        $(".playersInfo").append(newHTML);
    }
}