import './FrontPageMain.css';
import Header from '../../FrontPage/Header/Header';
import Body from '../../FrontPage/Body/Body';

import {useState, useEffect} from 'react';

    function FrontPage(props){
        const [searchTerm, setSearchTerm] = useState("");
        const [searchResults, setSearchResults] = useState([]);
        
        let num = props.lreviews.length;
          let arr = props.lreviews.map((i, index) =>{
                num -= 1;
              return {
                  title: i.Title,
                  id: num
                }
          })
          //console.log("loadedreviews: ", props.loadedReviews);
          //console.log("arr: ", arr);
    
        const handleChange = event => {
            setSearchTerm(event.target.value);
          };
    
         useEffect(() => {
            let results = arr.filter(review =>{
                return review.title.includes(searchTerm);
            });

            setSearchResults(results);

          }, [searchTerm]);

          const handleClickSort = (id) => {
            let arr1 = props.loadedReviews;

           if(id == 1){
                for(let i = arr1.length - 1; i >= 0; i--){
                    for(let j = 0; j < arr1.length - 1; j++){
                        if(arr1[j].Title > arr1[j + 1].Title){
                            let temp = arr1[j];
                            arr1[j] = arr1[j + 1];
                            arr1[j + 1] = temp;
                        }
                    }
                }
            }
            else if(id == 2){ 
                for(let i = arr1.length - 1; i >= 0; i--){
                    for(let j = 0; j < arr1.length - 1; j++){
                        if(arr1[j].Date < arr1[j + 1].Date){
                            let temp = arr1[j];
                            arr1[j] = arr1[j + 1];
                            arr1[j + 1] = temp;
                        }
                    }
                }
            }
                
            else if(id == 3){
                for(let i = arr1.length - 1; i >= 0; i--){
                    for(let j = 0; j < arr1.length - 1; j++){
                        if(arr1[j].commentNum < arr1[j + 1].commentNum){
                            let temp = arr1[j];
                            arr1[j] = arr1[j + 1];
                            arr1[j + 1] = temp;
                        }
                    }
                }
            }
            props.setLoadedReviews([...arr1]); 
        }

        return(
            <div className="MAINPAGE">
                {<Header term = {searchTerm}
                        results = {searchResults}
                        Change = {handleChange}
                        reviews = {props.loadedReviews}
                        GoingUp = {props.GoingUp}
                        flag = {1}
                        refProp = {props.refProp}/>}
                <Body reviews = {props.loadedReviews}
                      loading = {props.isLoading}
                      results = {searchResults}
                      Sort = {handleClickSort}/>
            </div>
        );
    }


export default FrontPage;