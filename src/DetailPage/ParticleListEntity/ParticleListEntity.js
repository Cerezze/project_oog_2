import "./ParticleListEntity.css";

//as props, this component will recieve an image and a text blurb.

const ParticleListEntity = (props) => {
    return(
        <div>
            <img className = "ParticlDivider" src = {props.Divider}/>
            {props.List.map(i => {
                return(
                    <div key = {i} className = "ParticleList">
                        <img className = "ParticleListImage" src = {props.Image}/>
                        <div className = "ParticleListBlurb">{i}</div>
                    </div>
                );
            })}
                        {/* <ParticleListEntity Image = {props.ListAsset} Blurb = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
                        <ParticleListEntity Image = {props.ListAsset} Blurb = {" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
                        <ParticleListEntity Image = {props.ListAsset} Blurb = {"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/> */}
        </div>
        // <div>
        //     <img className = "ParticleListImage" src = {props.Image}/>
        //     <p className = "ParticleListBlurb">{props.Blurb}</p>
        // </div>
    );
}

export default ParticleListEntity;