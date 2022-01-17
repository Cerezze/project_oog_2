import "./ParticleListEntity.css";

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
        </div>
        
    );
}

export default ParticleListEntity;