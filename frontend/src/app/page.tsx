import Link from "next/link";
export default function Home() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Découvrez le Luxe <span className="accent">Automobile</span>
          </h1>
          <p>
            Réservez votre véhicule premium et vivez une expérience de conduite
            inoubliable
          </p>
          <div className="hero-buttons">
            <Link href="/cars" className="btn btn-primary">
              Voir nos véhicules
            </Link>
            <Link href="/about" className="btn btn-secondary">
              À propos de nous
            </Link>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <h2 className="section-title">Pourquoi nous choisir ?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚗</div>
              <h3>Véhicules Premium</h3>
              <p>
                Notre flotte comprend uniquement des véhicules haut de gamme
                récents et parfaitement entretenus.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Prix Transparents</h3>
              <p>
                Pas de frais cachés, nos tarifs comprennent l'assurance et
                l'assistance routière.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3>Réservation Flexible</h3>
              <p>
                Modifiez ou annulez votre réservation jusqu'à 48h avant le début
                de la location.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⏱️</div>
              <h3>Service Rapide</h3>
              <p>
                Récupérez votre véhicule en moins de 15 minutes grâce à notre
                processus simplifié.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="featured-cars">
        <div className="container">
          <h2 className="section-title">Nos Véhicules Populaires</h2>
          {/* <div className="car-showcase">
            {loading ? (
              <div className="loading">Chargement des véhicules...</div>
            ) : (
              featuredCars.map((car) => (
                <div className="featured-car-card" key={car._id}>
                  <div className="car-image-container">
                    <img
                      src={car.imageUrl || "/api/placeholder/400/300"}
                      alt={`${car.marque} ${car.model}`}
                      className="car-image"
                    />
                    <div className="car-category-badge">{car.category}</div>
                  </div>
                  <div className="car-details">
                    <h3 className="car-name">
                      {car.marque} {car.model}
                    </h3>
                    <p className="car-price">
                      <span className="price-amount">{car.price}€</span>
                      <span className="price-period">/ jour</span>
                    </p>
                    <Link href={`/car/${car._id}`} className="view-details-btn">
                      Voir les détails
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div> */}
          <div className="view-all-container">
            <Link href="/cars" className="view-all-btn">
              Voir tous nos véhicules
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">Comment ça marche</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Choisissez votre véhicule</h3>
              <p>
                Parcourez notre sélection et trouvez le véhicule qui vous
                convient.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Réservez en ligne</h3>
              <p>
                Sélectionnez vos dates et complétez votre réservation en
                quelques clics.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Récupérez le véhicule</h3>
              <p>
                Présentez-vous à notre agence et prenez possession de votre
                véhicule.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à prendre la route ?</h2>
            <p>
              Réservez dès maintenant et profitez de notre flotte de véhicules
              premium
            </p>
            <Link href="/cars" className="cta-button">
              Réserver maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
