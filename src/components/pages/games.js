const gameData = [
    {
        name: "Lumosity",
        href: "www.lumosity.com"
    }, 
    {
        name: "AARP",
        href: "https://stayingsharp.aarp.org/about/brain-health/games/"
    },
    {
        name: "Games for the Brain",
        href: "http://www.gamesforthebrain.com/"
    },
    {
        name: "Happy Neuron",
        href: "http://www.happy-neuron.com/"
    },
    {
        name: "My Brain Trainer",
        href: "http://www.mybraintrainer.com/"
    }
]

const GameItem = ({ name, href }) => {
    return (
        <a href={ href } target="_blank" rel="noreferrer" className="game-item flex justify-between">
            <span>{ name }</span>
            <i className="fas fa-external-link-alt"></i>
        </a>
    )
}

const Games = () => {
    return (
        <div className="game-wrapper flex direction-column">
            {
                gameData.map(v => <GameItem { ...v }/>)
            }
        </div>
    )
}

export default Games;