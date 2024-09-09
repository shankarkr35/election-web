# Generated by Django 4.2.2 on 2023-11-24 17:53
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Campaign',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(blank=True, null=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('deleted', models.BooleanField(default=False)),
                ('status', models.IntegerField(blank=True, choices=[(1, 'منشور'), (2, 'خاص'), (3, 'في أنتظار الموافقة'), (4, 'يفتقد للبيانات'), (5, 'جاري العمل عليه'), (6, 'جديد'), (9, 'محذوف')], null=True)),
                ('priority', models.IntegerField(blank=True, choices=[(3, 'عالي'), (2, 'متوسط'), (1, 'منخفض')], null=True)),
                ('moderators', models.CharField(blank=True, max_length=255, null=True)),
                ('slug', models.SlugField(blank=True, max_length=255, null=True, unique=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('target_votes', models.PositiveIntegerField(blank=True, null=True)),
                ('twitter', models.CharField(blank=True, max_length=120, null=True)),
                ('instagram', models.CharField(blank=True, max_length=120, null=True)),
                ('website', models.CharField(blank=True, max_length=120, null=True)),
            ],
            options={
                'verbose_name': 'Campaign',
                'verbose_name_plural': 'Campaign',
                'db_table': 'campaign',
                'permissions': [('canViewCampaign', 'Can View Campaign'), ('canAddCampaign', 'Can Add Campaign'), ('canChangeCampaign', 'Can Change Campaign'), ('canDeleteCampaign', 'Can Delete Campaign'), ('canChangeCampaignModerator', 'can Change Campaign Moderator'), ('canChangeCampaignCandidate', 'can Change Campaign Candidate'), ('canChangeCampaignManager', 'can Change Campaign Manager'), ('canChangeCampaignAssistant', 'can Change Campaign Assistant')],
                'default_permissions': [],
            },
        ),
        migrations.CreateModel(
            name='CampaignAttendee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(blank=True, null=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('deleted', models.BooleanField(default=False)),
                ('notes', models.TextField(blank=True, null=True)),
                ('status', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Campaign Attendee',
                'verbose_name_plural': 'Campaign Attendees',
                'db_table': 'campaign_attendee',
                'permissions': [('canViewCampaignAttendee', 'Can View Campaign Attendee'), ('canAddCampaignAttendee', 'Can Add Campaign Attendee'), ('canChangeCampaignAttendee', 'Can Change Campaign Attendee'), ('canDeleteCampaignAttendee', 'Can Delete Campaign Attendee')],
                'default_permissions': [],
            },
        ),
        migrations.CreateModel(
            name='CampaignGuarantee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(blank=True, null=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('deleted', models.BooleanField(default=False)),
                ('phone', models.CharField(blank=True, max_length=8, null=True)),
                ('notes', models.TextField(blank=True, null=True)),
                ('status', models.IntegerField(blank=True, choices=[(1, 'جديد'), (2, 'تم التواصل'), (3, 'تم التأكيد'), (4, 'غير مؤكد'), (5, 'غير معروف')], null=True)),
            ],
            options={
                'verbose_name': 'Campaign Guarantee',
                'verbose_name_plural': 'Campaign Guarantees',
                'db_table': 'campaign_guarantee',
                'permissions': [('canViewCampaignGuarantee', 'Can View Campaign Guarantee'), ('canAddCampaignGuarantee', 'Can Add Campaign Guarantee'), ('canChangeCampaignGuarantee', 'Can Change Campaign Guarantee'), ('canDeleteCampaignGuarantee', 'Can Delete Campaign Guarantee')],
                'default_permissions': [],
            },
        ),
        migrations.CreateModel(
            name='CampaignMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(blank=True, null=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('deleted', models.BooleanField(default=False)),
                ('civil', models.CharField(blank=True, max_length=12, null=True, validators=[django.core.validators.RegexValidator(message='Civil must be exactly 12 digits.', regex='^\\d{12}$')])),
                ('phone', models.CharField(blank=True, max_length=8, null=True, validators=[django.core.validators.RegexValidator(message='phone must be exactly 8 digits.', regex='^\\d{8}$')])),
                ('notes', models.TextField(blank=True, null=True)),
                ('status', models.IntegerField(blank=True, choices=[(1, 'جديد'), (2, 'تم التواصل'), (3, 'تم التأكيد'), (4, 'غير مؤكد'), (5, 'غير معروف')], null=True)),
            ],
            options={
                'verbose_name': 'Campaign Member',
                'verbose_name_plural': 'Campaign Members',
                'db_table': 'campaign_member',
                'permissions': [('canViewCampaignMember', 'Can View Test Now'), ('canAddCampaignMember', 'Can Add Test Now'), ('canChangeCampaignMember', 'Can Change Test Now'), ('canDeleteCampaignMember', 'Can Delete Test Now')],
                'default_permissions': [],
            },
        ),
        migrations.CreateModel(
            name='CampaignProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(blank=True, null=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('deleted', models.BooleanField(default=False)),
                ('status', models.IntegerField(blank=True, choices=[(1, 'منشور'), (2, 'خاص'), (3, 'في أنتظار الموافقة'), (4, 'يفتقد للبيانات'), (5, 'جاري العمل عليه'), (6, 'جديد'), (9, 'محذوف')], null=True)),
                ('priority', models.IntegerField(blank=True, choices=[(3, 'عالي'), (2, 'متوسط'), (1, 'منخفض')], null=True)),
                ('moderators', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'verbose_name': 'Campaign Profile',
                'verbose_name_plural': 'Campaign Profiles',
                'db_table': 'campaign_profile',
                'default_permissions': [],
            },
        ),
        migrations.CreateModel(
            name='CampaignSorting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('votes', models.PositiveIntegerField(default=0)),
                ('notes', models.TextField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Campaign Sorting',
                'verbose_name_plural': 'Campaign Sortings',
                'db_table': 'campaign_sorting',
                'permissions': [('canViewCampaignSorting', 'Can View Campaign Sorting'), ('canAddCampaignSorting', 'Can Add Campaign Sorting'), ('canChangeCampaignSorting', 'Can Change Campaign Sorting'), ('canDeleteCampaignSorting', 'Can Delete Campaign Sorting')],
                'default_permissions': [],
            },
        ),
        migrations.AddField(
            model_name='campaign',
            name='created_by',
            field=models.ForeignKey(blank=True, help_text='The user who created this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_created', to=settings.AUTH_USER_MODEL, verbose_name='Created by'),
        ),
        migrations.AddField(
            model_name='campaign',
            name='deleted_by',
            field=models.ForeignKey(blank=True, help_text='The user who deleted this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_deleted', to=settings.AUTH_USER_MODEL, verbose_name='Deleted by'),
        ),
        migrations.AddField(
            model_name='campaign',
            name='election_candidate',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='candidate_campaigns', to='elections.electioncandidate'),
        ),
        migrations.AddField(
            model_name='campaign',
            name='updated_by',
            field=models.ForeignKey(blank=True, help_text='The user who updated this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_updated', to=settings.AUTH_USER_MODEL, verbose_name='Updated by'),
        ),
        migrations.AddField(
            model_name='campaignattendee',
            name='civil',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='elector_attendees', to='voters.voter'),
        ),
        migrations.AddField(
            model_name='campaignattendee',
            name='committee',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='committee_attendees', to='elections.electioncommittee'),
        ),
        migrations.AddField(
            model_name='campaignattendee',
            name='created_by',
            field=models.ForeignKey(blank=True, help_text='The user who created this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_created', to=settings.AUTH_USER_MODEL, verbose_name='Created by'),
        ),
        migrations.AddField(
            model_name='campaignattendee',
            name='deleted_by',
            field=models.ForeignKey(blank=True, help_text='The user who deleted this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_deleted', to=settings.AUTH_USER_MODEL, verbose_name='Deleted by'),
        ),
        migrations.AddField(
            model_name='campaignattendee',
            name='election',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='election_attendees', to='elections.election'),
        ),
        migrations.AddField(
            model_name='campaignattendee',
            name='updated_by',
            field=models.ForeignKey(blank=True, help_text='The user who updated this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_updated', to=settings.AUTH_USER_MODEL, verbose_name='Updated by'),
        ),
        migrations.AddField(
            model_name='campaignattendee',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='attendant_attendees', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='campaignguarantee',
            name='campaign',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='campaign_guarantees', to='campaigns.campaign'),
        ),
        migrations.AddField(
            model_name='campaignguarantee',
            name='civil',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='elector_guarantees', to='voters.voter'),
        ),
        migrations.AddField(
            model_name='campaignguarantee',
            name='created_by',
            field=models.ForeignKey(blank=True, help_text='The user who created this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_created', to=settings.AUTH_USER_MODEL, verbose_name='Created by'),
        ),
        migrations.AddField(
            model_name='campaignguarantee',
            name='deleted_by',
            field=models.ForeignKey(blank=True, help_text='The user who deleted this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_deleted', to=settings.AUTH_USER_MODEL, verbose_name='Deleted by'),
        ),
        migrations.AddField(
            model_name='campaignguarantee',
            name='member',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='guarantee_guarantors', to='campaigns.campaignmember'),
        ),
        migrations.AddField(
            model_name='campaignguarantee',
            name='updated_by',
            field=models.ForeignKey(blank=True, help_text='The user who updated this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_updated', to=settings.AUTH_USER_MODEL, verbose_name='Updated by'),
        ),
        migrations.AddField(
            model_name='campaignmember',
            name='campaign',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='campaign_members', to='campaigns.campaign'),
        ),
        migrations.AddField(
            model_name='campaignmember',
            name='committee',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='committee_members', to='elections.electioncommittee'),
        ),
        migrations.AddField(
            model_name='campaignmember',
            name='created_by',
            field=models.ForeignKey(blank=True, help_text='The user who created this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_created', to=settings.AUTH_USER_MODEL, verbose_name='Created by'),
        ),
        migrations.AddField(
            model_name='campaignmember',
            name='deleted_by',
            field=models.ForeignKey(blank=True, help_text='The user who deleted this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_deleted', to=settings.AUTH_USER_MODEL, verbose_name='Deleted by'),
        ),
        migrations.AddField(
            model_name='campaignmember',
            name='role',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='campaign_role_members', to='auth.group'),
        ),
        migrations.AddField(
            model_name='campaignmember',
            name='supervisor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='supervised_members', to='campaigns.campaignmember'),
        ),
        migrations.AddField(
            model_name='campaignmember',
            name='updated_by',
            field=models.ForeignKey(blank=True, help_text='The user who updated this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_updated', to=settings.AUTH_USER_MODEL, verbose_name='Updated by'),
        ),
        migrations.AddField(
            model_name='campaignmember',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='memberships', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='campaignprofile',
            name='campaign',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='profile_campaigns', to='campaigns.campaign'),
        ),
        migrations.AddField(
            model_name='campaignprofile',
            name='created_by',
            field=models.ForeignKey(blank=True, help_text='The user who created this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_created', to=settings.AUTH_USER_MODEL, verbose_name='Created by'),
        ),
        migrations.AddField(
            model_name='campaignprofile',
            name='deleted_by',
            field=models.ForeignKey(blank=True, help_text='The user who deleted this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_deleted', to=settings.AUTH_USER_MODEL, verbose_name='Deleted by'),
        ),
        migrations.AddField(
            model_name='campaignprofile',
            name='updated_by',
            field=models.ForeignKey(blank=True, help_text='The user who updated this object.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='%(class)s_updated', to=settings.AUTH_USER_MODEL, verbose_name='Updated by'),
        ),
        migrations.AddField(
            model_name='campaignsorting',
            name='election_candidate',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='election_candidate_sortings', to='elections.electioncandidate'),
        ),
        migrations.AddField(
            model_name='campaignsorting',
            name='election_committee',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='election_committee_sortees', to='elections.electioncommittee'),
        ),
        migrations.AddField(
            model_name='campaignsorting',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='sorter_sortees', to=settings.AUTH_USER_MODEL),
        ),
    ]
