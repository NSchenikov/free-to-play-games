import React from 'react';
import { useGetGamesQuery, DataItem } from './features/api/apiSlice';
import './App.css';


const App: React.FC = () => {
  const { data, error, isLoading } = useGetGamesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  return (
    <div className="App">
      <h1>Данные</h1>
      <ul>
        {data?.map((item: DataItem) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
