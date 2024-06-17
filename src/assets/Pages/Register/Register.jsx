
const Register = () => {
  return (
    <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm border border-black rounded-lg bg-beige">
                <div className="bg-black p-4 rounded-t-lg">
                    <h2 className="text-center mt-8  mb-4 text-4xl font-bold leading-9 tracking-tight text-white">
                        Enregistrez-vous
                    </h2>
                </div>
                <div className="p-4">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm mt-9 font-medium leading-6 text-black"
                            >
                                Adresse email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-black"
                                >
                                    Mot de passe
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-black"
                                >
                                    Confirmez le mot de passe
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center mt-9 rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FF0000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Valider
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Déjà client ? 
                        <a
                            href="#"
                            className="font-semibold leading-6 text-blue-600 hover:text-indigo-500 ml-1"
                        >
                        Connectez-vous ici
                        </a>
                    </p>
                </div>
            </div>
            <div className="mt-10 text-center text-sm text-gray-500">
                <p>Une question ? Appelez-nous</p>
                <p className="font-bold">0 969 323 551</p>
                <p>lundi au vendredi : 8h - 20h / samedi : 9h - 19h (hors jours fériés)</p>
            </div>
        </div>
    </div>
);
};

export default Register;


