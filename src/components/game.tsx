import React from 'react';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

interface GameProps {
    title: string;
    description: string;
    thumbnail: string;
}

export const Game: React.FC<GameProps> = ({title, description, thumbnail}) => {

    return (
        <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={thumbnail}
          />
        }
        // actions={[
        //   <SettingOutlined key="setting" />,
        //   <EditOutlined key="edit" />,
        //   <EllipsisOutlined key="ellipsis" />,
        // ]}
      >
        <Meta
        //   avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title={title}
          description={description}
        />
      </Card>
    )
}