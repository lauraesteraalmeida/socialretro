# Copie este arquivo para ".env" e preencha os valores reais.
# NUNCA coloque o .env de verdade no controle de versao.

NODE_ENV=development
PORT=3000

# Configuracao do PostgreSQL - ajuste para o seu ambiente local.
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=COLOCAR_SENHA_AQUI
DB_NAME=social_retro

# Chave usada para assinar o cookie de sessao. Gere um valor aleatorio
# forte (nunca reaproveite o exemplo abaixo em producao). No PowerShell,
# voce pode gerar um valor assim:
#   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
SESSION_SECRET=troque_por_um_valor_aleatorio_com_pelo_menos_32_caracteres

# Duracao da sessao em milissegundos (valor abaixo = 7 dias).
SESSION_MAX_AGE_MS=604800000

# Uploads (avatares e musicas de perfil).
UPLOAD_DIR=public/uploads
UPLOAD_MAX_SIZE_BYTES=5242880

# Endpoint do WebSocket usado pelo chat em tempo real.
WS_PATH=/ws

# Login com Google (OPCIONAL). Se deixar essas tres linhas vazias, o
# botao "Entrar com Google" simplesmente nao aparece nas paginas de
# login/cadastro - o site funciona normalmente so com e-mail/senha.
#
# Para preencher de verdade:
#   1. Acesse https://console.cloud.google.com/
#   2. Crie um projeto (ou use um existente)
#   3. Va em "APIs e servicos" > "Tela de consentimento OAuth" e configure
#   4. Va em "Credenciais" > "Criar credenciais" > "ID do cliente OAuth"
#   5. Tipo de aplicativo: "Aplicativo da Web"
#   6. Em "URIs de redirecionamento autorizados", adicione exatamente:
#      http://localhost:3000/auth/google/callback
#      (troque a URL se for rodar em outro endereco/porta)
#   7. Copie o Client ID e o Client Secret gerados para as linhas abaixo
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
