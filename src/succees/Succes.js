import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import './succes.css'; // Import CSS file

function Success() {
  useEffect(() => {
    Swal.fire({
      title: "Match with success!",
      text: "Thanks customer",
      icon: "success",
      confirmButtonText: "OK", // Customize the text for the OK button
    }).then((result) => {
      if (result.isConfirmed) {
        // If OK button is clicked, navigate to '/home' using window.location.href
        window.location.href = '/';
      }
    });
  }, []);

  return (
    <div className="backgroundS">
      {/* You can add additional content if needed */}
    </div>
  );
}

export default Success;