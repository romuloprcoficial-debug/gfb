export default function InstitucionalPage() {
    return (
        <main className="container" style={{ padding: '4rem 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Sobre a GFB Seguros</h1>
            <div style={{ maxWidth: '800px', lineHeight: 1.8, color: 'var(--text-main)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    A GFB Seguros nasceu com a missão de simplificar o acesso à proteção patrimonial e pessoal no Brasil.
                    Com anos de experiência no mercado, oferecemos consultoria especializada para encontrar a melhor solução para você.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Nossos valores são pautados na ética, transparência e agilidade. Acreditamos que contratar um seguro
                    deve ser um processo claro e eficiente, sem letras miúdas.
                </p>
                <h2 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1rem' }}>Por que nos escolher?</h2>
                <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: '2rem' }}>
                    <li>Atendimento humanizado e personalizado.</li>
                    <li>Parceria com as maiores seguradoras do mercado.</li>
                    <li>Suporte completo em caso de sinistros.</li>
                </ul>
            </div>
        </main>
    )
}
