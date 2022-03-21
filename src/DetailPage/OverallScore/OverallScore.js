import "./OverallScore.css";
import OverallScoreAsset from "../../Designs_and_Flow/basic_designs/OverallScore.png";

const OverallScore = () => {
    return(
        <div className = "OverallScore">
            <div className = "OverallScoreText">
                <div className = "OverallScoreBlurb">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                <div className = "OverallScoreRating">100</div>
            </div>
        </div>
    );
}

export default OverallScore;