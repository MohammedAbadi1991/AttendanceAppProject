namespace AttendanceApp.BusinessLogicLayer.Models
{
    public class StudentModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public int? Age { get; set; }
        public int? TownId { get; set; }
        public string Major { get; set; }
        public short? BloodType { get; set; }

        public virtual LocationModel Town { get; set; }
    }
}
