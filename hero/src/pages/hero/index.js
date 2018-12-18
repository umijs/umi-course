import styles from './index.less';
import { connect } from 'dva';
import { Row, Col } from 'antd';

function Hero({ hero }) {
  const { heros = [] } = hero;
  return (
    <div className={styles.normal}>
      <Row>
        {heros.reverse().map(item => (
          <Col key={item.ename} span={3} className={styles.heroitem}>
            <img
              src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
            />
            <p>{item.cname}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default connect(({ hero }) => ({ hero }))(Hero);
