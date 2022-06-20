import "./App.css";
import FrontPage from './containers/FrontPageMain/FrontPageMain';
//import DetailPage from './containers/DetailPageMain/DetailPageMain';
import { Route, Switch, Redirect, useLocation} from 'react-router-dom';
import {useState, useEffect, useContext, useRef} from 'react';
import useHttp from "./usehttp/usehttp";
//import AuthPage from './containers/LogInMain/LogInMain';
//import Profile from './containers/UserProfileMain/UserProfileMain';
import AuthContext from './store/auth-context';
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import React, { Suspense } from 'react';

const DetailPage = React.lazy(() => import('./containers/DetailPageMain/DetailPageMain'));
const AuthPage = React.lazy(() => import('./containers/LogInMain/LogInMain'));
const Profile = React.lazy(() => import('./containers/UserProfileMain/UserProfileMain'));

function App() {
  const prevScrollY = useRef(0);
  const DIV1 = useRef(null);
  const [goingUp, setGoingUp] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const OnScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;

    setScrollPos(currentScrollY);
  };

  const authCtx = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [lreviews, setLreviews] = useState([]);
  
  const { isLoading: IsLoading, error, sendRequest: fetchReviews } = useHttp();

  useEffect(() => {
    const transformReviews = (reviewObj) => {
      const loadedReviews = [];
      const staticReviews = [];
      for (const key in reviewObj) {
        const quoteObj = {
          id: key,
          ...reviewObj[key]
        };
    
        loadedReviews.push(quoteObj);
        staticReviews.push(quoteObj);
      }

      setReviews(loadedReviews.reverse());
      setLreviews(staticReviews.reverse());
    }

    fetchReviews({url: 'https://ooglandish-default-rtdb.firebaseio.com/Reviews.json'},
    transformReviews);
  }, [fetchReviews]);
  //console.log("lreviews: ", lreviews);
  //console.log("reviews: ", reviews);
  
  return (
      <div className = "MainDiv" 
            onScroll = {OnScroll}
            ref = {DIV1}>
      <ScrollToTop refProp = {DIV1}/>
      <Suspense fallback = {<p>LOADING...</p>}>
        <Switch>
          <Route path = '/' exact>
            <FrontPage loadedReviews = {reviews}
                        setLoadedReviews = {setReviews}
                        isLoading = {IsLoading}
                        GoingUp = {goingUp}
                        refProp = {scrollPos}
                        lreviews = {lreviews}/>
          </Route>
          <Route path = '/detail-review/:reviewData/:reviewIdx'>
            <DetailPage loadedReviews = {reviews} 
                        isLoading = {IsLoading}
                        setLoadedReviews = {setReviews}
                        GoingUp = {goingUp}
                        refProp = {DIV1}
                        refProp2 = {scrollPos}
                        />
          </Route>
          {!authCtx.isLoggedIn &&<Route path='/auth'>
            <AuthPage GoingUp = {goingUp}/>
          </Route>}
          {authCtx.isLoggedIn ? <Route path='/profile'>
            <Profile GoingUp = {goingUp}/>
          </Route> : <Redirect to = "/auth"/>}
          <Route path = "*">
            <p> Not Found!</p>
          </Route>
        </Switch>
      </Suspense>
      </div>
  );
}

export default App;