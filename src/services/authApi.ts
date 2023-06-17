import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:32768",
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body: {email: string, password: string}) => {
                return {
                    url: "/api/auth/login",
                    method: "post",
                    body,
                }
            }
        })
    })
})

export const { useLoginUserMutation } = authApi