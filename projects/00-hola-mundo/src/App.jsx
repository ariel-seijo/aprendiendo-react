import React from 'react'
import {TwitterFollowCard} from './TwitterFollowCard'

export function AppPrincipal() {
    return(
        <section className="app">
            <TwitterFollowCard name="Miguel Ángel Durán" userName="midudev"  />
            <TwitterFollowCard name="Rubén Doblas" userName="Rubiu5"  />
            <TwitterFollowCard name="Javier Milei" userName="jmilei"  />
        </section>
    )
}