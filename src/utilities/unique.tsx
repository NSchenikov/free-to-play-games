import { DataItem } from "../features/api/apiSlice";
import { MenuProps } from "antd";

export const Unique = (arr: DataItem[], key: keyof DataItem, onSelect: (value: string) => void): MenuProps['items'] => {
    const res: MenuProps['items'] = [];
    const uniqueValues = new Set<string>();

    arr.forEach((item, index) => {
        const value = item[key];

        if (typeof value === 'string' && value && !uniqueValues.has(value.trim())) {
            uniqueValues.add(value);
            res.push({
                label: (
                    <span onClick={() => onSelect(value)}>{value}</span>
                ),
                key: index.toString(),
            });
        }
    });

    console.log(res);

    return res;
};