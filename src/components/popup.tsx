import React from "react"
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

interface Menu {
    title: string;
    elements: MenuProps['items'];
}

interface PopupProps {
    title: string;
    elements: MenuProps['items']; // Обновлено для использования элементов меню
}

export const Popup: React.FC<PopupProps> = ({ title, elements }) => {
    return (
        <Dropdown 
            menu={{ items: elements }} // Передаем элементы в выпадающее меню
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