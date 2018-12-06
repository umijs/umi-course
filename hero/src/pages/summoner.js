import styles from './summoner.css';
import { connect } from 'dva';

function Summoner(props) {
  return (
    <div className={styles.normal}>
      <h1>Page summoner</h1>
      <h2>This is {props.summoner}</h2>
    </div>
  );
}

export default connect(({ summoner }) => ({ summoner }))(Summoner);
