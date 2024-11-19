import { useState } from 'react'

export function TwitterFollowCard({name, userName}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing? 'tw-follow-card-follow-button is-following' : 'tw-follow-card-follow-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img className='tw-follow-card-avatar' alt="imagen de midudev" src={`https://unavatar.io/x/${userName}`}></img>
                <div className='tw-follow-card-info'>
                    <strong className='tw-follow-card-nombre'>{name}</strong>
                    <span className='tw-follow-card-username'>@{userName}</span>
                </div>
            </header>
            <aside className='tw-follow-card-aside'>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
} 