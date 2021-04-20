import React from 'react';
import { Overlay, Menu, Icon } from '@alifd/next';
import styles from './index.module.scss';
import { CustomIcon } from '@/components/Iconfont';

const { Item } = Menu;
const { Popup } = Overlay;

export interface Props {
  name: string;
  avatar: string;
  mail: string;
}

const UserProfile = ({ name, avatar, mail }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <CustomIcon type={avatar} />
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <span>{mail}</span>
      </div>
    </div>
  );
};

const HeaderAvatar = (props: Props) => {
  const { name, avatar } = props;
  return (
    <Popup
      trigger={
        <div className={styles.headerAvatar}>
          <CustomIcon type={avatar} />
          <span style={{ marginLeft: 10 }}>{name}</span>
        </div>
      }
      triggerType="click"
    >
      <div className={styles.avatarPopup}>
        <UserProfile {...props} />
        <Menu className={styles.menu}>
          <Item>
            <Icon size="small" type="account" />
            个人设置
          </Item>
          <Item>
            <Icon size="small" type="set" />
            系统设置
          </Item>
          <Item>
            <Icon size="small" type="exit" />
            退出
          </Item>
        </Menu>
      </div>
    </Popup>
  );
};

HeaderAvatar.defaultProps = {
  name: 'ZT19284',
  mail: 'buluogege@163.com',
  avatar: 'user',
};

export default HeaderAvatar;
