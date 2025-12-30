"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Vertical } from '@/lib/data';

export default function VerticalCard({ vertical }: { vertical: Vertical }) {
    const router = useRouter();

    const handleCardClick = (e: React.MouseEvent) => {
        // Prevent navigation if clicking on a link or button inside the card
        if ((e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
            return;
        }
        router.push(`/${vertical.slug}`);
    };

    return (
        <div style={{
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            height: '100%',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column'
        }}
            className="vertical-card"
            onClick={handleCardClick}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{vertical.title}</h3>

            <ul style={{
                listStyle: 'none',
                marginTop: '0.5rem',
                marginBottom: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
            }}>
                {vertical.products.map((product) => {
                    const isBradesco = product.id === 'bradesco-consorcio';
                    // Content fragment to avoid duplication
                    const Content = () => (
                        <>
                            <span style={{ color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                            <span style={{ textDecoration: 'none' }}>{product.title}</span>
                            {product.logo && (
                                <img
                                    src={product.logo}
                                    alt={`${product.title} logo`}
                                    style={{ width: '120px', height: 'auto', objectFit: 'contain', marginLeft: 'auto', display: 'block' }}
                                />
                            )}
                        </>
                    );

                    return (
                        <li key={product.id} style={{
                            color: 'var(--text-main)',
                            fontSize: '0.95rem',
                            display: 'flex',
                            alignItems: 'center',
                            minHeight: '2.5rem',
                            gap: '0.5rem'
                        }}>
                            {isBradesco ? (
                                <Link
                                    href="/gf-bank/bradesco-consorcio"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', color: 'inherit', textDecoration: 'none' }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Content />
                                </Link>
                            ) : (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                                    <Content />
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>

            <span style={{
                display: 'inline-block',
                marginTop: '1.5rem',
                color: 'var(--color-accent)',
                fontWeight: 600,
                alignSelf: 'flex-start'
            }}>
                Conferir Planos &rarr;
            </span>
        </div>
    );
}
