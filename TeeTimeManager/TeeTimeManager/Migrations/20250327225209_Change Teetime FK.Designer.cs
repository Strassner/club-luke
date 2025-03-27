﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TeeTimeManager.Data;

#nullable disable

namespace TeeTimeManager.Migrations
{
    [DbContext(typeof(TeeTimeContext))]
    [Migration("20250327225209_Change Teetime FK")]
    partial class ChangeTeetimeFK
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("TeeTimeManager.Models.Entities.TeeTime", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Holes")
                        .HasColumnType("int");

                    b.Property<string>("NameUnder")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TimeSlotId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TimeSlotId");

                    b.ToTable("TeeTimes");
                });

            modelBuilder.Entity("TeeTimeManager.Models.Entities.TimeSlot", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("IsOpen")
                        .HasColumnType("bit")
                        .HasComment("Specifies if TimeSlot is open");

                    b.Property<double>("Price")
                        .HasColumnType("float")
                        .HasComment("TimeSlots can be priced differently");

                    b.Property<DateTime>("Time")
                        .HasColumnType("datetime2");

                    b.Property<int?>("TimeSlotTeeTimeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("TimeSlots");
                });

            modelBuilder.Entity("TeeTimeManager.Models.Entities.TeeTime", b =>
                {
                    b.HasOne("TeeTimeManager.Models.Entities.TimeSlot", "Time")
                        .WithMany()
                        .HasForeignKey("TimeSlotId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Time");
                });
#pragma warning restore 612, 618
        }
    }
}
