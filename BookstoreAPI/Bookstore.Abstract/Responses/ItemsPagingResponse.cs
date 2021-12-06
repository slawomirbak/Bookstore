namespace Bookstore.Abstract.Responses
{
    public class ItemsPagingResponse<T> : BasePlainResponse
    {
        public ItemsPagingResponse(T data, int total)
        {
            Data = data;
            Total = total;
        }

        public T Data { get; set; }

        public int Total { get; set; }
    }
}