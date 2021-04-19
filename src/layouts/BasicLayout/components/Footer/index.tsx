import React from 'react';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>纵腾集团 © 2008-2021 All Rights Reserved.</span>
      <br />
      <span className={styles.copyright}>
        <a href="https://beian.miit.gov.cn/">[闽ICP备14019350号-3]</a>
      </span>
    </p>
  );
}
