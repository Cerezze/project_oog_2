import "./ReviewContainer.css";
import ReviewSubSection from "../ReviewSubSection/ReviewSubSection";
import OverallScore from "../OverallScore/OverallScore";

const ReviewContainer = (props) =>{

    return(
        <div className = "ReviewContainer">
            <p className = "ReviewContainerTitle">Article</p>
            <div className = "ReviewSection">
                {/*Each of these will get the review subsection title and all of the affiliate info*/}
                {props.DetailReview.map((i)=>{
                    return <ReviewSubSection key = {i.Title}
                                            SubCategory = {i.SubCategory ? i.SubCategory : ""}
                                            Title = {i.Title ? i.Title : ""}
                                            Body = {i.Body ? i.Body : ""}/>
                })}
            </div>
        </div>
    );
}

export default ReviewContainer;