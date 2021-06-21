"""
 Application of Programming Principles
 Assignment Template 2021 - Flask & Python
"""
from flask import Flask, render_template, jsonify, request, make_response
import sys, json
import os

app = Flask(__name__)


#@app.route('/')
#def hello_world():
   # return 'Hello World!'

@app.route('/')
def home():
    return render_template('index.html')


@app.route("/api/add", methods = ['GET'])
def add():
    """
    Write a function to
        receive values from the request object
        complete the calculation
        format the result into JSON
        return the JSON response object
    """

    # add your code here
    # use request.args.get('variablename') to get sent vars

    num1 = request.args.get('num1')
    num2 = request.args.get('num2')
    result = float(num1) + float(num2)
    response = make_response(
        jsonify(
            {
                "result": str(result)
            }
        ),
        200,
    )
    response.headers["Content-Type"] = "application/json"
    return response


@app.route("/api/subtract", methods = ['GET'])
def subtract():
    """
    Write a function to
        receive values from the request object
        complete the calculation
        format the result into JSON
        return the JSON response object
    """

    num1 = request.args.get('num1')
    num2 = request.args.get('num2')
    result = float(num1) - float(num2)
    response = make_response(
        jsonify(
            {
                "result": str(result)
            }
        ),
        200,
    )
    response.headers["Content-Type"] = "application/json"
    return response

@app.route("/api/multiply", methods = ['GET'])
def multiply():
    """
    Write a function to
        receive values from the request object
        complete the calculation
        format the result into JSON
        return the JSON response object
    """

    num1 = request.args.get('num1')
    num2 = request.args.get('num2')
    result = float(num1) * float(num2)
    response = make_response(
        jsonify(
            {
                "result": str(result)
            }
        ),
        200,
    )
    response.headers["Content-Type"] = "application/json"
    return response

@app.route("/api/divide", methods = ['GET'])
def divide():
    """
    Write a function to
        receive values from the request object
        complete the calculation
        format the result into JSON
        return the JSON response object
    """

    num1 = request.args.get('num1')
    num2 = request.args.get('num2')
    if num2 == 0:
        response = make_response(
            jsonify(
                {
                    "result": "Cannot divide by 0"
                }
            ),
            200,
        )
    else:
        result = float(num1) / float(num2)
        response = make_response(
            jsonify(
                {
                    "result": str(result)
                }
            ),
            200,
        )
    response.headers["Content-Type"] = "application/json"
    return response

@app.route("/api/journal", methods = ['GET', 'PUT'])
def journal():
    """
    Write a function to
        read the entries in the file containing the journal entries in the data folder
        format the result into JSON response object
        return the JSON response object
    """
    if request.method == 'GET':
        entries = open('data/journal_test.json').readlines()
        response = make_response(
            jsonify(
                {
                    "result": entries
                }
            ),
            200,
        )
        response.headers["Content-Type"] = "application/json"
        return response
    elif request.method == 'PUT':
        the_date = request.args.get('theDate')
        the_name = request.args.get('theName')
        the_text = request.args.get('theText')
        new_data = {
            "name": str(the_name),
            "date": str(the_date),
            "note": str(the_text)
        }

        with open("data/journal_test.json") as json_file:
            data = json.load(json_file)

            temp = data["journals"]
            temp.append(new_data)

        write_json(data)

        entries = open('data/journal_test.json').readlines()

        response = make_response(
            jsonify(
                {
                    "result": entries
                }
            ),
            200,
        )
        response.headers["Content-Type"] = "application/json"

        return response


def write_json(data):
    with open("data/journal_test.json", 'w') as f:
        json.dump(data, f)


@app.route("/api/delete", methods =['DELETE'])
def delete():
    entry_name = request.args.get('theName')
    the_entries = open('data/journal_test.json')
    json_data = json.load(the_entries)
    i = 0
    for row in json_data["journals"]:
        if str(row["name"]) == str(entry_name):
            del json_data["journals"][i]
            json.dump(json_data, open('data/journal_test.json', 'w'))
        i = i + 1
    entries = open('data/journal_test.json').readlines()
    response = make_response(
        jsonify(
            {
                "result": entries
            }
        ),
        200,
    )
    response.headers["Content-Type"] = "application/json"
    return response

@app.route("/api/thought", methods =['GET'])
def thought():
    thoughts = open('data/thoughts.json').readlines()
    response = make_response(
        jsonify(
            {
                "result": thoughts
            }
        ),
        200,
    )
    response.headers["Content-Type"] = "application/json"
    return response

@app.route("/api/allthoughts", methods =['GET', 'PUT'])
def allthoughts():
    if request.method == 'GET':
        thoughts_file = open('data/thoughts.json').readlines()
        response = make_response(
            jsonify(
                {
                    "result": thoughts_file
                }
            ),
            200,
        )
        response.headers["Content-Type"] = "application/json"
        return response
    elif request.method == 'PUT':
        the_thought = request.args.get('theThought')
        the_quotee = request.args.get('theQuotee')
        new_data = {
            "thought": str(the_thought),
            "quotee": str(the_quotee)
        }
        with open('data/thoughts.json') as json_thought_file:
            data = json.load(json_thought_file)

            temp = data["TheThoughts"]
            temp.append(new_data)
        write_json_thoughts(data)
        thoughts_file = open('data/thoughts.json').readlines()
        response = make_response(
            jsonify(
                {
                    "result": thoughts_file
                }
            ),
            200,
        )
        response.headers["Content-Type"] = "application/json"
        return response

def write_json_thoughts(data):
    with open('data/thoughts.json', 'w') as f:
        json.dump(data, f)

@app.route("/api/deleteThought", methods =['DELETE'])
def deleteThought():
    thought_id = str(request.args.get('theThought'))
    the_thoughts = open('data/thoughts.json')
    json_data = json.load(the_thoughts)
    i = 0
    for row in json_data["TheThoughts"]:
        if row["thought"] == str(thought_id):
            del json_data["TheThoughts"][i]
            json.dump(json_data, open('data/thoughts.json', 'w'))
        i = i + 1
    thoughts = open('data/thoughts.json').readlines()
    response = make_response(
        jsonify(
            {
                "result": thoughts
            }
        ),
        200,
    )
    response.headers["Content-Type"] = "application/json"
    return response

if __name__ == '__main__':
    app.run()
