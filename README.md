# ui-router-helper
ES6 based helper module for [ui-router 1.0 ](https://ui-router.github.io/) and [Angular 1.5](http://angularjs.org/) . The purpose is to provide a faster reference point when constructing states rather than building new `angular.module('some_module',[]).config(...)` code every time. The structure uses an ES6 Map object to ensure all routes are unique. Routes are built by the `AppRouter` during the configuration stage by looping through the Map and setting routes.


## Installation
```
npm install ui-router-helper --save
```

or using JSPM: 
```
jspm install npm:ui-router-helper
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

### JSPM/TypeScript Imports
if you are using JSPM and TypeScript and get errors about the import, you can suppress them:
```
//noinspection TypeScriptCheckImport
import {addState} from 'ui-router-helper"';
```


## Questions/Issues
Please use the issues section to post any issues or feedback.