type useMicroCMSGetList = <T>(
  args: {
    endpoint: string;
    queries?: MicroCMSQueries;
  },
  fetchOptions?: FetchOptions
) => Promise<AsyncData<MicroCMSListResponse<T>>>;
type useMicroCMSGetListDetail = <T>(
  args: {
    endpoint: string;
    contentId: string;
    queries?: MicroCMSQueries;
  },
  fetchOptions?: FetchOptions
) => Promise<AsyncData<T & MicroCMSListContent>>;
type useMicroCMSGetObject = <T>(
  args: {
    endpoint: string;
    queries?: MicroCMSQueries;
  },
  fetchOptions?: FetchOptions
) => Promise<AsyncData<T & MicroCMSObjectContent>>;

// // FetchOptions is the same as the second argument option of useFetch provided by Nuxt3.
// // AsyncData is the return value of useFetch.
// // https://nuxt.com/docs/api/composables/use-fetch
