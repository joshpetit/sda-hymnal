# sda-hymnal
This is the entire (695 hymn) Sda Hymnal; free to use in any capacity.

# Installation
```sh
npm install sda-hymnal
```
# Use
```js
const sdaHymnal = require('sda-hymnal')

sdaHymnal({
    number: VERSE_NUMBER, //Either Number or Title, only one required.
    title: VERSE_TITLE,
    type: 'json' || 'text' || 'html' //Defaults to JSON
}).then( x =>{
    //...
})
```
# Formats
### Json Format
```js

{
   hymnNumber: NUMBER,
   hymnTitle: 'Title',
   
   verses: [
   {
      verseName: 'Verse 1',
      text: 'Verse_Text'
   },
   {
      verseName: 'Refrain',
      text: 'Refrain_Text'
   },
   //....
   ]

}
```
### Text Format
```
HYMN_NUMBER
HYMN_TITLE

Verse 1
Verse_Text

Refrain
Refrain_Text
```

### HTML Format
```html

<h4>Hymn_Number</h4>
<h4>Hymn_Title</h4>

<h5>Verse 1</h5>
<p>Verse_Text</p>

<h5>Refrain</h5>
<p>Refrain_Text</p>
```
# Credits
SQLITE Data modified from [obaralll's hymnal app](https://github.com/obaraIII/SDAHymnal)
