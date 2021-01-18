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
          <thead>
            <tr>
              <th>Date</th>
              <th>From</th>
              <th>To</th>
            </tr>
          </thead>
          <tbody>
            {props.conversions
              .sort((a, b) => {
                return (
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
                );
              })
              .map((conversion) => (
                <tr key={conversion._id}>
                  <td>
                    {new Date(conversion.createdAt).toLocaleDateString('pt-BR')}
                  </td>
                  <td>
                    {conversion.fromValue} {conversion.fromCoin}
                  </td>
                  <td>
                    {conversion.toValue} {conversion.toCoin}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
