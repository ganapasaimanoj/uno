import { NO_OF_PLAYERS } from '../../constants';

export default function PlayerSelection({ onSelection }) {
    return (
        <section className='playersSelection'>
            <h2>Select No.of Players</h2>
            <div className='flexCentered gap1'>
                {Object.entries(NO_OF_PLAYERS).map(([key, value]) => (
                    <div key={key} className='playerSelectionCard flexCentered' onClick={() => onSelection(value)}>
                        {value}
                    </div>
                ))}
            </div>
        </section>
    );
};