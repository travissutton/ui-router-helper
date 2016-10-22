"use strict";
// Map to hold application states
const states = new Map();
exports.states = states;
/**
 * adds a state to be registered when the app loads
 * @param {string} name - route/state name (ex: app.home)
 * @param {IState} config
 */
function addState(name, config) {
    states.set(name, config);
}
exports.addState = addState;
/**
 * loops through the registered states and adds them to the UI-Router $stateProvider
 * @param {IStateProvider} stateProvider
 */
function compileStates(stateProvider) {
    for (let [name, config] of states) {
        stateProvider.state(name, config);
    }
}
/**
 * Exports a class to function as the primary application router
 */
class AppRouter {
    constructor($stateProvider) {
        this.$stateProvider = $stateProvider;
        compileStates(this.$stateProvider);
    }
}
AppRouter.$inject = ['$stateProvider'];
exports.AppRouter = AppRouter;
