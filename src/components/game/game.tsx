import React from 'react';
import { Card } from 'antd';
import './game.css'

const { Meta } = Card;

interface GameProps {
    title: string;
    description: string;
    thumbnail: string;
}

export const Game: React.FC<GameProps> = ({title, description, thumbnail}) => {

    return (
        <Card
        style={{ width: 300, cursor: "pointer"}}
        cover={
          <img
            alt="example"
            src={thumbnail}
          />
        }
      >
        <Meta
            title={title}
            description={description}
        />
      </Card>
    )
}