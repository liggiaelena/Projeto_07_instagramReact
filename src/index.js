import ReactDOM from 'react-dom';

import Navbar from "./navbar"
import Corpo from "./corpo"
import FundoMobile from "./fundoMobile"

function Root(){
    return(
        <div>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>
        
    );
}

ReactDOM.render(<Root/>, document.querySelector(".root"));