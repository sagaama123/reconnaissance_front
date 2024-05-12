import React from "react";
export const Footer =()=>{
    return(
        <div id="foo" className="container-fluid bg-dark text-white-50 footer pt-5">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
        <a href="index.html" className="d-inline-block mb-3">
          <h1 className="text-white">Validcheck<span className="text-primary">.</span>ID</h1>
        </a>
        <p className="mb-0">ValidCheckID est une plateforme en ligne sécurisée et fiable qui permet la vérification rapide et précise des pièces
         d'identité. Que vous soyez une entreprise cherchant à valider l'identité de vos clients ou un individu souhaitant prouver son identité en ligne,</p>
      </div>
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
        <h5 className="text-white mb-4">Get In Touch</h5>
        <p><i className="fa fa-map-marker-alt me-3" />trocadero,sousse</p>
        <p><i className="fa fa-phone-alt me-3" />+99456879</p>
        <p><i className="fa fa-envelope me-3" />info@ValidCheck.com</p>
        <div className="d-flex pt-2">
          <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
          <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
          <a className="btn btn-outline-light btn-social" href><i className="fab fa-instagram" /></a>
          <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
    
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
        <h5 className="text-white mb-4">Our Services</h5>
        <li >Verification identité</li>
        <li >securité</li>
        <li >detection </li>
        <li >Intégration de l'AP</li>                                                                
       
      </div>
    </div>
  </div>
  
</div>
    )
}