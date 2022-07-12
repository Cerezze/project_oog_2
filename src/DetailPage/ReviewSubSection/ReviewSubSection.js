import './ReviewSubSection.css';
import ReviewSectionDividerAsset from "../../Designs_and_Flow/basic_designs/ReviewSectionDivider.png";
import ReviewParticle from "../ReviewParticle/ReviewParticle";
import { useState } from 'react';

const ReviewSubSection = (props) => {
    const [picUrl, setPicUrl] = useState('');
    const [imageToggle, setImageToggle] = useState(false);

    const ImageBlowUp = (id) => {
            setPicUrl(id.Image);
            setImageToggle(true);
    }
    return(
        <div>
            <div className = "ReviewSubSection">
                <div className = "ReviewSubSectionEntry">
                    <img className = "ReviewSectionDividerAsset" src = {ReviewSectionDividerAsset}/>
                    <p className = "ReviewSectionEntryTitle">{props.Title}</p>
                    <p className = "ReviewSectionEntryBody">{props.Body}</p>
                </div>
                {/* One Component That holds ParticleListTitle and affiliate ex: Playermechachics, images etc..*/}
                {props.SubCategory?props.SubCategory.map((i, index) =>{
                    return <ReviewParticle key = {i.Title} 
                                        SubCategory = {i}
                                        idx = {index}
                                        ImageBlowUp = {ImageBlowUp}
                                        picUrl = {picUrl}
                                        setPicUrl = {setPicUrl}
                                        setImageToggle = {setImageToggle}
                                        imageToggle = {imageToggle}/>;
                }): ""}
            </div>

            {/* <div className = "RSSMob">
                <div className = "ReviewSubSectionEntry">
                    <img className = "ReviewSectionDividerAsset" src = {ReviewSectionDividerAsset}/>
                    <p className = "ReviewSectionEntryTitle">{props.Title}</p>
                    <p className = "ReviewSectionEntryBody">{props.Body}</p>
                </div>
            </div> */}
        </div>
    );
}

export default ReviewSubSection;