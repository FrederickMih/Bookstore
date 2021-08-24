import * as myConst from '../constants';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case myConst.CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;
