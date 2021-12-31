import "./App.css";
import FrontPage from './containers/FrontPageMain/FrontPageMain';
import DetailPage from './containers/DetailPageMain/DetailPageMain';
import { Route, Switch, Redirect, useLocation} from 'react-router-dom';
import {useState, useEffect, useContext, useRef} from 'react';
import useHttp from "./usehttp/usehttp";
import AuthPage from './containers/LogInMain/LogInMain';
import Profile from './containers/UserProfileMain/UserProfileMain';
import AuthContext from './store/auth-context';
import ScrollToTop from "./ScrollToTop/ScrollToTop";
//IMPORT NOT FOUND LATER

function App() {
  const prevScrollY = useRef(0);
  const DIV1 = useRef(null);
  const [goingUp, setGoingUp] = useState(true);

  const OnScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
    //console.log(goingUp, currentScrollY);
  };

  // const [IsLoading, SetIsLoading] = useState(true);
  // const [LoadedReviews, SetLoadedReviews] = useState([]);

  //   useEffect(() => {
  //     SetIsLoading(true);

  //     fetch('https://ooglandish-default-rtdb.firebaseio.com/Reviews.json'
  //     ).then(response => {
  //         return response.json();
  //     }).then(data =>{
  //         //console.log(data);
  //         const reviews = [];

  //         for(const key in data){
  //             const review = {
  //                 id: key,
  //                 ...data[key]
  //             }

  //             reviews.push(review);
  //         };

  //         //console.log(reviews);

  //         //revese array so that the latest one I create is the first one.

  //         SetIsLoading(false);
  //         SetLoadedReviews(reviews.reverse());
  //     }); 
  // }, []);

  const authCtx = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  
  const { isLoading: IsLoading, error, sendRequest: fetchReviews } = useHttp();

  useEffect(() => {
    const transformReviews = (reviewObj) => {
      const loadedReviews = [];
      //console.log(reviewObj);
      for (const key in reviewObj) {
        const quoteObj = {
          id: key,
          ...reviewObj[key]
        };
    
        loadedReviews.push(quoteObj);
      }

      setReviews(loadedReviews.reverse());
    }

    fetchReviews({url: 'https://ooglandish-default-rtdb.firebaseio.com/Reviews.json'},
    transformReviews);
  }, [fetchReviews]);

  return (
      <div className = "MainDiv" 
            onScroll = {OnScroll}
            ref = {DIV1}>
      <ScrollToTop refProp = {DIV1}/>
      <Switch>
        <Route path = '/' exact>
          <FrontPage loadedReviews = {reviews}
                      setLoadedReviews = {setReviews}
                      isLoading = {IsLoading}
                      GoingUp = {goingUp}/>
        </Route>
        {/*<Route path = '/detail-review/:reviewData+'>)*/}
        <Route path = '/detail-review/:reviewData'>
          <DetailPage loadedReviews = {reviews} 
                      isLoading = {IsLoading}
                      setLoadedReviews = {setReviews}
                      GoingUp = {goingUp}
                      refProp = {DIV1}
                      />
        </Route>
        {!authCtx.isLoggedIn &&<Route path='/auth'>
          <AuthPage GoingUp = {goingUp}/>
        </Route>}
        {authCtx.isLoggedIn ? <Route path='/profile'>
          <Profile GoingUp = {goingUp}/>
        </Route> : <Redirect to = "/auth"/>}
        <Route path = "*">
          {/*TO be style and modularized */}
          <p> Not Found!</p>
        </Route>
      </Switch>
      </div>
  );
}

export default App;