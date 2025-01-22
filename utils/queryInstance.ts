import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default : true. react query sẽ tự refetch dữ liệu khi cửa sổ trình duyệt lấy lại tiêu điểm
      retry: false, // default : 3,
      staleTime: 5 * 60 * 1000 // 5 phút
    }
  }
});
