function renderStars() {
    function getRandomPosition() {
        const y = window.innerWidth
        const x = window.innerHeight
        const randomX = Math.floor(Math.random() * x)
        const randomY = Math.floor(Math.random() * y)
        return [randomX, randomY]
    }

    const numStars = 100

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div')
        star.className = 'star'
        const xy = getRandomPosition()
        star.style.top = xy[0] + 'px'
        star.style.left = xy[1] + 'px'
        document.body.append(star)
    }
}


toggleContent = () => {
    renderStars()

    const node = document.getElementById("start-button");
    node.className = 'active'

    if (node.parentNode) {
        setTimeout(() => {
            node.parentNode.removeChild(node)
            const content = document.querySelector('#template')
            const copy = document.importNode(content.content, true)
            document.body.append(copy)
        }, 1000)
    }
}

