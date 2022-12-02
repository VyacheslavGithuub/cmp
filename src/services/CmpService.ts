import { IAddRowCreate, IAddRowCreateResponse, IGetEntity } from "../../types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAddEntity } from "../../types";

export const cmpApi = createApi({
  reducerPath: "cmpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://185.244.172.108:8081/v1/outlay-rows/entity/",
  }),
  endpoints: (builder) => ({
    addEntity: builder.mutation<IAddEntity, IAddEntity>({
      query: (newEntity) => ({
        url: "create",
        method: "POST",
        body: newEntity,
      }),
    }),
    getEntity: builder.query<IGetEntity[], number>({
      query: (eID) => ({
        url: `${eID}/row/list`,
      }),
    }),
    addRowCreate: builder.mutation<IAddRowCreateResponse, IAddRowCreate>({
      query: (data) => ({
        url: `${data.eID}/row/create`,
        method: "POST",
        body: data.sendData,
      }),
    }),
  }),
});

export const {
  useAddEntityMutation,
  useGetEntityQuery,
  useAddRowCreateMutation,
} = cmpApi;
