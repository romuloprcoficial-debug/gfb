import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Consórcio Bradesco: Menores Lances e Alta Previsibilidade | GFB',
    description: 'Consórcio Bradesco com estratégia GFB: Varredura tecnológica de grupos para encontrar os menores lances e maior previsibilidade do Brasil sem taxas ocultas.',
};

export default function BradescoConsorcioPage() {
    return (
        <main>
            {/* Hero Section */}
            <section style={{
                backgroundColor: 'var(--bg-subtle)',
                padding: '5rem 0 4rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    {/* Logo Bradesco */}
                    <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                        {/* Logo Bradesco */}
                        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="/logos/bradesco.png"
                                alt="Logo Bradesco Consórcio"
                                style={{ width: '280px', height: 'auto', maxWidth: '90%' }}
                            />
                        </div>
                    </div>

                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2, color: 'var(--color-primary)' }}>
                        Consórcio Bradesco: <br />
                        <span className="text-gradient">Estratégia, Previsibilidade e os Menores Lances do Brasil</span>
                    </h1>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '4rem 0' }}>
                <div className="container">

                    {/* Introduction */}
                    <div style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                            A Inteligência GFB transformando o Bradesco Consórcio na sua melhor rota de conquista.
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.5rem', textAlign: 'justify' }}>
                            Você já se sentiu frustrado ao entrar em um consórcio e descobrir que precisaria de um lance de 50% ou 60% para ser contemplado? Ou pior, descobriu que as "parcelas reduzidas" e o "lance embutido" eram apenas armadilhas que inchavam os grupos e tornavam a sua contemplação quase impossível?
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-muted)', textAlign: 'justify' }}>
                            Na <strong>GFB Seguros</strong>, jogamos um jogo diferente. Trabalhamos com o Bradesco Consórcio por um motivo matemático: é a administradora com a maior quantidade de grupos do mercado, e volume gera oportunidade.
                        </p>
                    </div>

                    {/* Differentiator */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>🚀 O Diferencial Tecnológico da GFB</h3>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            border: '1px solid #e2e8f0'
                        }}>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                Não escolhemos o seu grupo na sorte. Possuímos uma ferramenta tecnológica exclusiva que varre todos os grupos ativos da Bradesco Consórcio. Nossa tecnologia busca cirurgicamente apenas as cotas e grupos que:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                                {[
                                    "Estão dentro das reais possibilidades do seu perfil financeiro.",
                                    "Apresentam o histórico de menores lances para contemplação.",
                                    "Oferecem a maior previsibilidade de entrega do mercado."
                                ].map((item, index) => (
                                    <li key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.1rem' }}>
                                        <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Previsibilidade */}
                    <div style={{ marginBottom: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>💎 Por que a nossa Previsibilidade é Imbatível?</h3>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                                Diferente de outras opções no mercado, a nossa estratégia Bradesco foca na pureza do grupo:
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Sem Lances Embutidos</h4>
                                    <p style={{ color: 'var(--text-muted)' }}>Grupos sem essa artimanha possuem lances reais muito menores, favorecendo quem tem planejamento.</p>
                                </div>
                                <div style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Sem Parcelas Reduzidas</h4>
                                    <p style={{ color: 'var(--text-muted)' }}>Evitamos grupos que "maquiam" o valor da parcela, garantindo que o saldo do grupo seja saudável e as contemplações, frequentes.</p>
                                </div>
                                <div style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Menores Lances do Mercado</h4>
                                    <p style={{ color: 'var(--text-muted)' }}>Com a nossa varredura técnica, encontramos oportunidades onde lances baixos são vitoriosos.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conquistas (Grid) */}
                    <div style={{ marginBottom: '5rem' }}>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '2.5rem', textAlign: 'center' }}>🚜 O Que Você Pode Conquistar</h3>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '2rem'
                        }}>
                            {[
                                { title: "Equipamentos Agrícolas", desc: "Modernize sua frota com previsibilidade de safra." },
                                { title: "Terrenos", desc: "Invista na base do seu próximo grande projeto." },
                                { title: "Imóveis", desc: "Fuja dos juros abusivos do financiamento tradicional." },
                                { title: "Veículos", desc: "Planeje a troca da sua frota ou carro pessoal com inteligência financeira." }
                            ].map((item, index) => (
                                <div key={index} style={{
                                    backgroundColor: 'white',
                                    padding: '2rem',
                                    borderRadius: '12px',
                                    border: '1px solid #e2e8f0',
                                    textAlign: 'center'
                                }}>
                                    <h4 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>{item.title}</h4>
                                    <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Final */}
                    <div style={{
                        textAlign: 'center',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        padding: '4rem 2rem',
                        borderRadius: '24px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'white' }}>🟢 Fale com um Especialista em Previsibilidade</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                            Não entre em um consórcio sem antes ver os dados. Nossa equipe está pronta para realizar o seu estudo técnico agora mesmo.
                        </p>

                        <a
                            href="https://wa.me/5562981364197"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-accent"
                            style={{
                                fontSize: '1.1rem',
                                padding: '1rem 2.5rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                textDecoration: 'none',
                                backgroundColor: '#25D366', // WhatsApp Green
                                color: 'white',
                                fontWeight: 700
                            }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>📱</span>
                            Quero meu Estudo de Previsibilidade Gratuito
                        </a>
                    </div>

                </div>
            </section>
        </main>
    );
}
