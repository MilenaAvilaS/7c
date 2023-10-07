/**
 * Manejadores para la calculadora de criptomonedas.
 * @param {Object} modules - Los módulos requeridos para la función.
 * @returns {Object} - Un objeto que contiene los endpoints de la calculadora.
 */
const calculatorHandlers = (modules) => {
    const getCryptoReturn = async (req, res) => {
    try {
        const { loadDataCryptoReturn, axios, coin } = modules;
        const { amount } = req.query;
        const MESSARI_API_KEY = process.env.MESSARI_API_KEY;

        // Cargar los datos de retorno de criptomonedas
        const dataCryptoReturn = await loadDataCryptoReturn();
        // Obtener datos de mercado de criptomonedas desde Messari API
        const {
            data: { data: dataCoins },
        } = await axios.get(
            'https://data.messari.io/api/v2/assets?fields=slug,symbol,metrics/market_data/price_usd',
            { headers: { 'x-messari-api-key': MESSARI_API_KEY } }
        );

        // Calcular el retorno para cada criptomoneda y filtrar las que no se encuentran
        const coins = dataCryptoReturn
            .map((row) =>
                coin({
                    coin: row,
                    amount: parseFloat(amount),
                    dataCoins,
            })
            )
            .filter((row) => row !== null);

        res.status(200).json({ ok: true, coins });
    } catch (error) {
        // Manejo de errores
        console.error('Error en el manejo de la solicitud:', error);
        res.status(500).json({ ok: false, error: 'Error en el servidor' });
        }
    };

    return { getCryptoReturn };
};

    module.exports = calculatorHandlers;