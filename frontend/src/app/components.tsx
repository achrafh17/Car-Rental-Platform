const Window = () => {
  return (
    <div className="signin-confirmation">
      <div className="signin-confirmation-card">
        <div className="success-icon-container">
          <img
            src="/check_circle_24dp_34F226_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Succès"
          />
        </div>
        <h2 id="confirmation-title" className="confirmation-title">
          Succès!
        </h2>
        <p className="confirmation-text">
          Votre compte a été créé avec succès.
        </p>
      </div>
    </div>
  );
};
export default Window;
