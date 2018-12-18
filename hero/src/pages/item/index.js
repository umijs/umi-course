import styles from './index.css';
import { connect } from 'dva';

function Item(props) {
  return (
    <div className={styles.normal}>
      <h1>Page item</h1>
      <h2>This is {JSON.stringify(props.item)}</h2>
    </div>
  );
}
export default connect(({ item }) => ({ item }))(Item);
