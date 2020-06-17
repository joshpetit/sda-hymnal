# sda-hymnal
This is the entire (695 hymn) Sda Hymnal. It is 100% free to use in any way shape or form.

# Installation
```
npm install sda-hymnal
```
# Use
```
const sdaHymnal = require('sda-hymnal')

sdaHymnal({
    number: VERSE_NUMBER,
    title: VERSE_TITLE,
    type: 'json' || 'text' || 'html'
}).then( x =>{
    //...
})


```