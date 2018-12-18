import { queryItem } from 'services/api';

export default {
  state: {
    items: [],
    filterKey: 0,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/item') {
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
      const item = yield call(queryItem);

      yield put({
        type: 'save',
        payload: {
          items: item,
        },
      });
    },
  },
};
