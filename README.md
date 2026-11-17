# Site — Dr. Vinícius Gambardella Souza

Site institucional de página única (HTML, CSS e JS puros, sem build).

## Estrutura
- `index.html` — conteúdo: início, sobre mim, atendimento, conteúdos sobre saúde, agendamento, contatos e identificação
- `styles.css` — estilos (cores e fontes nas variáveis em `:root`)
- `script.js` — menu móvel e detalhes de interação
- `assets/` — favicon e imagens

## Antes de publicar
1. **Foto do médico:** já incluída em `assets/dr-vinicius-800.jpg` e `.webp`. Para trocar, substitua esses arquivos mantendo os nomes.
2. **Imagem de compartilhamento:** `assets/og-image.jpg` (1200×630), gerada a partir da foto.
3. **Domínio:** o site usa `https://www.drviniciusgambardella.com.br/` como exemplo em `index.html`, `robots.txt` e `sitemap.xml`. Troque pelo domínio real.
4. **YouTube:** confirme o endereço do canal (hoje `https://www.youtube.com/@dr.viniciusgambardella`).
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
