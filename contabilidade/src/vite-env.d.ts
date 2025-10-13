// Dentro de src/vite-env.d.ts

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_SCRIPT_URL: string;
  // adicione outras variáveis de ambiente que você tiver aqui
}
