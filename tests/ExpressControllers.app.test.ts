coreJest.runApp('express-controllers', {
  coreConfigOverride: {
    apps: { location: './tests/__fixtures__' },
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe('ExpressControllers', (): void => {
  it('exposes the trpc endpoint', async (): Promise<void> => {
    await fGet('/trpc-endpoint/userList\?batch\=1\&input\=%7B%7D')
    expect(fResponse).not.toHaveReturnedWithStatus('NOT_FOUND')
  })
})
