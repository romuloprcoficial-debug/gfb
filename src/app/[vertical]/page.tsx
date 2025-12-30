import { notFound } from 'next/navigation';
import { getVertical, verticals } from '@/lib/data';
import Link from 'next/link';

// Generate static params for all known verticals
export function generateStaticParams() {
    return Object.keys(verticals).map((slug) => ({
        vertical: slug,
    }));
}

export default async function VerticalPage({ params }: { params: Promise<{ vertical: string }> }) {
    const { vertical } = await params;
    const data = getVertical(vertical);

    if (!data) {
        notFound();
    }

    return (
        <main>
            {/* Hero Section */}
            <section style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                padding: '5rem 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>{data.title}</h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
                        {data.description}
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <button className="btn btn-secondary" style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
                            Fazer Cotação
                        </button>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Conheça Nossos Planos</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {data.products.map((product) => (
                            <div key={product.id} style={{
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s ease',
                                backgroundColor: 'white',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{product.title}</h3>
                                {product.description && <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>{product.description}</p>}
                                <Link href={`/${vertical}/${product.id}`} style={{
                                    color: 'var(--color-accent)',
                                    fontWeight: 600,
                                    display: 'inline-flex',
                                    alignItems: 'center'
                                }}>
                                    Saiba mais &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
