import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { RootState } from '../store/store';
import { useGetGamesQuery } from '../features/api/apiSlice';
import { Game } from '../components/game/game';
import { Spinn } from '../components/spinn';
import { Popup } from '../components/popup';
import { storeGames } from '../features/games/gamesSlice';
import { GameData } from '../features/games/gamesSlice';
import { useNavigate } from 'react-router-dom';

export const MainPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const gamesFromRedux = useSelector((state: RootState) => state.games.games);
    const [selectedGenre, setSelectedGenre] = React.useState<string | null>(null);
    const [selectedPlatform, setSelectedPlatform] = React.useState<string | null>(null);
    const [selectedSort, setSelectedSort] = React.useState<string | null>(null);

    const { data: games, error, isLoading } = useGetGamesQuery({ 
        genre: selectedGenre || undefined,
        platform: selectedPlatform || undefined,
        sortBy: selectedSort || undefined
    });

    if (games) {
        console.log("Данные из API:", games);
      }

    React.useEffect(() => {
        if (games) {
            dispatch(storeGames(games));
        }
    }, [games, dispatch]);

    const handleFilterByGenre = (genre: string) => {
        setSelectedGenre(genre);
    };

    const handleFilterByPlatform = (platform: string) => {
        setSelectedPlatform(platform);
    };

    const handleSortChange = (sortKey: string): void => {
        setSelectedSort(sortKey);
    };

    const handleReset = () => {
        setSelectedGenre(null);
        setSelectedPlatform(null);
        setSelectedSort(null)
    };

    const handleGameClick = (item: GameData) => {
        navigate(`/game/${item.id}`, { state: { item } });
    };

    if (isLoading) return <div className='spinner'><Spinn/></div>;
    if (error) return <div>Error loading games.</div>;

    // Моковые данные
    const mockGenres = [
        { label: 'MMORPG', key: 'mmorpg', onSelect: () => handleFilterByGenre('MMORPG'.toLowerCase()) },
        { label: 'Shooter', key: 'shooter', onSelect: () => handleFilterByGenre('Shooter'.toLowerCase()) },
        { label: 'Strategy', key: 'strategy', onSelect: () => handleFilterByGenre('Strategy'.toLowerCase()) },
        { label: 'Action RPG', key: 'action-rpg', onSelect: () => handleFilterByGenre('Action RPG'.toLowerCase()) },
        { label: 'Battle Royale', key: 'battle-royale', onSelect: () => handleFilterByGenre('Battle Royale'.toLowerCase()) },
        { label: 'ARPG', key: 'arpg', onSelect: () => handleFilterByGenre('ARPG'.toLowerCase()) },
        { label: 'MMOARPG', key: 'mmoarpg', onSelect: () => handleFilterByGenre('MMOARPG'.toLowerCase()) },
        { label: 'Fighting', key: 'fighting', onSelect: () => handleFilterByGenre('Fighting'.toLowerCase()) },
        { label: 'MOBA', key: 'moba', onSelect: () => handleFilterByGenre('MOBA'.toLowerCase()) },
        { label: 'Card Game', key: 'card-game', onSelect: () => handleFilterByGenre('Card Game'.toLowerCase()) },
        { label: 'Action Game', key: 'action-game', onSelect: () => handleFilterByGenre('Action Game'.toLowerCase()) },
        { label: 'Action', key: 'action', onSelect: () => handleFilterByGenre('Action'.toLowerCase()) },
        { label: 'Sports', key: 'sports', onSelect: () => handleFilterByGenre('Sports'.toLowerCase()) },
        { label: 'MMO', key: 'mmo', onSelect: () => handleFilterByGenre('MMO'.toLowerCase()) },
        { label: 'Racing', key: 'racing', onSelect: () => handleFilterByGenre('Racing'.toLowerCase()) },
        { label: 'Social', key: 'social', onSelect: () => handleFilterByGenre('Social'.toLowerCase()) },
        { label: 'Fantasy', key: 'fantasy', onSelect: () => handleFilterByGenre('Fantasy'.toLowerCase()) },
    ];
    
    const mockPlatforms = [
        { label: 'PC', key: 'pc', onSelect: () => handleFilterByPlatform('PC'.toLowerCase()) },
        { label: 'Browser', key: 'browser', onSelect: () => handleFilterByPlatform('Browser'.toLowerCase()) },
    ];

    const mockSortOptions = [
        { label: 'Release Date', key: 'release-date', onSelect: () => handleSortChange('release-date') },
        { label: 'Alphabetical', key: 'alphabetical', onSelect: () => handleSortChange('alphabetical') },
        { label: 'Popularity', key: 'popularity', onSelect: () => handleSortChange('popularity') },
      ];

    return (
        <div className="App">
            <div><h1>Games Main</h1></div>
            <div className='popups-wrapper'>
                <Popup title='Filter By Genre' elements={mockGenres} />
                <Popup title='Filter By Platform' elements={mockPlatforms} />
                <Popup title='Sort By' elements={mockSortOptions} />
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