import './ReviewBodyDetailPage.css';
import ReviewContainer from '../ReviewContainer/ReviewContainer';
import OverallScore from "../OverallScore/OverallScore";
import OverallSummaryAsset from "../../Designs_and_Flow/basic_designs/OverallSummary.png";

const ReviewBodyDetailPage = (props) =>{

    return(
        <div className = "BodyDetailPage">

            <div className = "DetailReview">
                    <h1 className = "ReviewTitle">
                        {props.DetailReview.Title}
                    </h1>
                <div className = "OveralPanel">
                    <p className = "OveralSummaryTitle">Overall Summary</p>
                    <p className = "OveralSummaryBody">{props.DetailReview.overallBlurb}</p>
                </div>

                <ReviewContainer DetailReview = {props.DetailReview.DetailReview}/>
                <OverallScore score = {props.DetailReview.score}
                              overallScore = {props.DetailReview.overallScore}/>
            </div>
        </div>
    );
}

export default ReviewBodyDetailPage;