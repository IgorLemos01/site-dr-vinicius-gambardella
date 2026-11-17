# Site — Dr. Vinícius Gambardella Souza

Site institucional de página única (HTML, CSS e JS puros, sem build).

## Estrutura
Layout inspirado em drcarlospassos.com: topo com foto em tela cheia e três botões (WhatsApp, Instagram, YouTube), Sobre mim com foto, locais de atendimento em faixa verde, perguntas sobre saúde, faixa de redes sociais, chamada para agendamento e rodapé.

- `index.html` — conteúdo: início, sobre mim, atendimento, conteúdos sobre saúde, agendamento, contatos e identificação
- `styles.css` — estilos (cores e fontes nas variáveis em `:root`)
- `script.js` — menu móvel e detalhes de interação
- `assets/` — favicon e imagens

## Antes de publicar
1. **Fotos do médico:** `assets/hero.webp`/`hero.jpg` (topo no computador), `assets/hero-mobile.webp` (topo no celular), `assets/dr-vinicius-sobre.webp`/`.jpg` (seção Sobre mim) e `assets/dr-vinicius-800.jpg` (dados para o Google). Para trocar, substitua os arquivos mantendo os nomes.
2. **Imagem de compartilhamento:** `assets/og-image.jpg` (1200×630), gerada a partir da foto.
3. **Domínio:** o site usa `https://www.drviniciusgambardella.com.br/` como exemplo em `index.html`, `robots.txt` e `sitemap.xml`. Troque pelo domínio real.
4. **YouTube:** canal `https://www.youtube.com/@viniciusgambardella`. O vídeo em destaque fica em `data-video-id` no `index.html` (seção Conteúdos); para trocar, substitua o ID nele e na URL da miniatura.
5. **Contatos:** consultas a domicílio (79) 99825-1112 (WhatsApp); Centro Médico Alecrim (79) 99920-4776 (WhatsApp); Centro Médico Humanizado de Sergipe (79) 98869-7666 (ligação).

## Identidade visual
- Mirage `#16232A`, Deep Sea Green `#215056`, Blaze Orange `#EB5835` (cor da logo), Wild Sand `#E4EEF0`
- Botões laranja usam `#C9431F`, um tom mais escuro, para o texto branco ter contraste legível
- Fontes: Quicksand (títulos, próxima da logo) e Atkinson Hyperlegible (texto)

## Ver localmente
```bash
python3 -m http.server 8000
```

## Publicar
Funciona em qualquer hospedagem estática: GitHub Pages, Netlify, Vercel ou Cloudflare Pages.
