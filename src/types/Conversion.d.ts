interface Conversion {
  id: string;
  fromCoin: Coin;
  toCoin: Coin;
  fromValue: number;
  toValue: number;
  createdAt: Date;
}

interface ConversionEntry {
  fromCoin: Coin;
  toCoin: Coin;
  fromValue: number;
}
