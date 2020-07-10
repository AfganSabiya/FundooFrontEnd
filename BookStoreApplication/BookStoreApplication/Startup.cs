 //----------------------------------------------------------------------------------------------------------------------
//<copyright file = "StartUp.cs" company="Bridgelabz">
//   Copyright © 2019 Company="BridgeLabz"
// </copyright>
// <creator name=Afgan Sabiya"/>
//-----------------------------------------------------------------------------------------------------------------------

namespace BookStoreApplication
{
    using System;
    using System.Text;
    using BookStoreRepositoryLayer.Context;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.IdentityModel.Tokens;
    using Swashbuckle.AspNetCore.Filters;
    using Swashbuckle.AspNetCore.Swagger;
    using BookStoreRepositoryLayer.RepositoryInterface;
    using BookStoreBussinessLayer.ManagrImplementation;
    using BookStoreBussinessLayer.ManagerInterface;
    using BookStoreRepositoryLayer.Loggers;
    using System.IO;
    using NLog;
    using Microsoft.Extensions.Logging;
    using BookStoreRepositoryLayer.RespositoryImplementation;
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
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            var a = Configuration.GetConnectionString("UserDBConnection");
            services.AddDbContextPool<UserContext>(options => options.UseSqlServer(a));
            services.AddTransient<IBookAccountRepository, BookAccountRespositoryImplementation>();
            services.AddTransient<IBookAccountManager, BookAccountManagerImplementation>();
            services.AddTransient<IBookRepository, BookRepositoryImplementation>();
            services.AddTransient<IBookManager, BookManagerImplementation>();
            services.AddTransient<ICartRepository, CartRepositoryImplementation>();
            services.AddTransient<ICartManager, CartManager>();
            services.AddTransient<ICustomerRepository, CustomerRespositoryImplementation>();
            services.AddTransient<ICustomerManager, CustomerManagerImplementation>();
            services.Configure<DataProtectionTokenProviderOptions>(opt =>
            opt.TokenLifespan = TimeSpan.FromDays(2));
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateAudience = true,
                    ValidateIssuer = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = Configuration["JWT:url"],
                    ValidAudience = Configuration["JWT:url"],
                    IssuerSigningKey = new SymmetricSecurityKey(key:Encoding.ASCII.GetBytes(this.Configuration["JWT:SecretKey"])),
                    RequireExpirationTime = true
                };
            });
            services.AddCors(add => add.AddPolicy("Policy", builder =>
            {
               builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            }));
            services.AddSwaggerGen(c =>
           {
                c.SwaggerDoc("v1", new Info { Title = "MyTestServices", Version = "v1" });
                c.AddSecurityDefinition("oauth2", new ApiKeyScheme
                {
                   Description = "JWT Bearer token",
                   Name = "Authorization",
                   Type = "apiKey",
                    In = "header"
                });
                c.OperationFilter<SecurityRequirementsOperationFilter>();
            });
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// Configure the application builder
        /// interface deals with current hosting environment of application. 
        /// It could be development or production. Based on hosting environment, we can change behavior of application.
        /// </summary>
        /// <param name="app">ApplicationBuilder .</param>
        /// <param nam   e="env"> Hosting REnvironment .</param>

        public void Configure(IApplicationBuilder app, IHostingEnvironment env,ILoggerFactory loggerFactory)
        {
            app.UseCors("Policy");
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            
            loggerFactory.AddFile("Logs/myapp-{Date}.txt");

            app.UseAuthentication();
            app.UseMvc();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "MyTestServices");
            });
        }
    }
}
