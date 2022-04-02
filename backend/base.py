from flask import Flask, request, send_file, send_from_directory #,redirect, url_for
import os
import string   
import random

app = Flask(__name__)
UPLOAD_FOLDER = os.path.join(os.getcwd(), 'store')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def generate_link():
    S = 8  # number of characters in the string.
    # call random.choices() string module to find the string in Uppercase + numeric data.  
    ran = ''.join(random.choices(string.ascii_uppercase + string.digits, k = S))    
    print("The randomly generated string is : " + str(ran)) # print the random data
    return ran

@app.route('/uploadFile',methods = ['POST', 'GET'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            return {
                'status':102,
                'message':'File not found'
            }
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            return {
                'status':102,
                'message':'No selected file'
            }
        link = generate_link()
        store_path = os.path.join(app.config['UPLOAD_FOLDER'],link)
        os.mkdir(store_path,mode = 0o666)
        file.save(os.path.join(store_path,file.filename))
        
        return {
            'status': 200,
            'message': 'Uploaded Successfully!',
            'downloadLink': link
        }

@app.route('/downloadFile')
def download_file():
    link = request.args.get('link')
    store_path = os.path.join(app.config['UPLOAD_FOLDER'],link)
    file_list = os.listdir(store_path)[0]
    return send_from_directory(store_path, file_list, as_attachment=True)

@app.route('/fileName')
def file_name():
    link = request.args.get('token')
    store_path = os.path.join(app.config['UPLOAD_FOLDER'],link)
    the_file = os.listdir(store_path)[0]
    return {
        'status': 200,
        'message': 'karna download',
        'fileName': the_file
        }