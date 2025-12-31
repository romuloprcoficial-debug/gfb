import Link from 'next/link'

export default function Header() {
    return (
        <header style={{
            borderBottom: '1px solid #e2e8f0',
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            zIndex: 50
        }}>
            <div className="container" style={{
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Logo */}
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-outfit)' }}>
                    GFB <span style={{ color: 'var(--color-accent)' }}>Seguros</span>
                </Link>

                {/* Navigation */}
                <nav className="nav-menu">
                    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                        <li><Link href="/" style={{ fontWeight: 500 }}>Início</Link></li>
                        <li><Link href="/seguros" style={{ fontWeight: 500 }}>Seguros</Link></li>
                        <li><Link href="/institucional" style={{ fontWeight: 500 }}>Institucional</Link></li>
                        <li><Link href="/broker" style={{ fontWeight: 500 }}>Corretores</Link></li>
                    </ul>
                </nav>

                {/* CTA */}
                <div>
                    <Link href="https://wa.me/5562981364197" target="_blank" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Cotar Agora
                    </Link>
                </div>
            </div>
        </header>
    )
}
