import React from 'react'
import SearchInput from 'components/search-inputs/SearchInput'
import Container from 'components/containers/Container'
import Button from 'components/buttons/Button'
import { 
    Link, 
    useResolvedPath, 
    useMatch 
} from 'react-router-dom'
import styles from './Navbar.module.css'
import appendClass from 'utils/class'

const LINKS = [
    {
        label: 'Diskusi',
        to: '/discuss'
    },
    {
        label: 'Kontak',
        to: '/contact'
    }
]

export default function Navbar() {
    const isAuthenticated = false

    return (
        <nav className={appendClass(styles.navbar, 'mb-5')}>
            <Container>
                <Brand /> 
                <SearchInput className='search mr-6' placeholder='Cari...' id='search-input'/>
                <NavLinks className='mr-4' />
                {isAuthenticated ? <Profile /> : <Auth />}                
            </Container>
        </nav>
    )
}

function Brand() {
    return (
        <Link className={`${styles.brand} text-decoration-none mr-6`} to='/'>
            <img className='mr-2' src="/images/ainno-logo.png" alt="Ainno Logo" />
            <h2 className='grey-color3 medium'>Ainno</h2>
        </Link>
    )
}

function NavLinks({ className = '' }) {
    return (
        <div className={`${styles['nav-links']} ${className}`}>
            {LINKS.map((link, i) => (
                <NavLink 
                    key={i} 
                    to={link.to} 
                    label={link.label}/>
            ))}
        </div>
    )
}

function NavLink({ to = '', label = '' }) {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })

    let currentClass = styles['nav-link']
    if (match) {
        currentClass += ` ${styles.active}`
    }

    return (
        <Link 
            className={currentClass} 
            to={to}>{label}</Link>
    )
}

function Auth({ className = '' }) {
    return (
        <div className={`${styles.auth} ${className}`}>
            <Link className='mr-3' to='/login'>
                <Button className='main-color1' label='Masuk' transparent />
            </Link>
            <Link to='/register'>
                <Button label='Daftar' padding='0.8rem 1.5rem' />
            </Link>
        </div>
    )
}

function Profile() {
    return (
        <div className={styles.profile}>
            <img src='/images/profile-example.jpg' alt='profile example' title='Dasha Taran' />
        </div>
    )   
}