const {expect} = require('chai');
const getHymnal = require('../main')

describe('#sda-hymnal', () =>{
    //JSON Tests
    for (let i = 1; i <= 695; i++) {
        it('Should return hymn as Json', async () => {
            let hymn = await getHymnal({number: i})
            expect(hymn).to.be.an('object', `Expected Hymn ${i} to be a JSON object`)
        });
        it('Should return hymn as Json', async () => {
            let hymn = await getHymnal({number: i, type: 'json'})
            expect(hymn).to.be.an('object', `Expected Hymn ${i} to be a JSON object`)
        });
        it('Should have at lest one verse', async () => {
            let hymn = await getHymnal({number: i, type: 'json'})
            expect(hymn.verses.length).to.be.greaterThan(0, `Expected Hymm ${i} to have at least one verse`)
        });
        it('Should return hymn as text', async () => {
            let hymn = await getHymnal({number: i, type: 'text'})
            expect(hymn).to.be.a('string', `Expected Hymn ${i} to be a string`)
        });
        it('Should be at least 200 characters', async () =>{
            let hymn = await getHymnal({number: i, type: 'text'})
            expect(hymn.length).to.be.greaterThan(90, `Expected Hymn ${i} to be larger than 90 characters`)
        });
        it('Should return hymn as html', async () =>{
            let hymn = await getHymnal({number: i, type: 'html'})
            expect(hymn).to.be.a('string', `Expected Hymn ${i} to be an html string`)
        });
    }
})