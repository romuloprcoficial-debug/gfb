"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const scenes = [
    {
        id: 1,
        image: '/images/narrative/scene1.png',
        title: 'Legado Familiar',
        description: 'A certeza de que sua história continuará através das gerações. Proteção que cuida de quem você ama, hoje e sempre.'
    },
    {
        id: 2,
        image: '/images/narrative/scene2.png',
        title: 'Conquista Profissional',
        description: 'Segurança para inovar e expandir. Soluções empresariais que blindam seu patrimônio e garantem a continuidade dos negócios.'
    },
    {
        id: 3,
        image: '/images/narrative/scene3.png',
        title: 'Perenidade',
        description: 'Soluções atemporais que atravessam o tempo com você. Construa um futuro sólido com a confiança da GFB Seguros.'
    }
];

export default function ScrollNarrative() {
    const [activeScene, setActiveScene] = useState(0);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Texts - Interactive List */}
                <div className={styles.textColumn}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>
                            <span className="text-gradient">Paz Temporal:</span><br />
                            Seu Legado em Movimento
                        </h2>
                        <p className={styles.mainDescription}>
                            A GFB Seguros é a ponte entre o seu presente e o futuro que você constrói.
                            Passe o mouse sobre os pilares abaixo para visualizar.
                        </p>
                    </div>

                    <div className={styles.listContainer} onMouseLeave={() => setActiveScene(0)}>
                        {scenes.map((scene, index) => (
                            <div
                                key={scene.id}
                                className={`${styles.listItem} ${activeScene === index ? styles.active : ''}`}
                                onMouseEnter={() => setActiveScene(index)}
                                onClick={() => setActiveScene(index)}
                            >
                                <div className={styles.itemTitle}>{scene.title}</div>
                                <div className={styles.itemDesc}>{scene.description}</div>
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://wa.me/5562981364197"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                            marginTop: '2rem',
                            alignSelf: 'start',
                            backgroundColor: '#A3E635',
                            color: '#1f2937',
                            fontWeight: 700,
                            borderRadius: '12px',
                            textDecoration: 'none'
                        }}
                    >
                        Garanta Seu Futuro
                    </a>
                </div>

                {/* Images - Display Area */}
                <div className={styles.imageColumn}>
                    {scenes.map((scene, index) => (
                        <div
                            key={scene.id}
                            className={`${styles.imageWrapper} ${activeScene === index ? styles.active : ''}`}
                        >
                            <Image
                                src={scene.image}
                                alt={scene.title}
                                width={800}
                                height={600}
                                className={styles.image}
                                priority={index === 0} // Optimize LCP
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
