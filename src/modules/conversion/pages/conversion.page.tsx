import React, { useEffect, useMemo, useState } from 'react';
import CoinInput from '../../../components/CoinInput';
import CoinConversionService from '../../../services/CoinConversionService';
import ConversionHistory from '../components/conversion.history';
import './conversion-page.scss';

export default function ConversionPage() {
  const [fromValue, setFromValue] = useState<number>(500);
  const [fromCoin, setFromCoin] = useState<Coin>('BRL');
  const [conversions, setConversions] = useState<Conversion[] | null>(null);
  const [toCoin, setToCoin] = useState<Coin>('BRL');
  const [conversion, setConversion] = useState<Conversion | null>(null);

  const conversionEntry = useMemo<ConversionEntry | null>(() => {
    return {
      fromCoin,
      toCoin,
      fromValue,
    };
  }, [fromCoin, toCoin, fromValue]);

  useEffect(() => {
    CoinConversionService.getHistory().then(setConversions);
  }, []);

  useEffect(() => {
    if (conversion) setConversion(null);
  }, [fromValue, fromCoin, toCoin]);

  function handleCreateConversion() {
    if (conversionEntry) {
      CoinConversionService.create(conversionEntry)
        .then(setConversion)
        .then(() => CoinConversionService.getHistory())
        .then(setConversions);
    }
  }

  return (
    <div className="coin-conversion-wrapper">
      <h1 className="coin-conversion-title">Coin Conversion</h1>
      <div className="coin-input-wrapper">
        <div className="row">
          <div className="coin-input">
            <p>from</p>
            <CoinInput onChange={setFromCoin} selectId="coin-input-from" />
          </div>
          <div className="coin-value">
            <p>Amount</p>
            <input
              type="number"
              name="coin-1"
              value={fromValue}
              onChange={(evt) => {
                setFromValue(Number(evt.target.value));
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="coin-input">
            <p>to</p>
            <CoinInput onChange={setToCoin} selectId="coin-input-to" />
          </div>
          <div className="coin-conversion-button">
            <button
              disabled={conversionEntry === null}
              className="coin-conversion-btn"
              onClick={handleCreateConversion}
            >
              convert
            </button>
          </div>
        </div>
      </div>
      {conversion ? (
        <div className="conversion-result">
          Result: {conversion.toValue} {conversion.toCoin}
        </div>
      ) : null}
      {conversions ? (
        <ConversionHistory conversions={conversions} />
      ) : (
        <div>
          <br />
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
