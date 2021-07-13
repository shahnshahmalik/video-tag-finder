(() => {
    const div = document.createElement('div');
    // div.id = 'videoTagSourceList';
    div.style.backgroundColor = '#f3f4f9a2';
    div.style.boxShadow = '0 0 3px rgb(108 124 139 / 50%)';
    div.style.color = '#000';
    div.style.padding = '1rem';
    div.style.fontSize = '15px'
    div.style.zIndex = '2147483647';
    div.style.position = 'fixed';
    div.style.top = '0';
    div.style.right = '0';
    div.style.overflow = 'hidden';
    div.style.minWidth = '300px';
    div.style.maxWidth = '100%';
    const button = document.createElement('button');
    button.innerHTML = 'Close';
    button.style.float = 'right';
    button.style.background = 'red';
    button.style.border = 'none';
    button.style.padding = '4px 8px';
    button.style.borderRadius = '3px';
    button.style.cursor = 'pointer';
    button.style.color = '#fff';
    button.addEventListener('click', (event) => {
        clearInterval(interval);
        div.remove();
    });

    const appendText = (text) => {
        const appendDiv = document.createElement('div');
        appendDiv.innerHTML = text;
        div.append(appendDiv);
    }

    const appendLink = (href) => {
        const appendA = document.createElement('a');
        appendA.innerHTML = '[CLICK FOR VIDEO]';
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
        appendText('Last updated at ' + Math.round(Date.now() / 1000))
        appendText(videoSrcs.length + ' videos:');
        videoSrcs.forEach((src) => {appendLink(src)});
        appendText(iframeSrcs.length + ' iframes:')
        iframeSrcs.forEach((src) => {appendLink(src)});
    }

    render();
    const interval = setInterval(render, 1000);
})();
