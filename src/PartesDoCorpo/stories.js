export default function Stories(){
    return (
        <div class="stories">
           {nameStories.map((name)=> <Name info={name}/>)}

           <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
        
    );
}

function Name(props) {
    return(
        <div class="story">
        <div class="imagem">
                <img src={`assets/img/${props.info}.svg`} />
        </div>
        <div class="usuario">
                {props.info}
        </div>
    </div>
    );
    
}

const nameStories=[
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet"

]