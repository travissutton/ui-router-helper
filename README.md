# ui-router-helper
ES6 based helper module for ui-router 1.0 and Angular 1

## Installation
```
npm install ui-router-helper --save
```

## Usage
To use the helper, first add the AppRouter to your main app file.

```
import {AppRouter} from 'ui-router-helper';

// Add AppRouter as config
angular.module('app', [])
    .config(AppRouter);
```

Next, from any other file where you would like to add a route, import the `addState` method and use in file.

```
import {addState} from 'ui-router-helper"';

addState('app.home', {
    url: '/home',
    template: '<h1>Welcome</h1>'
});
```

The state will be added to the `$stateProvider` on runtime and be available for navigation.

## Questions/Issues
Please use the issues section to post any issues or feedback.