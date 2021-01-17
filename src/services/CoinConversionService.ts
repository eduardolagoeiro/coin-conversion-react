const db: {
  conversions: Conversion[];
} = {
  conversions: [],
};

function getHistory() {
  return new Promise((resolve: (conversions: Conversion[]) => void) => {
    setTimeout(() => {
      resolve(db.conversions);
    }, 500);
  });
}

function create(conversion: ConversionEntry) {
  return new Promise<Conversion>((resolve) => {
    setTimeout(() => {
      const conversionCreated: Conversion = {
        ...conversion,
        createdAt: new Date(),
        id: new Date().getTime().toFixed(11).substring(2),
        toValue: 1.5 * conversion.fromValue,
      };
      db.conversions.push(conversionCreated);
      resolve(conversionCreated);
    }, 500);
  });
}

const CoinConversionService = {
  create,
  getHistory,
};

export default CoinConversionService;
