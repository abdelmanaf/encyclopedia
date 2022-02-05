import Word from './Words';
import { useState } from 'react';
import logo from '../logo.png'

function Search() {
    const [result, setResult] = useState({});


    async function fetchData(val){
        const trimVal = val.trim().toLowerCase();
        if (trimVal.length > 0){
            const api = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${trimVal}`;
            const response = await fetch(api);
            if (!response.ok){
                throw Error (response.statusText)
            }
            return await response.json();
        }
    }
    

    return (
        <div className="container">
            <div className="header">
                <div className="caption">
                    <h4>USE WIKIPEDIA API</h4>
                    <p>The Free Encyclopedia</p>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="content">
                <form action="">
                    <input type="text" className="search"/>
                </form>
            </div>
            <div className="word">
                {/* Search result component */}
            </div>
        </div>

    );
}
export default Search;
