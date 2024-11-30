import { CoreModule } from '@universal-packages/core'
import { ExpressControllersTRPCOptions, initialize } from '@universal-packages/express-controllers-trpc'

import { LOG_CONFIGURATION } from './LOG_CONFIGURATION'

export default class ExpressControllersTRPCnModule extends CoreModule<ExpressControllersTRPCOptions> {
  public static readonly moduleName = 'express-controllers-trpc'
  public static readonly description = 'Express Controllers TRPC core module wrapper'
  public static readonly defaultConfig: ExpressControllersTRPCOptions = { trpcLocation: './src/trpc', trpcPath: '/trpc' }

  public async prepare(): Promise<void> {
    initialize(this.config)
  }

  public async release(): Promise<void> {}
}
