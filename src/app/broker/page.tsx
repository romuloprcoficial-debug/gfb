'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BrokerPage() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'Gfb2026@') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Senha incorreta. Tente novamente.');
        }
    };

    if (isAuthenticated) {
        return (
            <main className="container" style={{ padding: '4rem 0' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Área do Corretor</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Vendas Section */}
                    <div style={{
                        padding: '2rem',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--color-primary)', borderBottom: '2px solid var(--color-secondary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                            Vendas
                        </h2>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li>
                                <a href="#" target="_blank" className="btn-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', textDecoration: 'none', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s' }}>
                                    <span>📄</span> Portfólio (Vantagem de um bom portfólio)
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="btn-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', textDecoration: 'none', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s' }}>
                                    <span>📊</span> Senhas GFB
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="btn-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', textDecoration: 'none', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s' }}>
                                    <span>🎓</span> Escola GFB
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="btn-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', textDecoration: 'none', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s' }}>
                                    <span>💳</span> Cobrança Cartão de Crédito Cias
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Operacional Section */}
                    <div style={{
                        padding: '2rem',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--color-primary)', borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                            Operacional
                        </h2>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li>
                                <a href="#" target="_blank" className="btn-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', textDecoration: 'none', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s' }}>
                                    <span>📝</span> Formulário SAC GFB
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="btn-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', textDecoration: 'none', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s' }}>
                                    <span>👥</span> Relação Sócios GFB
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="container" style={{ padding: '5rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
                maxWidth: '400px',
                width: '100%',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                backgroundColor: 'white'
            }}>
                <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem' }}>Área do Corretor</h1>
                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Senha de Acesso</label>
                        <input
                            type="password"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: '1px solid #cbd5e1'
                            }}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p style={{ color: 'red', fontSize: '0.9rem', textAlign: 'center' }}>{error}</p>}
                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                        Entrar
                    </button>
                </form>
                <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#64748b' }}>
                    <p>Acesso restrito a sócios ativos.</p>
                </div>
            </div>
        </main>
    )
}
