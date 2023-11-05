import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../api/axios'


const initialState = {
    isLoading: false,
    products: [],
    product: {},
    error: null
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (__, {rejectWithValue}) => {
        try{
            const {data} = await axios.get('/products')
            return data
        }catch(err) {
            rejectWithValue(err);
        }
    }
)

export const fetchOneProduct = createAsyncThunk(
    'products/fetchOneProduct',
    async ({id}, {rejectWithValue}) => {
        try{
            const {data} = await axios.get(`/products/${id}`)
            return data
        }catch(err) {
            rejectWithValue(err);
        }
    }
)
const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        [fetchProducts.rejected]: (state) => {
            state.isLoading = false;
            state.error = 'error';
        },
        //product detail
        [fetchOneProduct.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchOneProduct.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        },
        [fetchProducts.rejected]: (state) => {
            state.isLoading = false;
            state.error = 'error';
        },

    }
});

export default productsSlice.reducer