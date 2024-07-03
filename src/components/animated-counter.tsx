"use client"
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number}) => {
  return (
    <div>
        <CountUp
            decimals={2}
            decimal=','
            prefix='$'
            end={amount}
        >
        </CountUp>
    </div>
  )
}

export default AnimatedCounter