import { DataItem } from "../features/api/apiSlice";
import { MenuProps } from "antd";

export const Unique = (arr: DataItem[], key: keyof DataItem): MenuProps['items'] => {
    const res: MenuProps['items'] = [];
    const uniqueValues = new Set<string>();

    arr.forEach((item, index) => {
        const value = item[key];

        if (typeof value === 'string' && value && !uniqueValues.has(value.trim())) {
            uniqueValues.add(value);
            res.push({
                label: <span>{value}</span>,
                key: index,
            });
        }
    });
    console.log(res);

    return res;
};
