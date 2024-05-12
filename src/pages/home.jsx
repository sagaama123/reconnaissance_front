import React from 'react';

import { Navbar } from './Navbar';
import { Service } from './Service';
import { Caracteristique } from './Caracteristiques';
import { Solution } from './Solution';
import { Fonctionnement } from './Fonctionnement';

import { Footer } from './Footer';



class Home extends React.Component{
    render(){
        return(

            <div>
            

       
 
            {/* navbar Start */}
  <Navbar></Navbar>
    {/* navbar end */}
   {/* Service Start */}

<Service></Service>
{/* Service end */}
{/* full screen search Start */}

{/* full screen search Start */}



    {/* Caracteristique Start */}
<Caracteristique></Caracteristique>
{/* Caracteristique end */}
{/* Solution Start */}
<Solution></Solution>
    {/* Solution end */}


{/* Fonctionnement start */}
<Fonctionnement></Fonctionnement>
{/*fonctionnement end*/}



{/* Footer Start */}
<Footer></Footer>    
    
 
            </div>
        )
    }
}
export default Home ;