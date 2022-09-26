import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";
import qs from "qs";

// export const getAllProfile = createAsyncThunk('profile', async () => {
//   const results = {};
//   console.log('test masuk')
//   try {
//     const {data} = await http().get('/profile');
//     console.log(data + ' ini data action');
//     results.data = data.results;
//     results.page = data.pageInfo;
//     results.message = data.message;
//     return results;
//   } catch (e) {
//     console.log(e + ' ini error');
//     return e;
//   }
// });

export const getAllProfile = createAsyncThunk('profile', async () => {
  const results = {};
  console.log('test test')
  try {
    const {data} = await http().get('/profile');
    console.log(data + ' ini data profile')
    results.data = data.results;
    results.message = data.message;
    return results;
  } catch (e) {
    console.log(e + ' ini console error')
    return e
  }
})

export const topUp = createAsyncThunk(
  'auth/topup',
  async ({token, request}) => {
    const results = {};
    console.log(token + 'ini token');
    console.log(request.toString() + 'ini request');
    try {
      const send = qs.stringify(request);
      console.log(send + 'ini send');
      const {data} = await http(token).post('/auth/topUp', send);
      console.log(data);
      results.data = data.message;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const transfer = createAsyncThunk(
  'auth/transfer',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      const {data} = await http(token).post('auth/transfer', send);
      console.log(data);
      results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e.response.data.message);
      results.error = e.response.data.message;
      return results;
    }
  },
);