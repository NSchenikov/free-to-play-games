import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const GamePage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); 
    const location = useLocation();
    const { item } = location.state || {};
    if (!item) return <div>Game not found.</div>;
    return (
        <div>
            <div>GamePage id: {id}</div>
            <div>{item.title}</div>
        </div>
    )
}