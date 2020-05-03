This is a bookmarklet that pops up a list of links to the sources of every video tag on the current page.

To install this bookmarklet, create a new bookmark in your browser and paste the following code into the bookmark "URL" field.
```js
javascript:(()=>{const s=document.createElement('script');s.setAttribute('src','https://rodmcnew.github.io/video-tag-finder/index.js');document.body.appendChild(s);})()
```
