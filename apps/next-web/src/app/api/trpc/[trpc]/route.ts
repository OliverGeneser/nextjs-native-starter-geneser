import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { NextRequest, NextResponse } from 'next/server'
import { appRouter, createTRPCContext } from 'api'

export const runtime = 'edge'

/**
 * Configure basic CORS headers
 * You should extend this to match your needs
 */
function setCorsHeaders(res: Response) {
  res.headers.set('Access-Control-Allow-Origin', '*')
  res.headers.set('Access-Control-Request-Method', '*')
  res.headers.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST')
  res.headers.set('Access-Control-Allow-Headers', '*')
}

export function OPTIONS() {
  const response = new Response(null, {
    status: 204,
  })
  setCorsHeaders(response)
  return response
}

const handler = async (req: NextRequest, res: NextResponse) => {
  const response = await fetchRequestHandler({
    endpoint: '/api/trpc',
    router: appRouter,
    req,
    createContext: () => createTRPCContext({ req, res }),
    onError({ error, path }: any) {
      console.error(`>>> tRPC Error on '${path}'`, error)
    },
  })

  setCorsHeaders(response)
  return response
}

export { handler as GET, handler as POST }
