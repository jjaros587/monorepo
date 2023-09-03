import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import config from './config'
// import CoinbaseDatasource from './datasources/CoinbaseDatasource'
// import { applyMiddleware } from "graphql-middleware";
// import { buildFederatedSchema } from "@apollo/federation";
// import permissions from "./graphql/permissions";
import { importData } from './import/importData'
import { buildSchema } from 'type-graphql'
import { AssetResolver } from './graphql/entities/resolvers/assetResolver'
import { TransactionResolver } from './graphql/entities/resolvers/transactionResolver'
import { WithdrawalResolver } from './graphql/entities/resolvers/withdrawalResolver'
import { UserResolver } from './graphql/entities/resolvers/userResolver'
import { mongoose } from '@typegoose/typegoose'
import { WalletResolver } from './graphql/entities/resolvers/walletResolver'
import { AuthService } from './services/AuthService'

async function bootstrap() {
  const app = express()
  app.use(cors())

  mongoose.connect('mongodb://localhost:27017')
  mongoose.connection.once('open', () => {
    console.log('MongoDB connected...\n')
    importData(true)
  })

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        TransactionResolver,
        AssetResolver,
        UserResolver,
        WithdrawalResolver,
        WalletResolver,
      ],
      authChecker: AuthService.authChecker,
    }),
    playground: true,
    introspection: true,

    dataSources: () => {
      return {
        // coinbaseService: new CoinbaseDatasource()
      }
    },
    context: ({ req }: { req: express.Request }) => {
      return {
        accessToken: req.headers.authorization,
        user: AuthService.getUser(req.headers.authorization),
      }
    },
  })

  server.applyMiddleware({ app, path: '/graphql' })
  app.listen(config.PORT, () =>
    console.log('Server listening at http://localhost:%s\n', config.PORT),
  )
}

bootstrap().catch(console.error)
