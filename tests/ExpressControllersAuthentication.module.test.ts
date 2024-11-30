import { getTRPC } from '@universal-packages/express-controllers-trpc'

import { ExpressControllersTRPC } from '../src'

coreJest.runBare({
  coreConfigOverride: {
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe(ExpressControllersTRPC, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    expect(getTRPC()).toEqual({
      trpcMiddleware: expect.any(Function),
      options: {
        trpcLocation: './tests/__fixtures__/trpc/index.ts',
        trpcPath: 'trpc-endpoint'
      }
    })
  })
})