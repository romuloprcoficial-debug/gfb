export default function BrokerPage() {
    return (
        <main className="container" style={{ padding: '5rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
                maxWidth: '400px',
                width: '100%',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
                <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem' }}>Área do Corretor</h1>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                        <input type="email" style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: '1px solid #cbd5e1'
                        }} placeholder="seu@email.com" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Senha</label>
                        <input type="password" style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: '1px solid #cbd5e1'
                        }} placeholder="••••••••" />
                    </div>
                    <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                        Entrar
                    </button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#64748b' }}>
                    Esqueceu sua senha? <a href="#" style={{ color: 'var(--color-accent)' }}>Recuperar</a>
                </p>
            </div>
        </main>
    )
}
