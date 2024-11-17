import { useParams } from 'react-router-dom';

export const GamePage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); 
    return (
        <div>GamePage id: {id}</div>
    )
}