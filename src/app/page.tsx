import Link from 'next/link';
import { verticals } from '@/lib/data';
import VerticalCard from '@/components/ui/VerticalCard';
import ScrollNarrative from '@/components/ui/ScrollNarrative';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--bg-subtle)',
        padding: '6rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Proteção Sob Medida para <br />
            <span className="text-gradient">O Que Realmente Importa</span>
          </h1>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: '1.6',
            color: 'var(--text-main)',
            maxWidth: '900px',
            margin: '0 auto 2.5rem',
            fontWeight: 400
          }}>
            Na GFB, acreditamos que a verdadeira riqueza não é o que você acumula, mas o que você torna perene. Sabemos que o seu maior medo não é a perda material, mas a interrupção da sua história.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="https://wa.me/5562981364197" target="_blank" className="btn" style={{ backgroundColor: '#A3E635', color: '#1f2937', fontWeight: 700, borderRadius: '12px', border: 'none' }}>Fale com um Especialista</Link>
            <Link href="#verticais" className="btn btn-secondary" style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', color: 'var(--text-main)' }}>
              Ver Nossas Soluções
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll Narrative Section */}
      <ScrollNarrative />

      {/* Verticals Grid (Re-added below narrative for easy access) */}
      <section id="verticais" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Soluções Completas</h2>
            <p style={{ color: 'var(--text-muted)' }}>Explore nossas áreas de atuação.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {Object.values(verticals).map((vertical) => (
              <VerticalCard key={vertical.id} vertical={vertical} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
