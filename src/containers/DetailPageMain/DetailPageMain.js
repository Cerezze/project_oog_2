import './DetailPageMain.css';
import {useParams, useHistory, useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Header from '../../FrontPage/Header/Header';
import ReviewBodyDetailPage from '../../DetailPage/ReviewBodyDetailPage/ReviewBodyDetailPage.js';
import CommentSection from '../../DetailPage/CommentSection/CommentSection';

// IMPORTANT: for now we will export the props from front page to detail page
//to get the details. But eventually must do something that is better wether globalizing
//the http request or what ever TEACH has in mind

/*let LoadedReviews = [
      {
        "id": "arr1", 
        "Date" : "5/17/2021 6:22pm",
        "Image" : "www.zelda.com/breath-of-the-wild/assets/media/header/Main-Day.jpg",
        "Title" : "The Legend of Zelda: Breath of the Wild",
        "commentNum" : 3
      },
      {
        "id": "arr2",
        "Date" : "5/17/2021 8:22pm",
        "Image" : "i.ytimg.com/vi/5bXnL4rmZeI/maxresdefault.jpg",
        "Title" : "Bayonetta 2",
        "commentNum" : 10
      },
      {
        "id": "arr3",
        "Date" : "5/19/2021 8:22pm",
        "Image" : "steamcdn-a.akamaihd.net/steam/apps/377840/capsule_616x353.jpg",
        "Title" : "Final Fantasy 9",
        "commentNum" : 7
      },
      {
        "id": "arr4",
        "Date" : "6/09/2021 9:00pm",
        "Image" : "i.pcmag.com/imagery/reviews/00iqOnWo3oWburmEq4Cg8jY-4..1584123831.jpg",
        "Title" : "Ori and The Will of the Wisps",
        "commentNum" : 100
      }
    ]*/
      

const DetailPage = (props) => {
    const params = useParams();
    const location = useLocation();

     //const [IsLoading, SetIsLoading] = useState(true);
     //const [LoadedReviews, SetLoadedReviews] = useState([]);

  //   useEffect(() => {
  //     SetIsLoading(true);

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

  //         SetIsLoading(false);
  //         SetLoadedReviews(reviews.reverse());
  //     }); 
  // }, []);

    const review = props.loadedReviews.find((review) => review.id === params.reviewData);
    if(!review){
        return <p>No Review Found!!</p>
    }
    //console.log(review.idx);
    //console.log(props.setLoadedReviews);
    //console.log(review);
    

    return(
        <div className = "MAINPAGE">

            <Header GoingUp = {props.GoingUp}
                    flag = {0}/>
            <ReviewBodyDetailPage DetailReview = {review}/>
            <CommentSection onAddReview = {props.onAddReview}
                            DetailReview = {review}
                            refProp = {props.refProp}
                            /*reviewIdx = {params.reviewIdx}*//>
            
        </div>
    );
}


export default DetailPage;