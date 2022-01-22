import './stylesheets/Container.css'

function Container(props){
    const classes = props.ClassName + " nav";
    return(
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Container;