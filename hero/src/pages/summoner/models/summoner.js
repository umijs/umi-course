import { querySummoner} from 'services/api';
import summonerjson from '../../../../mock/summoner.json';
export default {
  state: {
    summoner: [],
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
      const summoner = summonerjson;

      yield put({
        type: 'save',
        payload: {
          summoneritems: summoner,
        },
      });
    },
  },
};
