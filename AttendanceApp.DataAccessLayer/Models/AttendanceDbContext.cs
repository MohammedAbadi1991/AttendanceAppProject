using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AttendanceApp.DataAccessLayer.Models
{
    public partial class AttendanceDbContext : DbContext
    {
        public AttendanceDbContext()
        {
        }

        public AttendanceDbContext(DbContextOptions<AttendanceDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Location> Location { get; set; }
        public virtual DbSet<Major> Major { get; set; }
        public virtual DbSet<Session> Session { get; set; }
        public virtual DbSet<Student> Student { get; set; }
        public virtual DbSet<StudentAttendance> StudentAttendance { get; set; }
        public virtual DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.;Database=AttendanceDb;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.3-servicing-35854");

            modelBuilder.Entity<Location>(entity =>
            {
                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Major>(entity =>
            {
                entity.Property(e => e.MajorName).HasMaxLength(50);
            });

            modelBuilder.Entity<Session>(entity =>
            {
                entity.Property(e => e.SessionDate).HasColumnType("datetime");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.Session)
                    .HasForeignKey(d => d.LocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Session_Location");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Major)
                    .WithMany(p => p.Student)
                    .HasForeignKey(d => d.MajorId)
                    .HasConstraintName("FK_Student_Major");

                entity.HasOne(d => d.Town)
                    .WithMany(p => p.Student)
                    .HasForeignKey(d => d.TownId)
                    .HasConstraintName("FK_Student_Location");
            });

            modelBuilder.Entity<StudentAttendance>(entity =>
            {
                entity.Property(e => e.RegistrationTime).HasColumnType("datetime");

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.StudentAttendance)
                    .HasForeignKey(d => d.SessionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_StudentAttendance_Session");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.StudentAttendance)
                    .HasForeignKey(d => d.StudentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_StudentAttendance_Student");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });
        }
    }
}
