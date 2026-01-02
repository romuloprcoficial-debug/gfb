export type Product = {
    id: string;
    title: string;
    description?: string;
    logo?: string;
    link?: string;
};

export type Vertical = {
    id: string;
    title: string;
    slug: string;
    description: string;
    heroImage: string;
    products: Product[];
};

export const verticals: Record<string, Vertical> = {
    'gf-bank': {
        id: 'gf-bank',
        title: 'GF BANK',
        slug: 'gf-bank',
        description: 'Soluções financeiras robustas para seus projetos.',
        heroImage: '/images/bank-hero.jpg',
        products: [
            { id: 'bradesco-consorcio', title: 'Bradesco Consórcio' },
            { id: 'porto-bank-consorcio', title: 'Porto Bank Consórcio' },
            { id: 'hs-consorcios', title: 'HS Consórcios' },
            { id: 'financiamento-veiculos', title: 'Financiamento de Veículos' },
        ],
    },
    'gf-agro': {
        id: 'gf-agro',
        title: 'GF AGRO e Construção Civil',
        slug: 'gf-agro',
        description: 'Proteção especializada para o campo e grandes obras.',
        heroImage: '/images/agro-hero.jpg',
        products: [
            { id: 'equipamentos-linha-amarela', title: 'Equipamentos Linha Amarela' },
            { id: 'equipamentos-agricolas', title: 'Equipamentos Agrícolas' },
            { id: 'seguro-lavoura', title: 'Seguro Lavoura' },
            { id: 'seguro-parametrico', title: 'Seguro Paramétrico' },
        ],
    },
    'gf-voce': {
        id: 'gf-voce',
        title: 'GF Você',
        slug: 'gf-voce',
        description: 'Segurança e bem-estar para você e sua família.',
        heroImage: '/images/voce-hero.jpg',
        products: [
            {
                id: 'residencial',
                title: 'Seguro Residencial',
                link: 'https://www.corretor-online.com.br/canalcliente/indexRes.htm?Pw=REZrVTU2dXhoNmd2Z0VFWGtTb0tHZz09'
            },
            { id: 'vida-individual', title: 'Seguro Vida Individual' },
            {
                id: 'automovel',
                title: 'Seguro Automóvel',
                link: 'https://www.corretor-online.com.br/canalcliente/index.htm?Pw=bmpPek5uZzdlMzgrUVFTelF4bTFSdz09'
            },
            { id: 'rc-pf', title: 'Seguro RC (Responsabilidade Civil)' },
            {
                id: 'seguro-moto',
                title: 'Seguro de Moto',
                link: 'https://www.corretor-online.com.br/canalcliente/index.htm?Pw=M2JtQkY2bWdLc2NQVHk3cFA4MkRIdz09'
            },
        ],
    },
    'gf-corporate': {
        id: 'gf-corporate',
        title: 'GF Corporate',
        slug: 'gf-corporate',
        description: 'Soluções corporativas completas para o seu negócio.',
        heroImage: '/images/corporate-hero.jpg',
        products: [
            { id: 'cyber', title: 'Cyber' },
            { id: 'empresarial', title: 'Empresarial' },
            { id: 'rc-pj', title: 'RC (Responsabilidade Civil)' },
            { id: 'vida-em-grupo', title: 'Vida em Grupo' },
            { id: 'transporte', title: 'Transporte' },
        ],
    },
};

export const getVertical = (slug: string) => verticals[slug];
