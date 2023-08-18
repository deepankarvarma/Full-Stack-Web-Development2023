# from django.urls import path
# from . import views

# urlpatterns = [
#     path("index", views.index, name="index"),
#     path("login", views.login_view, name="login"),
#     path("signup", views.signup_view, name="signup_view"),
#     path("user", views.user_view, name="user"),
#     path("userprofile", views.user_profile_view, name="user"),
# ]

from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("login", views.login, name="login"),
    path("quiz", views.quiz, name="quiz"),
    path("spc", views.spc, name="spc"),
    path("topsis", views.topsis, name="topsis"),
    path("template", views.template, name="template"),
    path("signup", views.signup, name="signup"),
    path("userprofile", views.userprofile, name="userprofile"),
    path("submit", views.submit, name="submit"),
    path("feature", views.feature, name="feature"),
    path("calculator", views.calculator, name="calculator"),
    path("validate", views.validate, name="validate"),
    path("log", views.log, name="log"),
    path("swp", views.swp, name="swp"),
    path("sip", views.sip, name="sip"),
    path("ppf", views.ppf, name="ppf"),
    path("mfr", views.mfr, name="mfr"),
    path("lumpsum", views.lumpsum, name="lumpsum"),
    path("sukanya", views.sukanya, name="sukanya"),
    path("forget_pass", views.forget_pass, name="forget_pass"),
    path("reset", views.reset, name="reset"),
    path("validate_new", views.validate_new, name="validate_new"),
    path("final_reset", views.final_reset, name="final_reset"),
    path("out", views.out, name="out"),
    # path('add',views.add,name='add'),
   
]
