

export default function FundoMobile(){
    return(
    <div class="fundo-mobile"> 
      {namesIcon.map(nameIcon => <ion-icon name={nameIcon}></ion-icon>)}
  </div>
  );
}

const namesIcon = [
  "home",
  "search-outline",
  "add-circle-outline",
  "heart-outline",
  "person-outline"
]