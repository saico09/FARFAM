from email.mime.message import MIMEMessage
from msilib.schema import ServiceControl
from Google import Create_Service
import base64
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

CLIENTE="core/trchatbot.json"
API_NAME="gmail"
API_VESION="v1"
SCOPES=["https://mail.google.com/"]

service = Create_Service(CLIENTE,API_NAME,API_VESION,SCOPES)

mimeMessage=MIMEMultipart()
mimeMessage["subject"]="Hola este es el título :P"
emailMsg="buenas, este es el mensaje jaja saludos"
mimeMessage["to"]="marc.contrerasd@duocuc.cl"

mimeMessage.attach(MIMEText(emailMsg,"plain"))

raw_string = base64.urlsafe_b64encode(mimeMessage.as_bytes()).decode()

message = service.users().messages().send(userId="me", body={"raw":raw_string}).execute()
print(message)