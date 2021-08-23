export default function Sidebar(){
    return(
    <div class="sidebar">
        <div class="usuario">
          <img src="assets/img/catanacomics.svg" />
          <div class="texto">
            <strong>catanacomics</strong>
            Catana
          </div>
        </div>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {sugestoes.map(Sugestao)}
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

function Sugestao(info) {
    return(
      <div class="sugestao">
        <div class="usuario">
          <img src={info.img} />
          <div class="texto">
            <div class="nome">{info.nome}</div>
            <div class="razao">{info.razao}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    );  
}

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
]