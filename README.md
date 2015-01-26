![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-devnull

## Status

> ##### Stability: [1](http://nodejs.org/api/documentation.html#documentation_stability_index) - Experimental

## Purpose

`/dev/null` adapter for Sails

### Wait WAT?!

These aren't the datas you're looking for


### Thoughts

#### Responsibility segregation style

```javascript
FooBarCommand.create(req.params.all(), function(err, sanitized_data) {

  if (err) {
    return res.json({
      status: 'error',
      error: err
    });
  }

  // send `sanitized_data` elsewhere

});
```

##### api/models/foo/FooBarCommand.js

```javascript
module.exports = {

  adapter: 'devnull',

  autoUpdatedAt: false,
  autoPK: false,
  schema: true,

  attributes: {
    id: {
      type: 'uuidv4',
      required: true,
      primaryKey: true
    },
    name: 'string',
    timestamp: 'datetime'
  }
};
```

#### Request validator module

Hook to validate on the request level: https://github.com/Josebaseba/sails-hook-validator

#### Other patterns

Who knows..

## About Sails.js
http://sailsjs.com

## About Waterline
Waterline is a new kind of storage and retrieval engine.  It provides a uniform API for accessing stuff from different kinds of databases, protocols, and 3rd party APIs.  That means you write the same code to get users, whether they live in mySQL, LDAP, MongoDB, or Facebook.

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/a22d3919de208c90c898986619efaa85 "githalytics.com")](http://githalytics.com/balderdashy/sails-dirty)

## License

MIT
