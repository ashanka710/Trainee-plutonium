# Generated by Django 5.0.1 on 2024-01-21 08:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ApiApplication', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='student',
            fields=[
                ('student_id', models.IntegerField(primary_key=True, serialize=False)),
                ('student_name', models.CharField(max_length=200)),
                ('created_at', models.DateTimeField()),
            ],
        ),
        migrations.DeleteModel(
            name='Book',
        ),
    ]
