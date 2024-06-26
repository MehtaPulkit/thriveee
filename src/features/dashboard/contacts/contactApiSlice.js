import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/api/apiSlice";

const contactsAdapter = createEntityAdapter({});

const initialState = contactsAdapter.getInitialState();

export const contactApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        url: "/contacts",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        const loadedContacts = responseData.map((contact) => {
          contact.id = contact._id;
          return contact;
        });
        return contactsAdapter.setAll(initialState, loadedContacts);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Contact", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Contact", id })),
          ];
        } else return [{ type: "Contact", id: "LIST" }];
      },
    }),
    getContact: builder.query({
      query: (id) => ({
        url: `/contacts/${id}`,
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response) => response,
      // Pick out errors and prevent nested properties in a hook or selector
      transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: (result, error, id) => [{ type: "Contact", id }],
    }),
    // checkDuplicate: builder.mutation({
    //   query: (initialContactData) => ({
    //     url: "/contacts/check",
    //     method: "POST",
    //     body: {
    //       ...initialContactData,
    //     },
    //   }),
    //   invalidatesTags: [{ type: "Contact", id: "LIST" }],
    // }),
    addNewContact: builder.mutation({
      query: (initialContactData) => ({
        url: "/contacts",
        method: "POST",
        body: {
          ...initialContactData,
        },
      }),
      invalidatesTags: [{ type: "Contact", id: "LIST" }],
    }),
    updateContact: builder.mutation({
      query: (initialContactData) => ({
        url: "/contacts",
        method: "PATCH",
        body: {
          ...initialContactData,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Contact", id: arg.id },
      ],
    }),
    deleteContact: builder.mutation({
      query: ({ id }) => ({
        url: `/contacts`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Contact", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactQuery,
//   useCheckDuplicateMutation,
  useAddNewContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApiSlice;

// returns the query result object
export const selectContactsResult =
  contactApiSlice.endpoints.getContacts.select();

// creates memoized selector
const selectContactsData = createSelector(
  selectContactsResult,
  (contactsResult) => contactsResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllContacts,
  selectById: selectContactById,
  selectIds: selectContactIds,
  // Pass in a selector that returns the contacts slice of state
} = contactsAdapter.getSelectors(
  (state) => selectContactsData(state) ?? initialState
);
