import Link from 'next/link'

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {/* Brand */}
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>GFB Seguros</h3>
                        <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
                            Protegendo o que importa para você com excelência e confiança.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>Seguros</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><Link href="/seguros/vida">Vida</Link></li>
                            <li><Link href="/seguros/auto">Automóvel</Link></li>
                            <li><Link href="/seguros/residencial">Residencial</Link></li>
                            <li><Link href="/seguros/empresarial">Empresarial</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>Contato</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>contato@gfbseguros.com.br</li>
                            <li>(11) 99999-9999</li>
                            <li>Av. Paulista, 1000 - SP</li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #334155',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    color: '#94a3b8',
                    fontSize: '0.9rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} GFB Seguros. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
