import React from "react";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

interface PopupProps {
    title: string;
    elements: { label: string; key: string; onSelect: () => void }[];
}

export const Popup: React.FC<PopupProps> = ({ title, elements }) => {
    const menuItems: MenuProps['items'] = elements.map(element => ({
        key: element.key,
        label: (
            <a onClick={element.onSelect}>
                {element.label}
            </a>
        ),
    }));

    return (
        <Dropdown 
            menu={{ items: menuItems }}
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