import React from 'react';

 function Words(props) {
    const searchList = document.querySelector(".listData");

    return (
        <div className='listData'>
            {searchList && searchList.insertAdjacentHTML("afterbegin",
            `<li>
                <h4>${props.data.title}</h4>
                ${props.data.snippet}
            </li>`)}
        </div>
    )
}

export default Words;
