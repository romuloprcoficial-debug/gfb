# Como Fazer o Deploy do GFB Seguros na Vercel

Seu projeto Next.js já está configurado para a Vercel. Siga um dos métodos abaixo:

## Método 1: GitHub (Recomendado)
A maneira mais fácil e automática (CI/CD).

1.  Crie um repositório no [GitHub](https://github.com/new).
2.  Empurre seu código local para o GitHub:
    ```bash
    git init
    git add .
    git commit -m "Deploy inicial"
    git branch -M main
    git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
    git push -u origin main
    ```
3.  Acesse [vercel.com/new](https://vercel.com/new).
4.  Conecte sua conta do GitHub.
5.  Selecione o repositório **gf**.
6.  Clique em **Deploy**. A Vercel detectará o Next.js automaticamente.

## Método 2: Vercel CLI (Direto do Terminal)
Se não quiser usar o GitHub agora.

1.  No terminal do projeto, rode o comando abaixo e siga as instruções (Y/N):
    ```bash
    npx vercel
    ```

3.  Aguarde o upload e build. Você receberá um link de produção (ex: `https://gf.vercel.app`).

## Notas Importantes
- **Environment Variables**: Se adicionar variáveis de ambiente no futuro, lembre-se de configurá-las no painel da Vercel.
- **Domínio Próprio**: Após o deploy, conecte seu domínio `gfbseguros.com.br` em **Settings > Domains**.
