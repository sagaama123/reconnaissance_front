import React from 'react' ; 
export const Fonctionnement =()=>{
    return(
        
   <div>
        <div id="fon" className=" container pt-5">
          <div className=" row g-5 pt-5">
            <div className="fonc col-lg-6 align-self-center text-center text-lg-start mb-lg-5 red-text">
            <div className="btn btn-sm border rounded-pill text-blue px-3 mb-3">Fonctionnement</div>
              <h1 className="display-4  mb-4 animated slideInRight text-blue">Entièrement automatisé</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                <h1 className='example' >
                capturer des images à partir de la caméra d'un ordinateur  implique que l'utilisateur sélectionne l'option de vérification par caméra
                autorise l'accès à la caméra de son appareil, capture une image de sa pièce d'identité en temps réel
                </h1>
      
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
            <video  class="video" width="90%" height="90%" loop muted autoplay="autoplay">
              <source  src="https://shuftipro.com/wp-content/uploads/Home-page-SEC-1-1.mp4" type="video/mp4" />
          </video>
      
            </div>
          </div>
        </div>
        
        <div className=" container pt-5">
        <div className="row g-5 pt-5">
          <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5 red-text">
          
            <img className="img-re" src="assets/img/re-faciale.jpg"  />
      
          
          </div>
          <div className="recon col-lg-6 align-self-end text-center text-lg-end">
         
            <h1 className="display-4  mb-4 animated slideInLeft text-blue">reconnaissance facile</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
              <h1 className='example black-text' >
             
                La reconnaissance faciale intégrée à l'intelligence artificielle exploite des modèles d'apprentissage automatique
                entraînés sur de vastes ensembles de données pour extraire des caractéristiques uniques des visages, permettant ainsi une identification précise et robuste des individus.
              </h1>
    
              </ol>
            </nav>
    
          </div>
        </div>
      </div>
      </div>
      
      
    )
}