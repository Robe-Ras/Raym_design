import './Accueil.css';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

const Accueil = () => {
    return (
        <div>

            {/* #### BANNER #### */}
            <div className="banner p-6 py-12 text-black mx-8" style={{ background: 'linear-gradient(to right, palegreen, skyblue, turquoise, skyblue, palegreen)'}}>
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-5xl tracking-tighter font-bold">Soldes d&apos;été
                            <br className="sm:hidden" /> -30% sur les VTT
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <h4>Livraison offerte avec le code :</h4>
                            <span className="font-bold text-lg">RAYMFREE</span>
                        </div>
                        <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-white border-black">Je fonce !</a>
                    </div>
                </div>
            </div>
            {/* #### END BANNER #### */}

            {/* #### Hero Categories #### */}
            <main>
                <section className="accueil-section mb-10">
                    <div className="content">
                        <button className="border border-white text-white text-2xl font-chakra-petch mb-4 p-4 rounded-md button-hover">
                            ON ROAD
                        </button>
                    </div>
                </section>
                <section className="accueil-section mb-10">
                    <div className="content">
                        <button className="border border-white text-white text-2xl font-chakra-petch mb-4 p-4 rounded-md button-hover">
                            OFF ROAD
                        </button>
                    </div>
                </section>
                <section className="accueil-section mb-10">
                    <div className="content">
                        <button className="border border-white text-white text-2xl font-chakra-petch mb-4 p-4 rounded-md button-hover">
                            HYBRID
                        </button>
                    </div>
                </section>
            </main>
            {/* #### END Hero Categories #### */}

            {/* #### Jumbotron render #### */}
            <Jumbotron />
            {/* #### END Jumbotron #### */}

        </div>
    );
};

export default Accueil;
