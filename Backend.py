from django.db import models

class ContactInfo(models.Model):
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    linkedin = models.URLField()
    github = models.URLField()

class Objective(models.Model):
    content = models.TextField()

class Qualification(models.Model):
    content = models.TextField()

class Experience(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    start_date = models.CharField(max_length=20)
    end_date = models.CharField(max_length=20)
    description = models.TextField()

class Education(models.Model):
    degree = models.CharField(max_length=100)
    institution = models.CharField(max_length=100)
    start_year = models.CharField(max_length=4)
    end_year = models.CharField(max_length=4)
    accomplishments = models.TextField()

class TechnicalSkill(models.Model):
    skill = models.CharField(max_length=100)
    proficiency = models.CharField(max_length=50)

class Activity(models.Model):
    title = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    description = models.TextField()
