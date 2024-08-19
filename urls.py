from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactInfoViewSet, ObjectiveViewSet, QualificationViewSet, ExperienceViewSet, EducationViewSet, TechnicalSkillViewSet, ActivityViewSet

router = DefaultRouter()
router.register(r'contact', ContactInfoViewSet)
router.register(r'objective', ObjectiveViewSet)
router.register(r'qualifications', QualificationViewSet)
router.register(r'experiences', ExperienceViewSet)
router.register(r'education', EducationViewSet)
router.register(r'technical-skills', TechnicalSkillViewSet)
router.register(r'activities', ActivityViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
