import { queryHeroList, getHeroDetails } from 'services/api';

export default {
  state: {
    heros: [],
    filterKey:0
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/hero') {
          dispatch({
            type: 'fetch',
          });
        }
      });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
      const herolist = yield call(queryHeroList);
      const herodetails = yield call(getHeroDetails, { ename: 110 });
      console.log(herodetails);
      yield put({
        type: 'save',
        payload: {
          heros: herolist,
        },
      });
    },
  },
};
