import React from 'react';
import { useGetGamesQuery, DataItem } from './features/api/apiSlice';
import { Game } from './components/game';
import { Spinn } from './components/spinn';
import { Popup } from './components/popup';
import { Unique } from './utilities/unique';
import type { MenuProps } from 'antd';
import './App.css';

const App: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = React.useState<string | null>(null);
  

  const { data: games, error, isLoading } = useGetGamesQuery({ genre: selectedGenre || undefined });

  const handleFilterChange = (genre: string) => {
    setSelectedGenre(genre); 
  };

  const handleReset = () => {
    setSelectedGenre(null); 
  };

  if (isLoading) return <div className='spinner'><Spinn/></div>;
  if (error) return <div>Error loading games.</div>;

  const uniqueGenres: MenuProps['items'] = Unique(games || [], 'genre', handleFilterChange); 

  return (
    <div className="App">
      <div><h1>Games Main</h1></div>
      <div className='popups-wrapper'>
        <span>Filter by: </span>
        <Popup title='genre' elements={uniqueGenres}></Popup>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className='gamesWrapper'>
        {games?.map((item: DataItem) => (
          <Game key={item.id} title={item.title} description={`Release date: ${item.release_date}; Publisher: ${item.publisher}; Genre: ${item.genre}`} thumbnail={item.thumbnail}></Game>
        ))}
      </div>
    </div>
  );
}

export default App;