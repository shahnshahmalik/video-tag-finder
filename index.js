(() => {
    const div = document.createElement('div');
    div.id = 'videoTagSourceList';
    div.style.backgroundColor = '#00FF00';
    div.style.color = 'black';
    div.style.padding = '1em';
    div.style.fontSize = '12pt'
    div.style.zIndex = '2147483647';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.overflow = 'hidden';
    div.style.maxWidth = '100%'
    let big = true;
    const button = document.createElement('button');
    button.innerHTML = 'minimize/maximize';
    button.style.float = 'left';
    button.style.marginRight = '1em';
    button.addEventListener('click', (event) => {
        big = !big;
        div.style.maxHeight = big ? 'none' : '1em';
    });

    const appendText = (text) => {
        const appendDiv = document.createElement('div');
        appendDiv.innerHTML = text;
        div.append(appendDiv);
    }
    
    const appendLink = (href) => {
        const appendA = document.createElement('a');
        appendA.innerHTML = href;
        appendA.href = href;
        appendA.target = '_blank';
        appendA.style.whiteSpace = 'nowrap';
        appendA.style.overflow = 'hidden';
        appendA.style.display = 'block';
        div.append(appendA);
    }

    const render = () => {
        //Remove and re-add each render to make sure we are last and we are very top z-index wise
        div.remove();
        document.documentElement.append(div);

        const videoSrcs = [...document.getElementsByTagName('video')].map((ele) => ele.src);
        const iframeSrcs = [...document.getElementsByTagName('iframe')].map((ele) => ele.src);

        div.innerHTML = '';
        div.append(button);
        appendText(
            videoSrcs.length + ' videos found'
            + ' | ' + iframeSrcs.length + ' iframes found'
            + ' | Last updated at ' + Math.round(Date.now() / 1000)
        )
        appendText(videoSrcs.length + ' videos:');
        videoSrcs.forEach((src) => {appendLink(src)});
        appendText(iframeSrcs.length + ' iframes:')
        iframeSrcs.forEach((src) => {appendLink(src)});
    }

    render();
    setInterval(render, 1000);
})();
