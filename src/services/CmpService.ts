import {
  IAddRowCreate,
  IAddRowCreateResponse,
  IGetEntity,
  IRowDeleteProps,
  IRowUpdateProps,
} from "../../types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAddEntity } from "../../types";

export const cmpApi = createApi({
  reducerPath: "cmpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://185.244.172.108:8081/v1/outlay-rows/entity/",
  }),
  tagTypes: ["File"],
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
      providesTags: (result) => ["File"],
    }),
    addRowCreate: builder.mutation<IAddRowCreateResponse, IAddRowCreate>({
      query: (data) => ({
        url: `${data.eID}/row/create`,
        method: "POST",
        body: data.sendData,
      }),
      invalidatesTags: ["File"],
    }),
    deleteRow: builder.mutation<IRowDeleteProps, IRowDeleteProps>({
      query: (data) => ({
        url: `${data.eID}/row/${data.rID}/delete `,
        method: "DELETE",
      }),
      invalidatesTags: ["File"],
    }),
    updateRow: builder.mutation<IRowUpdateProps, IRowUpdateProps>({
      query: (data) => ({
        url: `${data.eID}/row/${data.rID}/update `,
        method: "POST",
        body: data.request,
      }),
      // invalidatesTags: ["File"],
    }),
  }),
});

export const {
  useAddEntityMutation,
  useGetEntityQuery,
  useAddRowCreateMutation,
  useDeleteRowMutation,
  useUpdateRowMutation,
} = cmpApi;
