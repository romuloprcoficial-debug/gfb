"use client"; // Should be client or server? VerticalCard is client. Page can be server.
// But VerticalCard is imported.
// Actually VerticalCard is "use client". Page can be server.
// Let's keep it server.

import { verticals } from '@/lib/data';
import VerticalCard from '@/components/ui/VerticalCard';

export default function SegurosPage() {
    return (
        <main className="container" style={{ padding: '4rem 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Todos os Seguros</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {Object.values(verticals).map((vertical) => (
                    <VerticalCard key={vertical.id} vertical={vertical} />
                ))}
            </div>
        </main>
    );
}
