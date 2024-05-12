import React from 'react'
export const Caracteristique =()=>{
    
    return(
    <div id="car" className=" carac feature pt-5">
  
  <div className="container pt-1">
    <div className="row g-5">
      <div className="col-lg-6  mb-md-5 pb-md-5 " data-wow-delay="0.3s">
        <div className="btn btn-sm border rounded-pill text-blue px-3 mb-3">Caracteristiques</div>
        <h2 className="text-black mb-4">Sécurité des données</h2>
        <p2 class="p2"> Le site doit mettre en place des mesures de sécurité robustes pour protéger les données personnelles des utilisateurs,
         telles que le cryptage des données, l'authentification à deux facteurs, la conformité aux normes de sécurité</p2>
         <h2 className="text-black mb-4">Suivi et audit des activités</h2>
        <p2 class="p2">  Le site devrait enregistrer toutes les activités liées à la vérification des pièces d'identité,
         les vérifications, les erreurs, etc., pour des raisons de traçabilité .</p2>
         <h2 className="text-black mb-4">Fiabilité et précision</h2>
        <p2 class="p2">   Assurez-vous que le système de vérification est fiable et précis dans la détection des pièces d'identité authentiques et dans 
        la prévention des fraudes. Effectuez des tests rigoureux pour garantir la précision des résultats et minimisez les faux positifs et les faux négatifs.</p2>
        <div class="text">
        <h2 className="text-black mb-4">Personnalisation et intégration</h2>
        <p2> Offrez des options de personnalisation pour permettre aux entreprises d'adapter le processus de vérification à leurs besoins spécifiques.
         Assurez-vous également que le site peut être facilement intégré à d'autres systèmes et applications via des API ou des intégrations tierces.</p2>
         <h2 className="text-black mb-4">Technologies de pointe</h2>
        <p2 > Utilisez des technologies avancées telles que la reconnaissance faciale et d'autres techniques
         d'intelligence artificielle pour automatiser le processus de vérification et garantir son exactitude.</p2>
         <h2 className="text-black mb-4">Interface utilisateur conviviale</h2>
        <p2  > Concevez une interface utilisateur intuitive et conviviale qui guide les utilisateurs à travers le processus de vérification d'identité
         de manière claire et facile à comprendre. Utilisez des instructions claires et des indicateurs visuels pour aider les utilisateurs .</p2>
         </div>
      </div>
    </div>
  </div>
</div>

    )
}