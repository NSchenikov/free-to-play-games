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
  const uniqueGenres: MenuProps['items'] = Unique(filteredData, 'genre');

  useEffect(() => {
    if (allData.length > 0) {
      setFilteredData(allData);
    }
  }, [allData]);

  const handleFilterChange = (genre: string) => {
    if (genre) {
      setFilteredData(allData.filter(game => game.genre === genre));
    } else {
      setFilteredData(allData);
    }
  };

  if (isLoading) return <div className='spinner'><Spinn/></div>;
  if (error) return <div>Error:</div>;

  return (
    <div className="App">
      <div><h1>Games main</h1></div>
      <div>
        <span>Filter by: </span>
        <Popup title='genre' elements={uniqueGenres}></Popup>
        <button onClick={() => handleFilterChange('MMORPG')}>MMORPG</button>
        <button onClick={() => handleFilterChange('Shooter')}>Shooter</button>
        <button onClick={() => handleFilterChange('MOBA')}>MOBA</button>
        <button onClick={() => handleFilterChange('Strategy')}>Strategy</button>
        <button onClick={() => handleFilterChange('Battle Royale')}>Battle Royale</button>
        <button onClick={() => handleFilterChange('')}>All Games</button>
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
