export default function Posts(){
    return(
        <div class="posts">
            {infoPost.map(Post)}
        </div>
    );
}


function Post(info) {
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                <img src={`assets/img/${info.nameUser}.svg`}/>
                {info.nameUser}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img src={info.conteudo} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                    {namesIcon.map(nameIcon => <ion-icon name={nameIcon}></ion-icon>)}
                    </div>
                    <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={info.img} />
                    <div class="texto">
                        Curtido por <strong>{info.seguidor}</strong> e <strong>outras {info.curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
        
    );
}


const namesIcon = [
    "heart-outline",
    "chatbubble-outline",
    "paper-plane-outline"

]

const infoPost =[
    {
        nameUser:'meowed',
        img:'assets/img/respondeai.svg',
        conteudo:'assets/img/gato-telefone.svg',
        seguidor:'respondeai',
        curtidas:'101.523'
    },
    {
        nameUser:'barked',
        img:'assets/img/adorable_animals.svg ',
        conteudo:'assets/img/dog.svg',
        seguidor:'adorable_animals',
        curtidas:'99.159'
    }
    
]