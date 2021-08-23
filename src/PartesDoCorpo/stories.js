export default function Stories(){
    return (
        <div class="stories">
           {nameStories.map(name)}
           
           <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
        
    );
}

function name(name) {
    return(
        <div class="story">
        <div class="imagem">
                <img src={`assets/img/${name}.svg`} />
        </div>
        <div class="usuario">
                {name}
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