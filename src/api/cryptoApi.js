import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const baseUrl=process.env.REACT_APP_CRYPTO_API_URL
const cryptoApiHeaders={
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY


}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(build)=>({
        getCryptos:build.query({query:(count)=>createRequest(`/coins?limit=${count}`)}),
        getCryptoDetails:build.query({query:(coinId)=>createRequest(`/coin/${coinId}`)}),
        getCryptoHistory:build.query({query:({coinId,timeperiod})=>createRequest(`/coin/${coinId}/history/${timeperiod}`)}),
        getExchanges: build.query({ query: () => createRequest('/exchanges'),}),
    })
})

export  const {useGetCryptosQuery, useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery} =cryptoApi


