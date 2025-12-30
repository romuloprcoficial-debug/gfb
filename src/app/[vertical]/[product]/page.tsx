import { notFound } from 'next/navigation';
import { getVertical, verticals } from '@/lib/data';
import Link from 'next/link';

// Generate static params for all products in all verticals
export async function generateStaticParams() {
    const params = [];
    for (const vertical of Object.values(verticals)) {
        for (const product of vertical.products) {
            params.push({
                vertical: vertical.slug,
                product: product.id,
            });
        }
    }
    return params;
}

export default async function ProductPage({ params }: { params: Promise<{ vertical: string; product: string }> }) {
    const { vertical: verticalSlug, product: productId } = await params;
    const vertical = getVertical(verticalSlug);

    if (!vertical) {
        notFound();
    }

    const product = vertical.products.find((p) => p.id === productId);

    if (!product) {
        notFound();
    }

    return (
        <main>
            {/* Hero Section */}
            <section style={{
                backgroundColor: 'var(--bg-subtle)',
                padding: '5rem 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <Link href={`/${verticalSlug}`} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
                        &larr; Voltar para {vertical.title}
                    </Link>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{product.title}</h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)' }}>
                        {product.description || `Soluções completas em ${product.title} para você.`}
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <button className="btn btn-primary">
                            Solicitar Cotação Personalizada
                        </button>
                    </div>
                </div>
            </section>

            {/* Content Placeholder */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Detalhes do Plano</h2>
                        <p style={{ lineHeight: 1.8, color: 'var(--text-main)', marginBottom: '1rem' }}>
                            Este plano oferece as melhores condições do mercado para <strong>{product.title}</strong>.
                            Trabalhamos com as principais seguradoras para garantir sua tranquilidade.
                        </p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: 'var(--text-main)', lineHeight: 1.8 }}>
                            <li>Cobertura abrangente</li>
                            <li>Assistência 24 horas</li>
                            <li>Facilidade no pagamento</li>
                            <li>Atendimento humanizado</li>
                        </ul>
                    </div>

                    <div style={{
                        backgroundColor: '#f8fafc',
                        padding: '2rem',
                        borderRadius: '12px',
                        borderLeft: '4px solid var(--color-accent)'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Por que contratar?</h3>
                        <p style={{ lineHeight: 1.6 }}>
                            Proteja seu patrimônio e garanta o futuro da sua família com quem entende do assunto.
                            A GFB Seguros tem especialistas prontos para tirar todas as suas dúvidas.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
