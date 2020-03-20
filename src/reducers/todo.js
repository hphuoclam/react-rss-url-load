import _ from 'lodash'
let initialState = {
  sections: []
}
export default (state = initialState, action) => {
  let newState = _.merge({}, state)
  switch(action.type) {
    default:
      return state
  }
}