# Generated by Django 3.0.3 on 2020-05-04 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id_company', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('add', models.CharField(max_length=200)),
                ('com_tel', models.IntegerField(blank=True, null=True)),
                ('com_info', models.CharField(blank=True, max_length=3000, null=True)),
                ('img', models.CharField(blank=True, max_length=500, null=True)),
                ('cdate', models.DateTimeField()),
                ('udate', models.DateTimeField()),
            ],
            options={
                'db_table': 'company',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Log',
            fields=[
                ('id_log', models.AutoField(primary_key=True, serialize=False)),
                ('search', models.CharField(max_length=60)),
            ],
            options={
                'db_table': 'log',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Manner',
            fields=[
                ('id_manner', models.AutoField(primary_key=True, serialize=False)),
                ('score', models.IntegerField()),
                ('reviewer', models.IntegerField()),
            ],
            options={
                'db_table': 'manner',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id_member', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('user_id', models.CharField(max_length=30)),
                ('user_pw', models.CharField(max_length=55)),
                ('tel', models.CharField(max_length=20)),
                ('birth', models.DateField()),
                ('email', models.CharField(max_length=30)),
                ('gender', models.CharField(max_length=6)),
                ('add', models.CharField(max_length=200)),
                ('cdate', models.DateTimeField()),
                ('udate', models.DateTimeField()),
                ('last_date', models.DateTimeField()),
            ],
            options={
                'db_table': 'member',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id_product', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('price', models.IntegerField()),
                ('info', models.CharField(max_length=3000)),
                ('img', models.CharField(blank=True, max_length=500, null=True)),
                ('cdate', models.DateTimeField()),
                ('udate', models.DateTimeField()),
            ],
            options={
                'db_table': 'product',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='RealDeal',
            fields=[
                ('id_real_deal', models.AutoField(primary_key=True, serialize=False)),
                ('id_shopper', models.IntegerField()),
                ('cdate', models.DateTimeField()),
            ],
            options={
                'db_table': 'real_deal',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='SellerReview',
            fields=[
                ('id_review', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=50)),
                ('cdate', models.DateTimeField()),
            ],
            options={
                'db_table': 'seller_review',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='ShopperReview',
            fields=[
                ('id_review', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=50)),
                ('cdate', models.DateTimeField()),
            ],
            options={
                'db_table': 'shopper_review',
                'managed': False,
            },
        ),
    ]
