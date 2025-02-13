declare global {
  interface ImportMeta {
    env: {
      VITE_API_URL?: string;
      VITE_NODE_ENV?: string;
      VITE_API_VERSION?: string;
    };
  }
}

declare module "virtual:pwa-register/react" {
  import { Dispatch, SetStateAction } from "react";

  export type RegisterSWOptions = {
    immediate?: boolean;
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
    onRegistered?: (
      registration: ServiceWorkerRegistration | undefined,
    ) => void;
    onRegisterError?: (error: any) => void;
  };

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: [boolean, Dispatch<SetStateAction<boolean>>];
    offlineReady: [boolean, Dispatch<SetStateAction<boolean>>];
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
  };
}

export {};
