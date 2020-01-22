using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AttendanceApp.BusinessLogicLayer.BusinessLogic;
using AttendanceApp.DataAccessLayer.UnitOfWork;
using AutoMapper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace AttendanceApp.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AttendanceApp.DataAccessLayer.Models.AttendanceDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Default")));
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddSingleton(provider => new MapperConfiguration(cfg =>
            {
                cfg.AddMaps(new Type[] { typeof(SessionBusinessLogic) });

            }).CreateMapper()); ;

            //// configure basic authentication 
            //services.AddAuthentication("BasicAuthentication")
            //    .AddScheme<AuthenticationSchemeOptions, BasicAuthenticationHandler>("BasicAuthentication", null);

            // Inject Business Logic Classes
            services.AddTransient<ISessionBusinessLogic, SessionBusinessLogic>();
            services.AddTransient<ILocationBusinessLogic, LocationBusinessLogic>();
            services.AddTransient<IUserBusinessLogic, UserBusinessLogic>();
            services.AddTransient<IStudentBusinessLogic, StudentBusinessLogic>();
            services.AddTransient<IMajorBusinessLogic, MajorBusinessLogic>();

            // Inject Unit of Work
            services.AddTransient<IUnitOfWork, UnitOfWork>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseAuthentication();
            //app.UseAuthorization();

            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.UseMvc();
        }
    }
}
