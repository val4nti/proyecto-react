const MapEmbed = () => {
  return (
    <div className="ratio ratio-16x9">
      <iframe
        src="https://www.google.com/maps?q=santiago%20chile&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
