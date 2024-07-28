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
            query: ({category, limit}) => `/products/category/${category}?limit=${limit}`
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