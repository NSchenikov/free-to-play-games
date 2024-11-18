import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { RootState } from '../store/store'
import { useGetGamesQuery } from '../features/api/apiSlice';
import { Game } from '../components/game/game';
import { Spinn } from '../components/spinn';
import { Popup } from '../components/popup';
import { Unique } from '../utilities/unique';
import { storeGames } from '../features/games/gamesSlice';
import { GameData } from '../features/games/gamesSlice';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

export const MainPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const gamesFromRedux = useSelector((state: RootState) => state.games.games);
    const [selectedGenre, setSelectedGenre] = React.useState<string | null>(null);

    const { data: games, error, isLoading } = useGetGamesQuery({ genre: selectedGenre || undefined });

    React.useEffect(() => {
        if (games) {
            dispatch(storeGames(games));
        }
    }, [games, dispatch]);

    const handleFilterChange = (genre: string) => {
        setSelectedGenre(genre);
    };

    const handleReset = () => {
        setSelectedGenre(null);
    };

    const handleGameClick = (item: GameData) => {
        navigate(`/game/${item.id}`, { state: { item } });
    };

    if (isLoading) return <div className='spinner'><Spinn/></div>;
    if (error) return <div>Error loading games.</div>;

    const uniqueGenres: MenuProps['items'] = Unique(gamesFromRedux, 'genre', handleFilterChange);

    return (
        <div className="App">
            <div><h1>Games Main</h1></div>
            <div className='popups-wrapper'>
                <span>Filter by: </span>
                <Popup title='genre' elements={uniqueGenres}></Popup>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className='gamesWrapper'>
                {gamesFromRedux?.map((item: GameData) => (
                    <div onClick={() => handleGameClick(item)} key={item.id}>
                        <Game
                            key={item.id}
                            title={item.title}
                            description={`Release date: ${item.release_date}; Publisher: ${item.publisher}; Genre: ${item.genre}`}
                            thumbnail={item.thumbnail}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
