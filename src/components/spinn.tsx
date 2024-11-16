import React from "react";
import { Flex, Spin } from 'antd';

export const Spinn: React.FC = () => {
    return (
        <Flex align="center" gap="middle">
            <Spin size="large" />
        </Flex>
    )
}