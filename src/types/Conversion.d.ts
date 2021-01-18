interface Conversion {
  _id: string;
  fromCoin: Coin;
  toCoin: Coin;
  fromValue: number;
  toValue: number;
  createdAt: string;
}

interface ConversionEntry {
  fromCoin: Coin;
  toCoin: Coin;
  fromValue: number;
}
