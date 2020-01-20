using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AttendanceApp.API.Model
{
    public class APIResponseModel<T>
    {
        public APIResponseModel(string message, string status, int statusCode, T results)
        {
            Message = message;
            Status = status;
            StatusCode = statusCode;
            Results = results;
        }

        public string Message { get; set; }
        public string Status { get; set; }
        public int StatusCode { get; set; }
        public T Results { get; set; }
    }
}
