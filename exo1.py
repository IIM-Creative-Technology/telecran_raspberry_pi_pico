import network
import urequests
import utime
import ujson
from machine import ADC, Pin  

wlan = network.WLAN(network.STA_IF)
wlan.active(True)

ssid = 'Pierro-Access-point'
password = '123456789'
wlan.connect(ssid, password)
url = 'http://192.168.4.8:3000/data'
pot = ADC(26)
headers = {'Content-Type': 'application/json'}
print(wlan.isconnected())
while not wlan.isconnected():
    print('no co')
    utime.sleep(1)
    pass

while(True):
    try:
        print(pot.read_u16())
        #r = urequests.get("http://192.168.4.8:3000/")
        r = urequests.post(url, headers=headers, data=pot.read_u16())
        print(r.json())
        r.close()
    except Exception as e :
        print(e)
