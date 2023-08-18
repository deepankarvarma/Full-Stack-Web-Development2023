from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages
# Create your views here.
import hashlib
import smtplib
import json
import numpy as np
import email.utils
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from random import randint

from http.client import HTTPResponse
# import cx_Oracle

import argparse

import hashlib
import os
import copy
from datetime import timedelta
import datetime
# from pydub import AudioSegment
# from pydub.playback import play

# from hand_counter import hand_tracker
# from virtual_painter import letter_recognition
from time import sleep
import math
import time


from collections import deque

import random
import threading

from django.db import connection
import requests

# Replace 'YOUR_API_KEY' with your actual NewsAPI key
import requests

def get_finance_news():
    base_url = 'https://newsapi.org/v2/top-headlines'

    params = {
        'apiKey': '3616632b66a341249471193cf0bbb720',
        'country': 'in',
        'category': 'business',
        'language': 'en',
    }

    response = requests.get(base_url, params=params)

    news_data = {'titles': [], 'sources': []}

    if response.status_code == 200:
        data = response.json()
        if data['status'] == 'ok':
            articles = data['articles']
            for article in articles:
                news_data['titles'].append(article['title'])
                news_data['sources'].append(article['source']['name'])
        else:
            news_data['error'] = data['message']
    else:
        news_data['error'] = f"Error fetching news data. Status code: {response.status_code}"

    return news_data


def encrpt(password):
    # salt=bcrypt.genSaltSync()
    # hashed=bcrypt.hash(password,salt)
    hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()
    return hashed_password
def verify(to_address):

    verify_code=str(randint(10000,99999))
    msg=MIMEMultipart()
    msg['to']=email.utils.formataddr(('Recipient',to_address))
    msg['from']=email.utils.formataddr(('Earnify','tarunajain109@gmail.com'))
    msg['Subject']='Email Verification Code from Earnify'
    body=f'Your verification code is {verify_code}.'
    msg.attach(MIMEText(body,'plain'))
    with smtplib.SMTP('smtp.gmail.com',587) as server:
        server.starttls()
        server.login('tarunajain109@gmail.com','rxuvvwejvbsashir')
        server.sendmail('tarunajain109@gmail.com',[to_address],msg.as_string())
    return verify_code 
def reset_pass(to_address):
    verify_code=str(randint(10000,99999))
    msg=MIMEMultipart()
    msg['to']=email.utils.formataddr(('Recipient',to_address))
    msg['from']=email.utils.formataddr(('Earnify','tarunajain109@gmail.com'))
    msg['Subject']='Reset password code from Earnify'
    body=f'Your verification code is {verify_code}.'
    msg.attach(MIMEText(body,'plain'))
    with smtplib.SMTP('smtp.gmail.com',587) as server:
        server.starttls()
        server.login('tarunajain109@gmail.com','rxuvvwejvbsashir')
        server.sendmail('tarunajain109@gmail.com',[to_address],msg.as_string())
    return verify_code  
def submit(request):
    msg=''
    if request.method=='POST':
        data={
       "name" :request.POST['name'],
        "email":request.POST['email'],
       "password":encrpt(request.POST['password']),
        "gender":request.POST['gender'],
       "address": request.POST['address'],
        }
       
        # salt=bcrypt.gensalt()
        # password=bcrypt.hashpw(passwordd.encode('utf-8'),salt)
        x=0
        # print("hi")
        cur=connection.cursor()
        cur.execute("select * from br_profile where email='{}'".format(data['email']))
        if cur.fetchone():
            # flash("Username already used")

            msg="Email already used"
            messages.success(request , "Email already used")
            return render(request,'signup.html',{"msg":msg})
        # cur.execute(f"INSERT INTO EDUKIDS VALUES('{username}','{password}',{x},'{First_name}','{Second_name}',{age},'{gender}','{mail}')")
        sql = "INSERT INTO br_profile (uname, email, upassword, gender, address) VALUES (%(name)s, %(email)s, %(password)s, %(gender)s, %(address)s)"
        
        cur.execute(sql,data)
        connection.commit()
        print(data['email'])
        code=verify(data['email']) 
        code=int(code)
        # cur.execute("select * from EDUKIDS where username='{}' and password='{}'".format(username,password))
        request.session['email']=data['email']
        # abc={
        #     "code":code,
        #     }
        return render(request,'verify.html',{"code":code})
    else:
        # flash("Enter Correctly")
        return render('signin.html') 
def sip(request):
    result=0
    dic={}
    if request.method=='POST':
        monthly=int(request.POST.get('monthly-investment'))
        expected=int(request.POST.get('expected-return-rate'))/1200
        time=int(request.POST.get('time-period'))*12
        # result = monthly+expected+time
        # result=monthly * ((1 + expected)**time - 1) / expected
        t=time*monthly
        result = monthly *(((1 + expected)**time - 1) / expected) *(1 + expected)
        dic={'result' : int(result),'t':int(t),'diff':int(result-t)}
    return render(request,'sip.html',dic)
import requests
def topsis(request):
    context = {}

    if request.method=='POST':

        stock1=request.POST.get("stock1")
        stock2=request.POST.get('stock2')
        stock3=request.POST.get('stock3')
        stock4=request.POST.get('stock4')
        stock5=request.POST.get('stock5')
        stock6=request.POST.get('stock6')
        ss=[]
        ss.append(stock1)
        ss.append(stock2)
        ss.append(stock3)
        ss.append(stock4)
        ss.append(stock5)
        ss.append(stock6)
        # ss.append(stock1)
        # stock4=request.POST.get('stock4')
        # stock5=request.POST.get('stock5')
        # stock6=request.POST.get('stock6')
        # cf1=get_company_fundamentals(stock1)
        # cf2=get_company_fundamentals(stock2)
        # cf3=get_company_fundamentals(stock3)
        # cf1=[]
        # cf2=[]
        # cf3=[]
        # cf4=get_company_fundamentals(stock4)
        # cf5=get_company_fundamentals(stock5)
        # cf6=get_company_fundamentals(stock6)
        # san=[]
        # san.append(cf1)
        # san.append(cf2)
        # san.append(cf3)
        # san.append(cf4)
        # san.append(cf5)
        # san.append(cf6)
        input_data = [
        [1, 2, 3, 4, 5,6,7],
        [2, 3, 4, 5, 6,7,8],
        [3, 1, 4, 5, 6,7,8],
        [4, 4, 4, 5, 6,7,8],
        [5, 6, 4, 5, 6,7,8],
        [6, 7, 4, 5, 6,7,8],
        # ... and so on for 7 rows
    ]
        # print(san)
        content=temp(input_data)
        # content.tolist()
        # print(content[1][1])
        
        result_dict = {}
        for i in range(len(ss)):
            result_dict[ss[i]] = content[i]
        sorted_dict = dict(sorted(result_dict.items(), key=lambda item: item[1], reverse=True))
        context = {
        'sorted_dict': sorted_dict,
    }

    return render(request,'topsis.html',context)
        # list.append(cf1)
        
# def topsis(request):
#     context = {}

#     if request.method=='POST':

#         stock1=request.POST.get("stock1")
#         stock2=request.POST.get('stock2')
#         stock3=request.POST.get('stock3')
#         ss=[]
#         ss.append(stock1)
#         ss.append(stock2)
#         ss.append(stock3)
#         # ss.append("stock4")
#         # ss.append("stock5")
#         # ss.append("stock6")
#         # ss.append(stock1)
#         # stock4=request.POST.get('stock4')
#         # stock5=request.POST.get('stock5')
#         # stock6=request.POST.get('stock6')
#         cf1=get_company_fundamentals(stock1)
#         cf2=get_company_fundamentals(stock2)
#         cf3=get_company_fundamentals(stock3)
#         # cf1=[]
#         # cf2=[]
#         # cf3=[]
#         # cf4=get_company_fundamentals(stock4)
#         # cf5=get_company_fundamentals(stock5)
#         # cf6=get_company_fundamentals(stock6)
#         san=[]
#         san.append(cf1)
#         san.append(cf2)
#         san.append(cf3)
#         # san.append(cf4)
#         # san.append(cf5)
#         # san.append(cf6)
#     #     input_data = [
#     #     [1, 2, 3, 4, 5,6,7],
#     #     [2, 3, 4, 5, 6,7,8],
#     #     [3, 1, 4, 5, 6,7,8],
#     #     [4, 4, 4, 5, 6,7,8],
#     #     [5, 6, 4, 5, 6,7,8],
#     #     [6, 7, 4, 5, 6,7,8],
#     #     # ... and so on for 7 rows
#     # ]
#         print(san)
#         content=temp(san)
#         # content.tolist()
#         # print(content[1][1])
        
#         result_dict = {}
#         for i in range(len(ss)):
#             result_dict[ss[i]] = content[i]
#         sorted_dict = dict(sorted(result_dict.items(), key=lambda item: item[1], reverse=True))
#         context = {
#         'sorted_dict': sorted_dict,
#     }

#     return render(request,'topsis.html',context)
#         # list.append(cf1)
        
def temp(input_data):

    # Define the parameters here
    # input_data = [
    #     [1, 2, 3, 4, 5,6,7],
    #     [2, 3, 4, 5, 6,7,8],
    #     [3, 1, 4, 5, 6,7,8],
    #     [4, 4, 4, 5, 6,7,8],
    #     [5, 6, 4, 5, 6,7,8],
    #     [6, 7, 4, 5, 6,7,8],
    #     # ... and so on for 7 rows
    # ]
    weights = [1, 2,1,1,2,1,1]
    impact = ['+', '+', '+', '+', '+', '+', '+']
    output_file = "result.csv"

    # Create a DataFrame from the input data
    columns = ['col1', 'col2', 'col3', 'col4', 'col5','col6','col7']
    dataset = pd.DataFrame(input_data, columns=columns)
    temp_dataset = dataset.copy()
    nCol = 7

    # Handling non-numeric value and other data preprocessing
    for i in range(1, nCol):
        pd.to_numeric(dataset.iloc[:, i], errors='coerce')
        dataset.iloc[:, i].fillna(dataset.iloc[:, i].mean(), inplace=True)

    context =topsis_pipy(temp_dataset, nCol, weights, impact, dataset, output_file)
    
    # print(context)
    # print(type(context))
    return context

def Normalize(temp_dataset, nCol, weights):
    # Normalizing logic
    for i in range(1, nCol):
        temp = sum(temp_dataset.iloc[j, i]**2 for j in range(len(temp_dataset))) ** 0.5
        for j in range(len(temp_dataset)):
            temp_dataset.iat[j, i] = (temp_dataset.iloc[j, i] / temp) * weights[i-1]
    return temp_dataset

def Calc_Values(temp_dataset, nCol, impact):
    # Calculation of positive and negative values
    p_sln = [max(temp_dataset.iloc[:, i]) for i in range(1, nCol)]
    n_sln = [min(temp_dataset.iloc[:, i]) for i in range(1, nCol)]
    
    for i in range(1, nCol):
        if impact[i-1] == '-':
            p_sln[i-1], n_sln[i-1] = n_sln[i-1], p_sln[i-1]
    return p_sln, n_sln

def topsis_pipy(temp_dataset, nCol, weights, impact, dataset, output_file):
    # Normalizing the array
    temp_dataset = Normalize(temp_dataset, nCol, weights)

    # Calculating positive and negative values
    p_sln, n_sln = Calc_Values(temp_dataset, nCol, impact)
    score = []

    for i in range(len(temp_dataset)):
        temp_p, temp_n = 0, 0
        for j in range(1, nCol):
            temp_p = temp_p + (p_sln[j-1] - temp_dataset.iloc[i, j])**2
            temp_n = temp_n + (n_sln[j-1] - temp_dataset.iloc[i, j])**2
        temp_p, temp_n = temp_p * 0.5, temp_n * 0.5
        score.append(temp_n / (temp_p + temp_n))
        print(score)
    dataset['Topsis Score'] = score
    dataset['Rank'] = dataset['Topsis Score'].rank(method='max', ascending=False).astype(int)
    # print(dataset['Topsis Score'])
    print(dataset['Rank'])
    result_dict = dataset.to_dict(orient='records')
    # print(result_dict)
    context = {
        'data': result_dict,  # Pass the dictionary to the template
    }
    
    # Writing the result to CSV
    # dataset.to_csv(output_file, index=False)
    return score
    return context
    print("Successfully Terminated")

def get_company_fundamentals(symbol):
    fundamentals=[]
    api_key = '8K2zijhtlT3BrRJU4rpg8xXuALavuJs9'
    base_url = "https://api.polygon.io/v2/reference/financials/"
    endpoint = f"{symbol}?apiKey={api_key}"

    response = requests.get(base_url + endpoint)
    data = response.json()

    if response.status_code == 200 and data['status'] == 'OK':
        result = data['results'][0]
        fundamentals.append(result['earningsPerBasicShare'])
        fundamentals.append(result['dividendYield'])
        fundamentals.append(result['debtToEquityRatio'])
        fundamentals.append(result['netCashFlow'])
        fundamentals.append(result['profitMargin'])
        fundamentals.append(result['priceToEarningsRatio'])
        fundamentals.append(result['currentRatio'])
        # fundamentals = {
        #     'EPS': result['earningsPerBasicShare'],
        #     'Dividend Yield': result['dividendYield'],
        #     'Debt Equity Ratio': result['debtToEquityRatio'],
        #     'Net Cash Flow': result['netCashFlow'],
        #     'Profit Margin': result['profitMargin'],
        #     'Price To Earnings Ratio': result['priceToEarningsRatio'],
        #     'Current Ratio': result['currentRatio']
            
        #     # 'Liquidity Ratio': result['liquidityRatio'],
        #     # 'Beta': result['beta'],
        #     # 'Earning Growth Rate': result['earningGrowthRate'],
        # }

        return fundamentals
    else:
        return None

def lumpsum(request):
    result=0
    dic={}
    if request.method=='POST':
        monthly=int(request.POST.get('monthly-investment'))
        expected=int(request.POST.get('expected-return-rate'))
        time=int(request.POST.get('time-period'))
        # result = monthly+expected+time
        # result=monthly * ((1 + expected)**time - 1) / expected
        t=time*monthly
        result = monthly * ((1+expected/100)**time)
        dic={'result' : int(result),'t':int(t),'diff':int(t-result)}
    return render(request,'lumpsum.html',dic)
def ppf(request):
    result=0
    dic={}
    if request.method=='POST':
        monthly=int(request.POST.get('monthly-investment'))
        expected=7.1
        time=int(request.POST.get('time-period'))
        # result = monthly+expected+time
        # result=monthly * ((1 + expected)**time - 1) / expected
        t=time*monthly
        result = monthly *( (((1+expected/100)**time)-1)/(expected/100));
        dic={'result' : int(result),'t':int(t),'diff':int(result-t)}
    return render(request,'ppf.html',dic)
def mfr(request):
    result=0
    dic={}
    if request.method=='POST':
        monthly=int(request.POST.get('monthly-investment'))
        expected=int(request.POST.get('expected-return-rate'))
        time=int(request.POST.get('time-period'))
        # result = monthly+expected+time
        # result=monthly * ((1 + expected)**time - 1) / expected
        t=monthly
        result = monthly *((1+(expected/100))**time);
        dic={'result' : int(result),'t':int(t),'diff':int(result-t)}
    return render(request,'mfr.html',dic)
def swp(request):
    result=0
    dic={}
    if request.method=='POST':
        monthly=int(request.POST.get('monthly-investment'))
        wpm=int(request.POST.get('withdrawl'))
        expected=int(request.POST.get('expected-return-rate'))
        time=int(request.POST.get('time-period'))
        # result = monthly+expected+time
        # result=monthly * ((1 + expected)**time - 1) / expected
        t=time*monthly
        result = monthly *( (((1+expected/100)**time)-1)/(expected/100));
        dic={'result' : int(result),'t':int(t),'diff':int(result-t)}
    return render(request,'swp.html',dic)
def sukanya(request):
    result=0
    dic={}
    if request.method=='POST':
        monthly=int(request.POST.get('monthly-investment'))
        expect=int(request.POST.get('expected-return-rate'))
        expected=10-expect
        time=21-expected
        # result = monthly+expected+time
        # result=monthly * ((1 + expected)**time - 1) / expected
        t=time*monthly
        result = monthly * ((1+expected/100)**time)
        dic={'result' : int(result),'t':int(t),'diff':int(t-result)}
    return render(request,'sukanya.html',dic)
def home(request):
    # return HttpResponse("hello world")
    return render(request,'index.html')
def calculator(request):
    # return HttpResponse("hello world")
    return render(request,'calculator.html')

def quiz(request):
    # return HttpResponse("hello world")
    return render(request,'quiz-final.html')
def feature(request):
    # return HttpResponse("hello world")
    return render(request,'feature.html')
def template(request):
    # return HttpResponse("hello world")
    return render(request,'extra_template.html')
# def model(request):
import pandas as pd
from keras.models import load_model
def spc(request):
    dic={}
    if request.method=='POST':
        ff=request.POST['search']
        csv=pd.read_csv(f'static/archive/{ff}.csv')
        closing=csv['Close']
        # print(closing)
        model = load_model('static/Stacked_LSTM.h5')
        xx=model.predict(closing)
        flat_list = np.array(xx).flatten()
        flat_list = list(flat_list)
        comma_separated_values = ', '.join(map(str, flat_list))
        print(comma_separated_values)
        print(flat_list)
        # plt.plot(xx)
        print(len(xx))
        dic={"data_points":flat_list}

        # plt.plot(xx)
        # plt.savefig('plot.png')   
        # # digitImagePath=os.getcwd()+'//static//test_shapes//'+str(list1[taruna])
        # digitImage=cv2.imread('plot.png')
        # # mergedImage = mergeImage(img,digitImage)
        # ret, jpeg = cv2.imencode('.jpg', digitImage)
        # yield (b'--frame\r\n'
        #        b'Content-Type: image/jpeg\r\n\r\n' + jpeg.tobytes() + b'\r\n')
        return render(request,'spc.html',dic)
        
    
        
    



    # predict_x=model.predict() 

    return render(request,'spc.html',dic)
def out(request):
    if 'username' in request.session:
        request.session.pop('username',None)
    return render(request,'index.html')
def userprofile(request):
    # return HttpResponse("hello world")
    cur=connection.cursor()
    if 'username' in request.session:
        mail=request.session['username']
        cur.execute("select * from br_profile where email='{}'".format(mail))
        record=cur.fetchone()
        dic={
            'name':record[0],
            "email":record[1],
            "gender":record[3],
            "address":record[4]

        }
        return render(request,'profile.html',dic)

    # request.session.pop('email',None)
    connection.close()

    return render(request,'index.html')
def log(request):
    # print("hi")
    if request.method == 'POST':
        email=request.POST['email']
        password=request.POST['password']
        cur=connection.cursor()
        cur.execute("select * from br_profile where email='{}'".format(email))
        record=cur.fetchone()
        # print("hi")
        # print(record)
        if record:
            # hashed_password=record[1]
            if record[5]==0:
                # flash("Email not verified")
                messages.info(request,"Email not verified")
                return render(request ,'login.html')
            elif(hashlib.sha256(password.encode('utf-8')).hexdigest()==record[2]):
            # elif(bcrypt.checkpw(password,record[1])):
                # session.permanent=True
                request.session['username']=record[1]
                # print("hi")
                # return redirect(url_for('home')) #dashboard
                news_result=get_finance_news()
                if 'titles' in news_result and 'sources' in news_result:
                    news_list = [{'title': title, 'source': source} for title, source in zip(news_result['titles'], news_result['sources'])]
                else:
                    news_list = []

                context = {'news_list': news_list}
                return render(request,'user.html',context)
            else:
                # flash("Incorrect password")
                # print("ff")
                messages.info(request,"Incorrect password")
                return render(request ,'login.html')
                # return redirect(url_for('home')) #dashboard
        else:
            messages.info(request,"Incorrect credentials")
            return render(request ,'login.html')
            
        
    # flash("Incorrect username or password") 
    return render(request,'login.html')
def signup(request):
    return render(request,'signup.html')
def add(request):
    val1=request.POST["num1"]
    val2=request.POST["num2"]
    res=int(val1)+int(val2)
    # return render(request,'base.html',{'res':res})
    return render(request,'profile.html')
def validate(request):
    if request.method == 'POST':
        if 'email' in request.session:
            # print("hi")j
            username=request.session['email']
            # print(username)
            cur= connection.cursor()
            cur.execute("update br_profile set verify={} where email='{}'".format(1,username))
            connection.commit()
            request.session.pop('email',None)
            # return redirect(url_for('user'))
            return render(request,'index.html')
        else:
            # flash("OTP NOT CORRECT")
            return render(request,'verify.html',{"ff":"OTP NOT CORRECT"})
def forget_pass(request):
    return render(request,'forgotpass.html')
def login(request):
    return render(request,'login.html')
def validate_new(request):
    if request.method=='POST':
        return render(request,'changepass.html')
def final_reset(request):
    if request.method=='POST':
        if 'reset' in request.session:
            # print("hi")j
            passwd=encrpt(request.POST['pass'])

            mail=request.session['reset']
            # print(username)
            cur=connection.cursor()
            cur.execute("update br_profile set upassword='{}' where email='{}'".format(passwd,mail))
            connection.commit()
            request.session.pop('reset',None)
            return render(request , 'login.html')    
def reset(request):
    msg=''
    if request.method=='POST':
        email=request.POST['mail']
        cur=connection.cursor()
        cur.execute("SELECT * FROM br_profile WHERE email='{}'".format(email))
        record=cur.fetchone()
        if(record):
            code=reset_pass(email)
            # print(code)
            request.session['reset']=email
            return render(request,'reset.html',{"code":code})


        else:
            msg='EMAIL NOT REGISTERED'
            return render(request,'forgotpass.html',{"msg":msg})