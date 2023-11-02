import React from 'react'

const MapComponent = () => {
    
    return (
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3422.143807265633!2d18.059626919688146!3d59.335977620237976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTnCsDIwJzExLjYiTiAxOMKwMDMnNDMuOSJF!5e0!3m2!1ssv!2sse!4v1695733588761!5m2!1ssv!2sse"
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    );
  };
  
  export default MapComponent;