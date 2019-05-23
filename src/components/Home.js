import React from 'react';


class Home extends React.Component
{
    
    render()
    {
        return(
            <div className={"App"}>
                <div className={"first block well"}>
                    <img src="./files/NoisyNeighbourLogo.png" alt="Noisy Neighbour Logo"/>
                    <p>Noisy Neighbour is a website that encourages people to write about their bad experiences with their neighbours or neighbourhood area.</p>
                    <p>With this in mind, we want to build a map of the best and worse areas in the world to rent/buy a house.</p>
                </div>
            </div>
        )
    }


}

export default Home;
