In order to update Models folder, use the below command in Package Manager Console (Be sure to select the "DataAccessLayer" project in the dropdown)

Scaffold-DbContext "Server=.;Database=AttendanceDb;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -force

After updating the classes, you need to add a partial class in file "EFBaseModel", in order to implement interface IBaseEFModel for new classes
