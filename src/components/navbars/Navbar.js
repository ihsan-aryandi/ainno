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

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Brand /> 
                <SearchInput className='search mr-6' placeholder='Cari...' id='search-input'/>
                <NavLinks className='mr-4' />
                <Auth />
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
    const links = [
        {
            label: 'Diskusi',
            to: '/discuss'
        },
        {
            label: 'Kontak',
            to: '/contact'
        }
    ]

    return (
        <div className={`${styles['nav-links']} ${className}`}>
            {links.map((link, i) => (
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

function Auth() {
    return (
        <div>
            <Button label='Daftar' />
        </div>
    )
}