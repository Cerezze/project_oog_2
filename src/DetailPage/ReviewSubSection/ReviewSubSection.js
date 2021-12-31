import './ReviewSubSection.css';
import ReviewSectionDividerAsset from "../../Designs_and_Flow/basic_designs/ReviewSectionDivider.png";
import ReviewParticle from "../ReviewParticle/ReviewParticle";

const ReviewSubSection = (props) => {
    //console.log(props.Title);
    //console.log(props.SubCategory);
    return(
        <div className = "ReviewSubSection">
            <div className = "ReviewSubSectionEntry">
                <img className = "ReviewSectionDividerAsset" src = {ReviewSectionDividerAsset}/>
                <p className = "ReviewSectionEntryTitle">{props.Title}</p>
                <p className = "ReviewSectionEntryBody">{props.Body}</p>
            </div>
            {/* One Component That holds ParticleListTitle and affiliate ex: Playermechachics, images etc..*/}
            {props.SubCategory.map((i) =>{
                //console.log(i);
                return <ReviewParticle key = {i.Title} 
                                       SubCategory = {i}/>;
            })}
        </div>
    );
}

export default ReviewSubSection;