import React from 'react'

export default function CoinInput(props: {
  onChange: (coin: Coin) => void,
  selectId: string,
  className?: string
}) {
  const coins: Coin[] = ['BRL', 'BTC', 'EUR', 'USD']
  return (
    <select className={props.className}
      name={props.selectId} id={props.selectId} onChange={(evt) => props.onChange(evt.target.value as Coin)}>
      {
        coins.map(coin => <option key={props.selectId + '-option-' + coin} value={coin}>{coin}</option>)
      }
    </select>
  )
}
