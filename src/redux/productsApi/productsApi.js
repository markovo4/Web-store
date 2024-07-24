import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_BASE_URL} from "../../utils/api/api.js";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`,
        }),
        getProductById: builder.query({
            query: (productId = 1) => `products/${productId}`,
        }),
        getAllCategories: builder.query({
            query: () => `products/categories`,
        }),
        getAllProductsByCategory: builder.query({
            query: (category) => `/products/category/${category}`
        }),
        getCategoryById: builder.query({
            query: (categoryId = 1) => `categories/${categoryId}`,
        }),
        getAllUsers: builder.query({
            query: () => `users`,
        }),
        getUserById: builder.query({
            query: (userId = 1) => `users/${userId}`,
        }),
        createUser: builder.mutation({
            query: (user) => ({
                url: `users/`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: user,
            })
        }),
        isRegisteredEmail: builder.mutation({
            query: (email) => ({
                url: 'users/is-available',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {email}
            })
        })
    })
})
export const {
    useGetAllProductsQuery,
    useLazyGetAllProductsQuery,
    useGetProductByIdQuery,
    useLazyGetProductByIdQuery,
    useGetAllCategoriesQuery,
    useGetAllProductsByCategoryQuery,
    useLazyGetAllProductsByCategoryQuery,
    useLazyGetAllCategoriesQuery,
    useGetCategoryByIdQuery,
    useLazyGetCategoryByIdQuery,
    useGetAllUsersQuery,
    useLazyGetAllUsersQuery,
    useGetUserByIdQuery,
    useLazyGetUserByIdQuery,
    useCreateUserMutation,
    useIsRegisteredEmailMutation
} = productsApi;