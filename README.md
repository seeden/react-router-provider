# React Router Provider

Provide router as property to any component. You can use it as decorator too.

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-router-provider.svg?style=flat-square
[npm-url]: https://www.npmjs.com/react-router-provider
[github-url]: https://github.com/seeden/react-router-provider


## Install
```sh
npm install react-router-provider
```


# Support us

Star this project on [GitHub][github-url].


## Usage

### Decorator

````js
import React, { Component } from 'react';
import provideRouter from 'react-router-provider';

@provideRouter
export default class Example extends Component {
  render() {
    const router = this.props.router;

    return (
      <div>{router.location.query}</div>
    );
  }
}
```

### Function

```js
import React, { Component } from 'react';
import provideRouter from 'react-router-provider';

class Example extends Component {
  render() {
    const router = this.props.router;

    return (
      <div>{router.location.query}</div>
    );
  }
}

export default provideRouter(Example);
```

## Try our other React components

 - Translate your great project [react-translate-maker](https://github.com/CherrySoftware/react-translate-maker)
 - Forms [react-form-controlled](https://github.com/seeden/react-form-controlled)
 - Google AdSense via Google Publisher Tag [react-google-publisher-tag](https://github.com/seeden/react-google-publisher-tag)

# Support us

Star this project on [GitHub][github-url].

## Credits

[Zlatko Fedor](http://github.com/seeden)

## License

The MIT License (MIT)

Copyright (c) 2016 Zlatko Fedor zlatkofedor@cherrysro.com
