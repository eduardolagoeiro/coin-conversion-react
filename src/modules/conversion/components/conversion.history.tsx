import React from 'react';
import './conversion-history.scss';

export default function ConversionHistory(props: {
  conversions: Conversion[];
}) {
  return (
    <div className="coin-history">
      <h2>Conversion history</h2>
      {props.conversions.length === 0 ? (
        <p>Empty.</p>
      ) : (
        <table className="coin-history-table">
          <tr>
            <th>Date</th>
            <th>From</th>
            <th>To</th>
          </tr>
          {props.conversions
            .sort((a, b) => {
              return b.createdAt.getTime() - a.createdAt.getTime();
            })
            .map((conversion) => (
              <tr key={conversion.id}>
                <td>{conversion.createdAt.toLocaleDateString('pt-BR')}</td>
                <td>
                  {conversion.fromValue} {conversion.fromCoin}
                </td>
                <td>
                  {conversion.toValue} {conversion.toCoin}
                </td>
              </tr>
            ))}
        </table>
      )}
    </div>
  );
}
