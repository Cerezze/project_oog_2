import "./ReviewParticle.css";
import ParticleListEntity from '../ParticleListEntity/ParticleListEntity';
import NegativeParticleDivider from '../../Designs_and_Flow/basic_designs/ReviewParticleNegativeDivider.png';
import PositiveParticleDivider from '../../Designs_and_Flow/basic_designs/ReviewParticlePositiveDivider.png';
import NegativeParticleListAsset from "../../Designs_and_Flow/basic_designs/ParticleListBulletPointYellow.png";
import PositiveParticleListAsset from "../../Designs_and_Flow/basic_designs/ParticleListBulletPointRed.png";

const ReviewParticle = (props) => {

    // let arr = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    // "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    // "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    // ];
    // let arr1 = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    // "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    // ];

    //console.log(props.SubCategory);

    return(
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
                     {/*Two divs with one div containing them pros and cons*/}
                </div>
                <div className = "ReviewImageMobile">
                    ReviewImageMobile
                </div> 
            </div>
    );
}

export default ReviewParticle;