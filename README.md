ohai-data
==============

##About

###Description
ohai-data returns data detected from running ohai

###Author
ContainerShip Developers - developers@containership.io

##Getting Started

###Adding ohai-data as a dependency
`npm install ohai-data --save`

###How do I uase ohai-data?
```javascript
var ohai = require("ohai-data");

ohai.detect(function(err, data){
    if(err)
        throw err;

    console.log(data);
});

```
It's that simple!

###ohai-data can't find my ohai executable
If ohai isn't in your PATH, specify the path to the executable as follows:
```javascript
var ohai = require("ohai-data");

ohai.detect({ executable: "/path/to/ohai" }, function(err, data){
    if(err)
        throw err;

    console.log(data);
});

```

##Contributing
Pull requests and issues are encouraged!
