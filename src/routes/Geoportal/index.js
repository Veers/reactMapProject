import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'geoportal',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Geoportal = require('./containers/GeoportalContainer').default
      const reducer = require('./modules/geoportal').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'geoportal', reducer })

      /*  Return getComponent   */
      cb(null, Geoportal)

    /* Webpack named bundle   */
    }, 'geoportal')
  }
})
