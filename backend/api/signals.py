# signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Agent


@receiver(post_save, sender=User)
def create_agent(sender, instance, created, **kwargs):
    if created:
        Agent.objects.create(
            user=instance,
            role="Tester",
            first_name=instance.username,
            email=instance.email,
        )


@receiver(post_save, sender=User)
def save_agent(sender, instance, **kwargs):
    instance.agent.save()
