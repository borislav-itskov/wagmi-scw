import { http, createConfig } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import { coinbaseWallet } from 'wagmi/connectors'

export const config = createConfig({
  chains: [baseSepolia],
  multiInjectedProviderDiscovery: false,
  connectors: [
    coinbaseWallet({ appName: 'Create Wagmi', appChainIds: [baseSepolia.id] }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}