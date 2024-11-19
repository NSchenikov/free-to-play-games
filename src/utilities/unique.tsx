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

//genres: MMORPG, Shooter, Strategy, Action RPG, Battle Royale, ARPG, MMOARPG, Fighting, MOBA, Card Game, Action Game, Action, Sports, MMO, Racing, Social, Fantasy
//platform: pc, browser
//sort: release-date, alphabetical
//tag: mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts

// multitiple link: GET https://www.freetogame.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc&category=mmorpg&sort-by=release-date