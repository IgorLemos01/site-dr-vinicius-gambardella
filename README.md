# Site — Dr. Vinícius Gambardella Souza

Site institucional de página única (HTML, CSS e JS puros, sem build).

## Estrutura
- `index.html` — conteúdo: início, sobre mim, atendimento, conteúdos sobre saúde, agendamento, contatos e identificação
- `styles.css` — estilos (cores e fontes nas variáveis em `:root`)
- `script.js` — menu móvel e detalhes de interação
- `assets/` — favicon e imagens

## Antes de publicar
1. **Foto do médico:** salve em `assets/dr-vinicius.jpg` (retrato vertical, ~720×900) e troque o bloco `portrait-placeholder` no `index.html` pela tag `<img>` comentada logo acima dele.
2. **Imagem de compartilhamento:** `assets/og-image.jpg` (1200×630).
3. **Domínio:** o site usa `https://www.drviniciusgambardella.com.br/` como exemplo em `index.html`, `robots.txt` e `sitemap.xml`. Troque pelo domínio real.
4. **YouTube:** confirme o endereço do canal (hoje `https://www.youtube.com/@dr.viniciusgambardella`).
5. **WhatsApp:** todos os botões usam (79) 99825-1112 com mensagens pré-preenchidas diferentes por local. Se as clínicas tiverem números próprios, troque nos links correspondentes.

## Ver localmente
```bash
python3 -m http.server 8000
```

## Publicar
Funciona em qualquer hospedagem estática: GitHub Pages, Netlify, Vercel ou Cloudflare Pages.
