using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.EntityFrameworkCore;
using WebApiHopeHand.Context;
using WebApiHopeHand.Mail;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddDbContext<HopeContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("SqlDataBase")));

// Configure EmailSettings
builder.Services.Configure<Email>(builder.Configuration.GetSection(nameof(Email)));

// Registrando o serviço de e-mail como uma instância transitória, que é criada cada vez que é solicitada
builder.Services.AddTransient<IEmailService, EmailService>();

builder.Services.AddScoped<EmailSendingService>();

//builder.Services.AddDbContext<HopeContext>(options =>
//    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
