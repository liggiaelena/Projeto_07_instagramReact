export default function Sidebar(){
    return(
    <div class="sidebar">
        <Usuario info={usuario} />

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {sugestoes.map((sugestao)=> <Sugestao info={sugestao} />)}
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
    );
}
function Usuario(props) {
  return(
     <div class="usuario">
          <img src={props.info.img} />
          <div class="texto">
            <strong>{props.info.nome}</strong>
            {props.info.subnome}
          </div>
        </div>
  );
 
}

function Sugestao(props) {
    return(
      <div class="sugestao">
        <div class="usuario">
          <img src={props.info.img} />
          <div class="texto">
            <div class="nome">{props.info.nome}</div>
            <div class="razao">{props.info.razao}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    );  
}
const usuario = 
  {
    nome: 'catanacomics',
    subnome:'Catana',
    img:'assets/img/catanacomics.svg'
  };

const sugestoes = [
  {
    nome:'bad.vibes.memes',
    img:'assets/img/bad.vibes.memes.svg',
    razao:'Segue você'
  },
  {
    nome:'chibirdart',
    img:'assets/img/chibirdart.svg',
    razao:'Segue você'
  },
  {
    nome:'razoesparaacreditar.',
    img:'assets/img/razoesparaacreditar.svg',
    razao:'Novo no Instagram'
  },
  {
    nome:'adorable_animals',
    img:'assets/img/adorable_animals.svg',
    razao:'Segue você'
  },
  {
    nome:'smallcutecats',
    img:'assets/img/smallcutecats.svg',
    razao:'Segue você'
  }
];