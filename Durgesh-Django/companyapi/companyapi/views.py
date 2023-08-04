from django.shortcuts import render
from api.models import BlackrockTest


def display_blackrock_test(request):
    # Retrieve all entries from the Blackrock_test table
    blackrock_entries = BlackrockTest.objects.all()

    # Pass the data to the template for rendering
    return render(
        request, "display_blackrock_test.html", {"blackrock_entries": blackrock_entries}
    )
