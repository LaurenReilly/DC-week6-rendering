
function renderArtist(artist) {
    //will use multiple .map functions for each type of info
    var artistHTML = artist.map(function(artist) {
        return `
            <div class="container-fluid d-flex flex-column">
                <h1 class="align-self-start">${artist.artist.toUpperCase()}</h1>
                <hr class="albums">
                ${renderAlbum(artist.albums)}
            </div>`
    });
    return artistHTML.join("");
}

function renderAlbum(album) {
    var albumHTML = album.map(function(album){
        return `
            <div class="d-flex mt-4">
                <img src="${album.albumCover}" alt="" width="100" height="100">
                <h3 class="ml-2">${album.title}</h3>
            </div>
            ${renderSong(album.songs)}
        `
    });
    return albumHTML.join("");
}

function renderSong(song) {
    var songHTML = song.map(function(song){
        return `
            <div class="d-flex flex-column">
                <div class="d-flex justify-content-between border-dark border-top border-bottom py-3">
                    <div class="d-flex">
                        <img src="play.png" alt="">
                        <p class="ml-3">${song.title}</p>
                    </div>
                    <p>${song.length}</p>
                </div>
            </div>
        `
    });
    return songHTML.join("");
}

//album abstraction
function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderArtist(albumsAbstraction);

}