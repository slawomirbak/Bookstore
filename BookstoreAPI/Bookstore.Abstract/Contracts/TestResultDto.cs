namespace Bookstore.Abstract.Contracts
{
    public class TestResultDto
    {
        public string Message { get; set; }
        public int GoodAnswers { get; set; }
        public int TotalQuestions { get; set; }
        public bool Passed { get; set; }
    }
}
