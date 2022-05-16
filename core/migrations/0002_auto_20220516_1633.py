# Generated by Django 3.2.8 on 2022-05-16 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicamento',
            name='gramos',
            field=models.IntegerField(null=True, verbose_name='Gram'),
        ),
        migrations.AlterField(
            model_name='medicamento',
            name='stock',
            field=models.IntegerField(null=True, verbose_name='descMed'),
        ),
        migrations.AlterField(
            model_name='reservar',
            name='NumReservas',
            field=models.IntegerField(null=True, verbose_name='NumReserv'),
        ),
    ]
