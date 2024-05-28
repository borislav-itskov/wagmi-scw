import { http, createConfig } from "wagmi";
import { base } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [base],
  // turn off injected provider discovery
  multiInjectedProviderDiscovery: false,
  connectors: [injected()],
  ssr: true,
  transports: {
    [base.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
