import { CoreModule } from '@universal-packages/core'
import { EmittedEvent } from '@universal-packages/event-emitter'
import { ExpressControllersTRPCOptions, getTrpcReference, initialize } from '@universal-packages/express-controllers-trpc'

import { LOG_CONFIGURATION } from './LOG_CONFIGURATION'

export default class ExpressControllersTRPCnModule extends CoreModule<ExpressControllersTRPCOptions> {
  public static readonly moduleName = 'express-controllers-trpc'
  public static readonly description = 'Express Controllers TRPC core module wrapper'
  public static readonly defaultConfig: ExpressControllersTRPCOptions = { trpcLocation: './src/trpc', trpcPath: '/trpc' }

  public async prepare(): Promise<void> {
    initialize(this.config)

    const trpcReference = getTrpcReference()

    trpcReference.emitter.on('start', (event: EmittedEvent) => {
      this.logger.log(
        {
          level: 'DEBUG',
          title: 'Incoming call',
          metadata: event.payload,
          category: 'tRPC'
        },
        LOG_CONFIGURATION
      )
    })

    trpcReference.emitter.on('end', (event: EmittedEvent) => {
      this.logger.log(
        {
          level: 'INFO',
          title: 'Handled call',
          metadata: event.payload,
          measurement: event.measurement,
          category: 'tRPC'
        },
        LOG_CONFIGURATION
      )
    })

    trpcReference.emitter.on('error', (event: EmittedEvent) => {
      this.logger.log(
        {
          level: 'ERROR',
          title: 'There was a problem handing the call',
          error: event.error,
          metadata: event.payload,
          category: 'tRPC'
        },
        LOG_CONFIGURATION
      )
    })
  }

  public async release(): Promise<void> {}
}
