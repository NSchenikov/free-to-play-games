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
        <p>{`Publisher: ${game.publisher}`}</p>
        <p>{`Genre: ${game.genre}`}</p>
        <img src={game.thumbnail} alt={game.title} />
      </div>
    )
}