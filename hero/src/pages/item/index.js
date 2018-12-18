import styles from './index.less';
import { connect } from 'dva';
import { Row, Col } from 'antd';

function Item({item}) {
  const { items = [] } = item;
  return (
    <div className={styles.normal}>
      <Row>
        {items.reverse().map(data => (
          <Col key={data.item_id} span={3} className={styles.heroitem}>
            <img
              src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${data.item_id}.jpg`}
            />
            <p>{data.item_name}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default connect(({ item }) => ({ item }))(Item);
