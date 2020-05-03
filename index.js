(() => {
    const div = document.createElement('div');
    div.id = 'videoTagSourceList'
    div.style.backgroundColor = '#00FF00';
    div.style.color = 'black';
    div.style.padding = '1em';
    div.style.fontSize = '12pt'
    div.style.zIndex = '2147483647';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    document.body.append(div);
    
    setInterval(() => {
        const videoSrcs = [...document.getElementsByTagName('video')].map((ele) => ele.src);
        const iframeSrcs = [...document.getElementsByTagName('iframe')].map((ele) => ele.src);        
        div.innerHTML = '';
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
            div.append(document.createElement('hr'));
            div.append(appendA);
        }
        
        appendText('Last updated time: ' + Date.now())
        appendText(videoSrcs.length + ' videos found:')
        videoSrcs.forEach((src) => {appendLink(src)});
        appendText(iframeSrcs.length + ' iframes found:')
        iframeSrcs.forEach((src) => {appendLink(iframeSrcs)});
    }, 1000);
})();
