import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
    secret: process.env.AUTH_SECRET ?? 'test-123',
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
            clientId: 'Iv1.60bd504afc0074a2',
            clientSecret: '3d6d5b6e84e23344d01d93252de9dd6bbbdad041'
        }),

        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({
            name: 'Credentials',

            credentials: {
                username: { label: 'Username', type: 'text', placeholder: '(hint: jsmith)' },
                password: { label: 'Password', type: 'password', placeholder: '(hint: hunter2)' }
            },
            authorize (credentials: any) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!
        
                const user = { id: '1', name: 'J Smith', username: 'jsmith', password: 'hunter2' }
        
                if (credentials?.username === user.username && credentials?.password === user.password) {
                  // Any object returned will be saved in `user` property of the JWT
                  return user
                } else {
                  console.error('Warning: Malicious login attempt registered, bad credentials provided')
        
                  // If you return null then an error will be displayed advising the user to check their details.
                  return null
        
                  // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ]

})