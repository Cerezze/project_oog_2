import "./OverallScore.css";
import OverallScoreAsset from "../../Designs_and_Flow/basic_designs/OverallScore.png";

const OverallScore = (props) => {
    return(
        <div >
            <div className = "OverallScore">
                <div className = "OverallScoreText">
                    <div className = "OverallScoreBlurb">{props.overallScore ? props.overallScore: ""}</div>
                    <div className = "OverallScoreRating">{props.score ? props.score: ""}</div>
                </div>
            </div>
        </div>
    );
}

export default OverallScore;