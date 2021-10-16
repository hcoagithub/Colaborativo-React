import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Jumbotron from './Jumbotron';
import {data} from './data';

import './style.css';

function App (){
    return (<>
    <Navbar/>
    
   <div className="container">

<div className="row">
<Jumbotron/>
</div>
       <div className= "row pt-4">
    <div className="col-md-3 mb-4">
    <Card imgenAlt= {data[0].imgenAlt} imgenUrl= {data[0].imgenUrl} title={data[0].title} cardBody={data[0].cardBody} btnLabel={data[0].btnLabel}/>
    </div>      
    <div className="col-md-3 mb-4">
    <Card imgenAlt= {data[1].imgenAlt} imgenUrl= {data[1].imgenUrl} title={data[1].title} cardBody={data[1].cardBody} btnLabel={data[1].btnLabel}/>
    </div><div className="col-md-3 mb-4">
    <Card imgenAlt= {data[2].imgenAlt} imgenUrl= {data[2].imgenUrl} title={data[2].title} cardBody={data[2].cardBody} btnLabel={data[2].btnLabel}/>    
    
    </div><div className="col-md-3 pb-4">
    <Card imgenAlt= {data[3].imgenAlt} imgenUrl= {data[3].imgenUrl} title={data[3].title} cardBody={data[3].cardBody} btnLabel={data[3].btnLabel}/>
    </div>

    
    
    </div>
    </div> 
    <div className="footer">Copyright &copy; Your Website 2019</div>
    </>);
}

export default App;