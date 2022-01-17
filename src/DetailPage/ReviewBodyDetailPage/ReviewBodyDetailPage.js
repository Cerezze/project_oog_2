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
                    <p className = "OveralSummaryBody">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>

                <ReviewContainer DetailReview = {props.DetailReview.DetailReview}/>
                <OverallScore/>
            </div>
        </div>
    );
}

export default ReviewBodyDetailPage;