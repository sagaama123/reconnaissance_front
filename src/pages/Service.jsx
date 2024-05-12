import React from 'react';
export const Service =()=>{
    return (
      <div className=' feature'>
        <div className="container-fluid pt-5  ">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-blue mb-4 animated slideInRight Service">nos Services</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                <h1 class="paragraphe">
                La vérification des identités est essentielle pour prévenir les attaques de fraudeurs tout en minimisant les obstacles pour les clients légitimes. 
                Stripe Identity offre une solution simple et professionnelle pour confirmer automatiquement l'identité des utilisateurs du monde entier
                </h1>
      
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
            <video  class="videos" width="80%" height="80%" loop muted autoplay="autoplay">
              <source  src="https://static-content.regulaforensics.com/Landing_pages/Common_files/Visuals/Visual Doc Video_c3 (1).mp4" type="video/mp4" />
          </video>
      
            </div>
          </div>
        </div>
        <div className="modal fade" id="searchModal" tabIndex={-1}>
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content" style={{background: 'rgba(20, 24, 62, 0.7)'}}>
      <div className="modal-header border-0">
        <button type="button" className="btn btn-square bg-white btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body d-flex align-items-center justify-content-center">
        <div className="input-group" style={{maxWidth: 600}}>
          <input type="text" className="form-control bg-transparent border-light p-3" placeholder="Type search keyword" />
          <button className="btn btn-light px-4"><i className="bi bi-search" /></button>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
    )
}