import "./PictureView.css";

const PictureView = (props) => {
    const buttonClickHandler = () =>{
        props.setImageToggle(false);
    }
    return(
        <div class = "bigImageMain">
            <div class = "exit">
                <button onClick = {buttonClickHandler}>x</button>
            </div>
            <div class = 'bigImage'>
                <img src = {props.picUrl}/>
            </div>
        </div>
    );
}

export default PictureView;