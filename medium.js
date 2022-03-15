window.onload = async function getMediumFeed() {
    try {
        const mediumRssFeed = "https://medium.com/feed/@birensharma";
        const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
        const data = { params: { rss_url: mediumRssFeed } };
        const promise = await axios.get(rssToJsonApi, data)
        const state = promise.data
       console.log(state)
    //    for(var i=0; i<3; i++){
            document.getElementById("medium").innerHTML += `
            <div class="mediumWrapper">
                <div class="cardWrapper">
                    <div class="imageWrapper">
                        <img src= ${state.items[0].thumbnail} className="image" ></img>
                    </div>
                    <div class="titleWrapper">
                        ${state.items[0].title} <br />
                        <span class="publisher">Published by ${state.items[0].author}</span>
                        <div class="redirectButtonWrapper">
                            <a href=${state.items[0].guid} target="_blank" class="redirectLink">
                                <button class="redirectButton">
                                    Read full article
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="cardWrapper">
                    <div class="imageWrapper">
                        <img src= ${state.items[1].thumbnail} className="image" ></img>
                    </div>
                    <div class="titleWrapper">
                        ${state.items[1].title} <br />
                        <span class="publisher">Published by ${state.items[1].author}</span>
                        <div class="redirectButtonWrapper">
                        <a href=${state.items[1].guid} target="_blank" class="redirectLink">
                            <button class="redirectButton">
                                Read full article
                            </button>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="cardWrapper">
                    <div class="imageWrapper">
                        <img src= ${state.items[2].thumbnail} className="image" ></img>
                    </div>
                    <div class="titleWrapper">
                        ${state.items[2].title} <br />
                        <span class="publisher">Published by ${state.items[2].author}</span>
                        <div class="redirectButtonWrapper">
                        <a href=${state.items[2].guid} target="_blank" class="redirectLink">
                            <button class="redirectButton">
                                Read full article
                            </button>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            `
    //    }
    } catch (error) {
        console.error(error);
    }
}



// getMediumFeed().then(data => {
//     res.json({message:"Request received", data})
// })
// .catch(err => console.log(err))

// ${state.items[i].title}