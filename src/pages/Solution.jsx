import React from "react";
export const Solution =()=>{
    return(
    <div id="sol" class="  container-fluid py-5">
        <div class="container py-5">
            <div class=" text-center text-lg-start">
                
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="btn btn-sm border rounded-pill text-black px-3 mb-3">Solutions</div>
                    <h2 className="text-black mb-4">Vérification de l'authenticité des pièces </h2>
                    <p>Intégrez des outils de reconnaissance faciale et d'analyse d'image pour vérifier
                         l'authenticité des pièces téléchargées. Ces outils peuvent détecter les altérations, les faux et les pièces expirées.</p>
                    <h2 className="text-black mb-4">Comparaison avec une base de données </h2>
                    <p> Vous pouvez comparer les informations extraites des pièces d'identité avec une base de données pour vérifier leur validité. Assurez-vous de respecter
                         les lois et réglementations sur la protection des données lors de l'utilisation de telles bases de données.</p>
                         <h2 className="text-black mb-4">Mises à jour régulières </h2>
                    <p>Tenez votre site web à jour avec les dernières technologies et les meilleures pratiques de sécurité pour garantir
                         la fiabilité continue du processus de vérification.</p>
                    
                </div>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
            <img className="img-ra" src="assets/img/Scan.png"  />
                </div>
        </div>
        
    </div>
    
    )
}