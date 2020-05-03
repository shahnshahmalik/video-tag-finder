(() => {
    setTimeout(() => {
        const videoSrcs = [...document.getElementsByTagName('video')].map((ele) => ele.src);
        const iframeSrcs = [...document.getElementsByTagName('iframe')].map((ele) => ele.src);
        console.log("(()=>{const s=document.createElement('script');s.setAttribute('src','https://rodmcnew.github.io/video-tag-source-finder/index.js');document.body.appendChild(s);})()");
        console.log('videoTagSourceList', videoSrcs, iframeSrcs);
        const div = document.createElement('div');
        div.id = 'videoTagSourceList'
        div.style.backgroundColor = '#00FF00';
        div.style.color = 'black';
        div.style.padding = '1em';
        div.style.fontSize = '12pt'
        div.style.zIndex = '999999999';
        // div.style.position = 'absolute';
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
        iframeSrcs.forEach((src) => {appendLink(src)});
        [...document.querySelectorAll('#videoTagSourceList')].forEach((ele) => {
            ele.remove()
        });
        document.body.prepend(div);
    }, 200);
})();
