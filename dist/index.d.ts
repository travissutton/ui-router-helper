import { IStateProvider, IState } from "@types/angular-ui-router";
declare const states: Map<string, IState>;
/**
 * adds a state to be registered when the app loads
 * @param {string} name - route/state name (ex: app.home)
 * @param {IState} config
 */
declare function addState(name: string, config: IState): void;
/**
 * Exports a class to function as the primary application router
 */
declare class AppRouter {
    private $stateProvider;
    static $inject: string[];
    constructor($stateProvider: IStateProvider);
}
export { states, addState, AppRouter };
