import './style/Header.scss'

function Header() {
    return(
        <header>
            <div className='initial'>PR.</div>
            <ul className='flex-ul'>
                <li>Accueil</li>
                <li>Projets</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Header;