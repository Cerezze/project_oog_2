import "./ReviewContainer.css";
import ReviewSubSection from "../ReviewSubSection/ReviewSubSection";
import OverallScore from "../OverallScore/OverallScore";

const ReviewContainer = (props) =>{
    //console.log(props.DetailReview);
    return(
        <div className = "ReviewContainer">
            <p className = "ReviewContainerTitle">Full Detailed Review</p>
            <div className = "ReviewSection">
                {/*Each of these will get the review subsection title and all of the affiliate info*/}
                {props.DetailReview.map((i)=>{
                    //console.log(i.Title);
                    return <ReviewSubSection key = {i.Title}
                                            SubCategory = {i.SubCategory}
                                            Title = {i.Title}
                                            Body = {i.Body}/>
                })}
                {/*<OverallScore/>*/}
                {/* <ReviewSubSection/>
                <ReviewSubSection/>
                <ReviewSubSection/> */}
            </div>
        </div>
    );
}

export default ReviewContainer;