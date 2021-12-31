import './FrontPageMain.css';
import Header from '../../FrontPage/Header/Header';
import Body from '../../FrontPage/Body/Body';

import {useState, useEffect} from 'react';

    function FrontPage(props){

        //const [isLoading, setIsLoading] = useState(true);
        //const [loadedReviews, setLoadedReviews] = useState([]);
        const [searchTerm, setSearchTerm] = useState("");
        const [searchResults, setSearchResults] = useState([]);

        //console.log(status);

        //return i instead of i.Title
        let num = 4;
          let arr = props.loadedReviews.map((i, index) =>{
                num -= 1;
              return {
                  title: i.Title,
                  id: num
                }
          })

          //console.log(arr.title);
    
        // useEffect(() => {
        //     setIsLoading(true);

        //     fetch('https://ooglandish-default-rtdb.firebaseio.com/Reviews.json'
        //     ).then(response => {
        //         return response.json();
        //     }).then(data =>{
                
        //         const reviews = [];
    
        //         for(const key in data){
        //             const review = {
        //                 id: key,
        //                 ...data[key]
        //             }
    
        //             reviews.push(review);
        //         };
    
        //         //revese array so that the latest one I create is the first one.
    
        //         setIsLoading(false);
        //         setLoadedReviews(reviews.reverse());
        //     }); 
        // }, []);
        //console.log(props.setLoadedReviews);
    
        const handleChange = event => {
            setSearchTerm(event.target.value);
          };
    
          //here we can do arr.Title.filter 
         useEffect(() => {
            let results = arr.filter(review =>{
                return review.title.toLowerCase().includes(searchTerm);
                    /*title: review.title.toLowerCase().includes(searchTerm),
                    id: review.id*/
                
            });

            console.log(results.id);

            setSearchResults(results);

          }, [searchTerm]);



          const handleClickSort = (id) => {
            let arr1 = props.loadedReviews;

           if(id == 1){
                console.log("Genre");
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
                console.log("Time Posted");
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
                console.log("Pop");
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
                        flag = {1}/>}
                <Body reviews = {props.loadedReviews}
                      loading = {props.isLoading}
                      results = {searchResults}
                      Sort = {handleClickSort}/>
            </div>
        );
    }


export default FrontPage;