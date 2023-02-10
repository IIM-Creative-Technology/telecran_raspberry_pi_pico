import network
import urequests
import utime
import ujson
from machine import ADC, Pin  

wlan = network.WLAN(network.STA_IF)
wlan.active(True)

ssid = 'Samsung de Lynda'
password = 'Lyn$2016B'
wlan.connect(ssid, password)
url = "http://192.168.113.195:3000/data"

port = ADC(26)

'''
headers = {'Content-Type': 'application/json'}
print(wlan.isconnected())
while not wlan.isconnected():
    print('no connection')
    utime.sleep(1)
    pass
'''

while(True):
    try:
        print("POST")
        r = urequests.post(url)  #lance une requete sur l'url
        print(r.ujson()) # traite sa reponse en Json
    except Exception as e:
        print(e)
