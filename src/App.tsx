import React, {useState, useEffect} from 'react';
import { useGetGamesQuery, DataItem } from './features/api/apiSlice';
import { Game } from './components/game';
import { Spinn } from './components/spinn';
import { Popup } from './components/popup';
import { Unique } from './utilities/unique';
import type { MenuProps } from 'antd';
import './App.css';

const App: React.FC = () => {
  const { data: allData = [], error, isLoading } = useGetGamesQuery({});
  const [filteredData, setFilteredData] = useState<DataItem[]>(allData);

  useEffect(() => {
    if (allData.length > 0) {
      setFilteredData(allData);
    }
  }, [allData]);

  const handleFilterChange = (selectedGenre: string) => {
    const filtered = allData.filter(game => game.genre === selectedGenre);
    setFilteredData(filtered);
  };

  const handleReset = () => {
    setFilteredData(allData);
  };

  if (isLoading) return <div className='spinner'><Spinn/></div>;
  if (error) return <div>Error:</div>;

  const uniqueGenres: MenuProps['items'] = Unique(allData, 'genre', handleFilterChange);

  return (
    <div className="App">
      <div><h1>Games main</h1></div>
      <div className='popups-wrapper'>
        <span>Filter by: </span>
        <Popup title='genre' elements={uniqueGenres}></Popup>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className='gamesWrapper'>
        {filteredData?.map((item: DataItem) => (
          <Game key={item.id} title={item.title} description={`release date: ${item.release_date};\npublisher: ${item.publisher}; genre: ${item.genre}`} thumbnail={item.thumbnail}></Game>
        ))}
      </div>
    </div>
  );
}

export default App;
