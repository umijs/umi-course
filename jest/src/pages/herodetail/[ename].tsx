import React from 'react';
import styles from './ename.less';

export default ({ match }) => {
  //    isExact: true
  //    params:
  //        ename: "123"
  //    path: "/herodetail/:ename"
  //    url: "/herodetail/123"
  console.log(match);

  return (
    <div>
      <h1 className={styles.title}>Page herodetail/ename</h1>
    </div>
  );
}
