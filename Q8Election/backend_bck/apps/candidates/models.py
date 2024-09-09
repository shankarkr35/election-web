from unidecode import unidecode
from django.db import models
from django.utils.text import slugify
import uuid
import secrets
import string

from apps.configs.models import TrackModel, TaskModel
from helper.models_helper import GenderOptions

def generate_random_slug(length=6):
    characters = string.ascii_letters + string.digits  # Letters and digits
    random_slug = ''.join(secrets.choice(characters) for _ in range(length))
    return random_slug


class Candidate(TrackModel, TaskModel):
    # Basic Information
    name = models.CharField(max_length=255, blank=False, null=False)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True)
    gender = models.IntegerField(choices=GenderOptions.choices, null=True, blank=True)
    image = models.ImageField(upload_to="candidates/", blank=True, null=True)
    tags = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = "candidate"
        verbose_name = "Candidate"
        verbose_name_plural = "Candidates"
        default_permissions = []
        permissions  = [
            ("canViewCandidate", "Can View Candidate"),
            ("canAddCandidate", "Can Add Candidate"),
            ("canChangeCandidate", "Can Change Candidate"),
            ("canDeleteCandidate", "Can Delete Candidate"),
        ]
        
    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = generate_random_slug()
        super().save(*args, **kwargs)


class Party(TrackModel, TaskModel):
    name = models.CharField(max_length=255, blank=False, null=False)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True)
    image = models.ImageField(upload_to="parties/", blank=True, null=True)
    tags = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = "party"
        verbose_name = "Party"
        verbose_name_plural = "Parties"
        default_permissions = []
        permissions  = []
        
    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = generate_random_slug()
        super().save(*args, **kwargs)


# class CandidateProfile(TrackModel, AbstractBaseUser, PermissionsMixin):
#     candidate = models.OneToOneField('Candidate', on_delete=models.SET_NULL, null=True, blank=True, related_name="profile_candidates")

#     description = models.CharField(max_length=255, blank=True, null=True)
#     date_of_birth = models.DateField(null=True, blank=True, validators=[MaxValueValidator(limit_value=today)])

#     # Contacts
#     phone = models.CharField(max_length=20, blank=True, null=True)
#     email = models.EmailField(blank=True, null=True)
#     twitter = models.CharField(max_length=255, blank=True, null=True)
#     instagram = models.CharField(max_length=255, blank=True, null=True)

#     # Education & Career
#     education = models.CharField(max_length=255, blank=True, null=True)
#     position = models.CharField(max_length=255, blank=True, null=True)
#     party = models.CharField(max_length=100, blank=True, null=True)

#     class Meta:
#         db_table = 'candidate_profile'
#         verbose_name = "Candidate Profile"
#         verbose_name_plural = "Candidate Profiles"
#         default_permissions = []
#         permissions  = [
#             ("canViewCandidateProfile", "Can View Candidate Profile"),
#             ("canAddCandidateProfile", "Can Add Candidate Profile"),
#             ("canChangeCandidateProfile", "Can Change Candidate Profile"),
#             ("canDeleteCandidateProfile", "Can Delete Candidate Profile"),
#             ]