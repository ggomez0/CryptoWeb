import React, { useState, useEffect } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from "react-router-dom"

function CoinItem({coin}) {

  return (
    <tr className='h-[75px] border-b overflow-hidden'>
     
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className='flex items-center'>
          <img className='w-6 ml-2' src={coin.image} alt={coin.id} />
          <div className='w-[90px] hidden sm:table-cell'><Link to={`/coin/${coin.id}`}>{coin.name}</Link></div>
        </div>
      </td>
      <td>
        <div><Link to={`/coin/${coin.id}`}>{coin.symbol.toUpperCase()}</Link></div>
      </td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td className={coin.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-600"}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
      <td className='w-[200px] hidden md:table-cell'>${coin.total_volume.toLocaleString()}</td>
      <td className='w-[200px] hidden md:table-cell' >${coin.market_cap.toLocaleString()}</td>
      <td>
        <Sparklines svgWidth={140} svgHeight={40} data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="lightblue" />
        </Sparklines>
      </td>
    </tr>
  )
}
export default CoinItem