import React from "react"
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

interface PopupProps {
    title: string;
    elements: MenuProps['items'];
}

export const Popup: React.FC<PopupProps> = ({ title, elements }) => {
    return (
        <Dropdown 
            menu={{ items: elements }}
            trigger={['click']}
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    {title}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
};