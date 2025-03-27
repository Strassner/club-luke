using Microsoft.EntityFrameworkCore;
using TeeTimeManager.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//Add the database
builder.Services.AddDbContext<TeeTimeContext>(options => 
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnectionString"))
);

// Add CORS to allow the local React app at port 5173
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalReactHost", policy =>
    {
        policy.WithOrigins("http://localhost:5173") 
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//adding the CORS middleware
app.UseCors("AllowLocalReactHost");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
