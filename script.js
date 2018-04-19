function search(){
    apiCall(document.getElementById("dropDown").value);
}


function apiCall(artist){
    $.ajax({
        url: "https://itunes.apple.com/search?term=" + artist,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(result) {
            console.log(result);
            newFunction(result);
        },
        error: function() { alert('Failed!'); }
    });

}
function newFunction(result){
    $("#things").empty();
    var songs = result.results;
    var html = "<table border = '5'>";
    for(var i = 0; i < songs.length; i++){
            html += "<tr>";
            html += "<td>" + "Artist:" + "</td>";
            html += "<td>" + songs[i].artistName + "</td>";
            html += "<td>" + "Album Name:" + "</td>";
            html += "<td>" + songs[i].collectionName + "</td>";
            html += "<td>"+ "Song Name:" + "</td>";
            html += "<td>" + songs[i].trackName + "</td>";
            html += "<td>" + "Play Song:" + "<td>";
            html += "<td><audio controls='true' src=" + songs[i].previewUrl + " id= audio type='audio/m4a'></audio> + <td>";
            html += "<td> + <img src='" + songs[i].artworkUrl100 + "'<td>";
                html += "<td>";
    }
    $("#things").append(html);
}
