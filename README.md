# SUMONI.json

It's a little lib I built usin' GulpJS.
To install, just run:
```bash
    npm install sumoni
```

## Use

Here's an example for use:
```js
const sumoni = require('sumoni')
var jsonPicks = sumoni.pullJson("foo.json").then(result => console.log(result.data))

var spikes = insertPokes({foo: 'bar'})
var spikesThinged = projectJson(spikes)
```