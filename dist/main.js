const renderPlayer = new Renderer()
$("#btn").on("click", function() {

    let input = $("#item-input").val()
    $.get(`teams/${input}`, function(players) {

        renderPlayer.renderPlayersInfo(players)

    })
})