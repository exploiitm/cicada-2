FROM python:3.13-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000
ENV FLAG=exploiitm{caught_1n_th3_c00k13_jar}
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]

