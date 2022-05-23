FROM alpine
ENV FLASK_APP=/fs-backend/base.py
ENV FLASK_ENV=product

# Installing python3 & pip3
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

# Installing Flask
RUN pip3 install Flask
RUN pip3 install flask-cors

# make working directory
RUN mkdir fs-backend

# Copy application from host to image
COPY . fs-backend

EXPOSE 5000

CMD [ "flask","run" ]