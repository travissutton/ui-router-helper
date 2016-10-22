
import {IStateProvider, IState} from "@types/angular-ui-router";

// Map to hold application states
const states: Map<string,IState> = new Map();

/**
 * adds a state to be registered when the app loads
 * @param {string} name - route/state name (ex: app.home)
 * @param {IState} config
 */
function addState (name: string, config: IState) {
  states.set(name, config);
}

/**
 * loops through the registered states and adds them to the UI-Router $stateProvider
 * @param {IStateProvider} stateProvider
 */
function compileStates (stateProvider: IStateProvider) {
  for (let [name, config] of states) {
    stateProvider.state(name, config);
  }
}

/**
 * Exports a class to function as the primary application router
 */
class AppRouter {
  static $inject = ['$stateProvider'];

  constructor (private $stateProvider: IStateProvider) {
    compileStates(this.$stateProvider);
  }
}

export {states, addState, AppRouter}