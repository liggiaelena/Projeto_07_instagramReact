export default function Stories(){
    return (
        <div class="stories">
            <div class="story">
                <div class="imagem">
                    {nameStories.map(nameStory => <img src= `assets/img/{nameStory}.svg` />)}
                    <img src="assets/img/9gag.svg" />
                </div>
                <div class="usuario">
                    9gag
                </div>
            </div>

            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
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