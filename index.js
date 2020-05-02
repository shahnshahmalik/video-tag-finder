(()=>{
    const div=document.createElement('div');
    div.id='videoTagSourceList'
    div.style.backgroundColor='green';
    div.style.color='white';
    div.innerHTML=[...document.getElementsByTagName('video')].length+' video tag(s) found:';
    [...document.getElementsByTagName('video')].forEach((ele)=>{
        var a = document.createElement('a');
        a.href=ele.src
        a.target='_blank'
        a.innerHTML=ele.src
        div.append(document.createElement('br'));
        div.append(a)
    });
    [...document.querySelectorAll('#videoTagSourceList')].forEach((ele)=>{
        ele.remove()
    })
    document.body.prepend(div);
})();