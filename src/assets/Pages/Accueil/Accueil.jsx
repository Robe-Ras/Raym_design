import './Accueil.css';


const Accueil = () => {
  return (
    <div className="wrapper">
      <main>
        <section className="accueil-section">
          <div className="content">
            <h1>On Road</h1>
          </div>
        </section>
        <section className="accueil-section">
          <div className="content">
            <h1>Off Road</h1>
          </div>
        </section>
        <section className="accueil-section">
          <div className="content">
            <h1>Hybrid Elite</h1>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Accueil;
