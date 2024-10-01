import React from 'react'

function Main1() {
  return (
    <div className='carddata d-flex mt-2'>
               
    <div className="cards mt-5">
        <div className="card">
            <div className="image">
                <img
                    src="https://i.pinimg.com/originals/14/3e/60/143e60259ad35cbf08a4c3efe0929b39.jpg"
                    alt="Card"
                />
            </div>
            <div className="content">
                <h3>Altbier(beer)</h3>
                <p className='text-start'>
                Altbier is a traditional German ale with rich, malty flavors and balanced hop bitterness, presenting an amber color and smooth, drinkable profile.
                </p>
            </div>
        </div>
    </div>

    <div className="cards mt-5">
        <div className="card">
            <div className="image">
                <img
                    src="https://th.bing.com/th/id/OIP.mGBSut34-lzCt1vWZuPPfgHaE6?rs=1&pid=ImgDetMain"
                    alt="Card"
                />
            </div>
            <div className="content">
                <h3>Bitter (beer)</h3>
                <p>                        
                Bitter is a British ale characterized by strong hop bitterness balanced by malt sweetness, usually amber in color. It offers floral and earthy aromas, making it a refreshing choice for hop lovers.
                </p>
            </div>
        </div>
    </div>

    <div className="cards mt-5">
        <div className="card">
            <div className="image">
                <img
                    src="https://th.bing.com/th/id/OIP.3pguck288KWgFGj6Qk3e6QHaE7?w=626&h=417&rs=1&pid=ImgDetMain"
                    alt="Card"
                />
            </div>
            <div className="content">
                <h3>Brown Ale(beer)</h3>
                <p>
                Brown Ale is a rich, malty beer with caramel and chocolate notes, typically deep amber to brown in color. It has a smooth, slightly sweet flavor, making it a cozy choice for beer lovers.
                </p>
            </div>
        </div>
    </div>
</div>

  )
}

export default Main1
