import React from 'react'
import {TwitterFollowCard} from './TwitterFollowCard'

const users = [
    {
        name: 'Miguel Ángel Durán',
        userName: 'midudev',
        isFollowing: true
    },
    {
        name: 'Rubén Doblas',
        userName: 'Rubiu5',
        isFollowing: false
    },
    {
        name: 'Javier Milei',
        userName: 'jmilei',
        isFollowing: true
    }
]

export function AppPrincipal() {
    return(
        <section className="app">
            {users.map(({name, userName, isFollowing}) =>
            <TwitterFollowCard 
                name= {name}
                userName= {userName}
                isFollowing= {isFollowing}
                key={userName}
              />
            )}
        </section>
    )
}