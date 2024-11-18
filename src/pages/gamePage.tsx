import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetGameQuery } from '../features/api/apiSlice';
import { Spinn } from '../components/spinn';

export const GamePage: React.FC = () => {
    const { id } = useParams<{ id: any }>(); 
    const gameId = parseInt(id, 10);
    const { data: game, error, isLoading } = useGetGameQuery(gameId);

    if (isLoading) return <div className='spinner'><Spinn/></div>;
    if (error) return <div>Error loading game details.</div>;
    if (!game) return <div>Game not found.</div>;
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>{game.title}</h1>
        <p>{`Release date: ${game.release_date}`}</p>
        <p>{`Developer: ${game.developer}`}</p>
        <p>{`Genre: ${game.genre}`}</p>
        <div>
                <h2>Minimum System Requirements:</h2>
                <ul>
                    <li>OS: {game.minimum_system_requirements.os || 'N/A'}</li>
                    <li>Processor: {game.minimum_system_requirements.processor || 'N/A'}</li>
                    <li>Memory: {game.minimum_system_requirements.memory || 'N/A'}</li>
                    <li>Graphics: {game.minimum_system_requirements.graphics || 'N/A'}</li>
                    <li>Storage: {game.minimum_system_requirements.storage || 'N/A'}</li>
                </ul>
            </div>
        <img src={game.thumbnail} alt={game.title} />
      </div>
    )
}