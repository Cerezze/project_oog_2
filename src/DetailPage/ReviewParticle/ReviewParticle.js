import "./ReviewParticle.css";
import ParticleListEntity from '../ParticleListEntity/ParticleListEntity';
import NegativeParticleDivider from '../../Designs_and_Flow/basic_designs/ReviewParticleNegativeDivider.png';
import PositiveParticleDivider from '../../Designs_and_Flow/basic_designs/ReviewParticlePositiveDivider.png';
import NegativeParticleListAsset from "../../Designs_and_Flow/basic_designs/ParticleListBulletPointYellow.png";
import PositiveParticleListAsset from "../../Designs_and_Flow/basic_designs/ParticleListBulletPointRed.png";

const ReviewParticle = (props) => {

    return(
        <div>
            <div className = "ReviewParticle">
                <div className = "ReviewParticleImage">
                    <img className = "DynamicImage" src = {props.SubCategory.Image} alt="IMAGE NOT HERE" />
                </div>
                 <div className = "ReviewParticleText">
                    <p className = "ParticleTitle">
                        {props.SubCategory.Title}
                    </p>
                    <ParticleListEntity Divider = {PositiveParticleDivider} 
                                        Image = {PositiveParticleListAsset} 
                                        List = {props.SubCategory.Pros}/>
                    <ParticleListEntity Divider = {NegativeParticleDivider} 
                                        Image = {NegativeParticleListAsset} 
                                        List = {props.SubCategory.Cons}/>
                </div>
            </div>
            <div className = "ReviewImageMobile">
                <p className = "ParticleTitle">
                    {props.SubCategory.Title}
                </p>
                <ParticleListEntity Divider = {PositiveParticleDivider} 
                                    Image = {PositiveParticleListAsset} 
                                    List = {props.SubCategory.Pros}/>
                <ParticleListEntity Divider = {NegativeParticleDivider} 
                                    Image = {NegativeParticleListAsset} 
                                    List = {props.SubCategory.Cons}/>
                <div className = "ReviewParticleImage">
                    <img className = "DynamicImage" src = {props.SubCategory.Image} alt="IMAGE NOT HERE" />
                </div>
            </div> 
        </div>
    );
}

export default ReviewParticle;