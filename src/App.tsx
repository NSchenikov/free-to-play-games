import React from 'react';
import { useGetGamesQuery, DataItem } from './features/api/apiSlice';
import { Game } from './components/game';
import './App.css';


const App: React.FC = () => {
  const { data, error, isLoading } = useGetGamesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  return (
    <div className="App">
      <h1>Games main</h1>
      <div className='gamesWrapper'>
        {data?.map((item: DataItem) => (
          <Game key={item.id} title={item.title} description={`release date: ${item.release_date};\npublisher: ${item.publisher}; genre: ${item.genre}`} thumbnail={item.thumbnail}></Game>
        ))}
      </div>
    </div>
  );
}

export default App;
