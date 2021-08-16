import { Effect, Reducer, Subscription, request } from 'umi';

interface ItemProps {
  item_id: number;
  item_name: string;
  item_type: number;
  price: number;
  total_price: number;
  des1: string;
}

export interface ItemModelState {
  name: string;
  items: ItemProps[];
  filterKey: number;
}

export interface ItemModelType {
  namespace: 'item';
  state: ItemModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<ItemModelState>;
  };
  subscriptions: { setup: Subscription };
}

const ItemModel: ItemModelType = {
  namespace: 'item',

  state: {
    name: 'item',
    items: [],
    filterKey: 0
  },

  effects: {
    *query({ payload }, { call, put }) {
      const data = yield request('/web201605/js/item.json');
      yield put({
        type: 'save',
        payload: {
          items: data,
        },
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/item') {
          dispatch({
            type: 'query'
          })
        }
      });
    }
  },
};

export default ItemModel;
