import React from 'react';
import './Search.css';
import SearchLog from '../../Designs_and_Flow/basic_designs/Search.png';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Search = (props) =>{
    return(<div className="search">
        <img className = "SearchLog" src = {SearchLog} height = {"45px"}/>
        <input className = "searchIn"
            type = "text" 
            placeholder="   SEARCH..."
            value={props.term}
            onChange={props.Change}/>
        {props.term ? <ul className = "searchList">{ props.results.map(item =>{
                return(
                    <Link to = {`/detail-review/${"arr" + (item.id + 1)}/${item.id}`} key = {item.id}><li className = "searchListEle" >{item.title}</li></Link>
                )
            })}
        </ul> : null}
    </div>);
};

export default Search;