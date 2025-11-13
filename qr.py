import qrcode

url = input("Enter the URL").strip()
file_path = "C:\\DSA\\qrcode.png"

qr = qrcode.QRCode()
qr.add_data(url)

img = qr.make_image()
img.save(file_path)

print("Qr Code generated")