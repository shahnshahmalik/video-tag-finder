(() => {
    const srcs = [...document.getElementsByTagName('video')].map((ele) => ele.src);
    console.log('videoTagSourceList', srcs);
    const div = document.createElement('div');
    div.id = 'videoTagSourceList'
    div.style.backgroundColor = '#00FF00';
    div.style.color = 'black';
    div.style.padding = '1em';
    div.innerHTML = srcs.length + ' video tag(s) found as of time ' + Date.now();
    srcs.forEach((src) => {
        var a = document.createElement('a');
        a.href = src
        a.target = '_blank'
        a.innerHTML = src
        div.append(document.createElement('br'));
        div.append(a)
    });
    [...document.querySelectorAll('#videoTagSourceList')].forEach((ele) => {
        ele.remove()
    });
    document.body.prepend(div);
})();
