import styles from './index.css';
import { connect } from 'dva';  
function Hero(props) { 
  console.log(props);
          
  return (
    <div className={styles.normal}>
      <h1>Page hero</h1>
      <h2>This is {JSON.stringify(props.hero)}</h2>
    </div>
  );
}
export default connect(({ hero }) => ({ hero }))(Hero); 
