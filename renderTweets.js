
function renderTweets(tweets) {
    var finalHTML = tweets.map(function(tweet) {
        return `
        <div class="d-flex flex-column border border-dark rounded p-3 m-5" style="width: 700px">
            <div class="d-flex">
                <img src="${tweet.user.profilePic}" class="img-circle" height="70" width="70" alt="">
                <div class="d-flex flex-column mt-3 ml-2 align-items-start">
                    <div class="d-flex">
                        <h4>${tweet.user.username}</h4>
                        <img src="verified.png" class="mt-2 ml-1"height="18" width="18" alt="">
                    </div>
                    <p>${tweet.user.handle}</p>
                </div>
            </div>
            <div style="width: 90%; margin: 0 auto;" class="mt-1">
                <h3 style="text-align: left;">${tweet.text}</h3>
            </div>
            <hr>
            <div class="d-flex">
                <div class="d-flex p-3">
                    <img src="comment.png" alt="" height="20" width="20">
                    <p class="ml-2">${tweet.replies}</p>
                </div>
                <div class="d-flex p-3">
                    <img src="retweet.png" alt="" height="20" width="20">
                    <p class="ml-2">${tweet.retweets}</p>
                </div>
                <div class="d-flex p-3">
                    <img src="like.png" alt="" height="20" width="20">
                    <p class="ml-2">${tweet.likes}</p>
                </div>
                <div class="d-flex p-3">
                    <img src="mail.png" alt="" height="20" width="20">
                </div>
            </div>
        </div>
        `
    });
    return finalHTML.join("");
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}