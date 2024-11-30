import { CoreInitializer } from '@universal-packages/core'

export default class ExpressControllersTRPCInitializer extends CoreInitializer {
  public static readonly initializerName = 'express-controllers-trpc'
  public static readonly description: string = 'Core Express Controllers tRPC Initializer'

  public readonly templatesLocation: string = `${__dirname}/templates`
}
