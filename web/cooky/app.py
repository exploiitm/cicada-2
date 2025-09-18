from flask import Flask, render_template, request, jsonify, make_response
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('cookies.html')

FLAG = os.getenv("FLAG")

@app.route('/log')
def log():
    try:
        if "cookies" in request.cookies:

            cookies = request.cookies["cookies"]
            try:
                cookies = int(cookies)
            except:
                cookies = 0
            if cookies == 6942069420:
                cookies = FLAG
            resp = make_response(jsonify({
                "status": "success",
                "message": f"Cookie count {cookies} received",
            }))
            resp.set_cookie("cookies", str(cookies))
            return resp
        else:
            cookies = 0
            resp = make_response(jsonify({
                "status": "success",
                "message": f"Cookie count {cookies} received",
            }))
            resp.set_cookie("cookies", str(cookies))
            return resp
    except Exception as e:
        print(f"Error processing request: {e}")
        return jsonify({"status": "error", "message": "Internal server error"}), 500

