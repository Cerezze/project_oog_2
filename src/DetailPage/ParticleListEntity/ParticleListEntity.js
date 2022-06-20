import "./ParticleListEntity.css";

const ParticleListEntity = (props) => {
    return(
        <div>
            {props.List ?<img className = "ParticlDivider" src = {props.Divider}/>: ""}
            {props.List ? props.List.map(i => {
                return(
                    <div key = {i} className = "ParticleList">
                        <img className = "ParticleListImage" src = {props.Image}/>
                        <div className = "ParticleListBlurb">{i}</div>
                    </div>
                );
            }): ""}
        </div>
        
    );
}

export default ParticleListEntity;