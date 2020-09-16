import React from 'react';

const Card = ({name, id, email}) => {
    return (
        
        <div className='bg-light-blue dib br3 pa3 ma2 grow'>
            <img src={`https://robohash.org/${id}}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    )
}

export default Card;